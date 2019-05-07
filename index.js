const fs = require('fs');
const mdToPdf = require('md-to-pdf');
const toc = require('markdown-toc');

const args = process.argv;
const fileName = args[2];
const maxIndexDepth = args[3];

try {
    (async () => {
        console.log(`Processing index for document: ${fileName}`);
        let data = fs.readFileSync(`${__dirname}/docs/.order`, { encoding: 'utf8' });
        var text = data.toString().replace(/\r/g, '');
        let lines = text.split("\n");
        let allText = lines.map(line => fs.readFileSync(`${__dirname}/docs/` + line + ".md", { encoding: 'utf8' }));
        fs.writeFileSync(`${__dirname}/docs/${fileName}.md`, allText.join(''));

        let result =`\n# Índice\n` + toc(allText.toString(), {maxdepth: `${maxIndexDepth}`, bullets: `-`}).content + `\n<div class="page-break"></div>\n`;        
        fs.writeFileSync(`${__dirname}/docs/Index.md`,result);

        console.log(`Processing document: ${fileName}`);
        lines.splice(2,0,`Index`);
        let finalDoc = lines.map(line => fs.readFileSync(`${__dirname}/docs/` + line + ".md", { encoding: 'utf8' }));
        fs.writeFileSync(`${__dirname}/docs/${fileName}.md`, finalDoc.join(''));

        await mdToPdf(`${__dirname}/docs/${fileName}.md`, { dest: `${__dirname}/output/${fileName}.pdf` }).catch(console.error);

        console.log(`Finish process`);
    })();
}
catch (error) {
    console.log(`Error processing project`);
    console.log(chalk.red(error));
    console.log(error.stack);
}