const fs = require('fs');
const mdToPdf = require('md-to-pdf');

const projectsFile = 'config.json';

const args = process.argv;
const fileName = args[2];

    try {
        (async () => {
            console.log(`Processing data for project: ${fileName}`);
            let data = fs.readFileSync(`${__dirname}/docs/.order`, { encoding: 'utf8' });
            var text = data.toString().replace(/\r/g, '');
            let lines = text.split("\n");
            let allText = lines.map(line => fs.readFileSync(`${__dirname}/docs/` + line + ".md", { encoding: 'utf8' }));
            fs.writeFileSync(`${__dirname}/docs/${fileName}.md`, allText.join(''));
            await mdToPdf(`${__dirname}/docs/${fileName}.md`, { dest: `${__dirname}/output/${fileName}.pdf`}).catch(console.error);
        })();
    }
    catch (error) {
        console.log(`Error processing project`);
        console.log(chalk.red(error));
        console.log(error.stack);
    }