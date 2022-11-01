import PdfPrinter from "pdfmake";

import fs from "fs";

import {fonts} from "./fonts.js"
import { style } from "./styles.js";

//import {content} from "./pdfContent.js"
import {content} from "./pdfContentScore.js"

const pdfCreate = async () => {
    try {
        let docDefinition ={
            content:content.content,
            styles:style,
            pageOrientation: 'landscape',
            pageSize: 'LEGAL',
        }
       // console.log(docDefinition)
        let printer = new PdfPrinter(fonts)
        
        let pdfDoc = printer.createPdfKitDocument(docDefinition)
        const docfinal= fs.createWriteStream("pdfs/pdfTest.pdf")
        pdfDoc.pipe(docfinal)
        pdfDoc.end()
    } catch (error) {
        console.log("Error")
    }
}

pdfCreate()



