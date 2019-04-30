---
body_class: markdown-body
pdf_options:
  format: A4
  margin: 30mm 20mm
  displayHeaderFooter: true
  headerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 11px;
      }
    </style>
    <section>
      <span></span>
    </section>  
  footerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 9px;
        color: #C0C0C0;
      }
    </style>
    <section>
      <div align="RIGHT">
        Página <span class="pageNumber"></span>
        de <span class="totalPages"></span>
      </div>
    </section>
css: |-
  .page-break { page-break-after: always; }
  .markdown-body { font-size: 14px; text-align: justify; }
  .markdown-body pre > code { white-space: pre-wrap; font-size: 11px; }
  .title { font-size: 60px; text-align: center; line-height: 60px; }
---