import PdfPrinter from "pdfmake";

import fs from "fs";

import {fonts} from "./fonts.js"
import { style } from "./styles.js";

import {content} from "./pdfContent.js"


let docDefinition ={
    content:content.content,
    styles:style,
    pageOrientation: 'landscape'
}
console.log(docDefinition)
let printer = new PdfPrinter(fonts)

let pdfDoc = printer.createPdfKitDocument(docDefinition)
pdfDoc.pipe(fs.createWriteStream("pdfs/pdfTest.pdf"))
pdfDoc.end()

