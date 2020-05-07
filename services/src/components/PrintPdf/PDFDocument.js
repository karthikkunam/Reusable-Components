import html2Canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import jsPDF from 'jspdf';

export const PAGE_ORIENTATION = {
    LANDSCAPE: 'landscape',
    PORTRAIT: 'portrait'
};

export const SCREEN_VIEW = 'SCREEN_VIEW';
export const PRINT_VIEW = 'PRINT_VIEW';

window.html2canvas = html2Canvas;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const getElementDimention = (domElement) =>  {
    if (domElement && domElement.getBoundingClientRect) {
        return domElement.getBoundingClientRect();
    }
    return {
        width: domElement.offsetWidth,
        height: domElement.offsetHeight
    };
};

const printScreen = ()  => window.print();

export class PDFDocument {
    constructor() {
        this.isArray = false;
    }

    static printScreen() {
        // we need to use html2Canvas and then use pdfmake to render the image into PDF. 
        const element = document.body;
        html2Canvas(element, {
            scale: 2
        }).then(canvas => {
            const data = canvas.toDataURL('img/jpeg', 2);
            const dim = getElementDimention(element);
            const w = dim.width;
            const h = dim.height;

            const definition = {
                pageMargins: [0, 0, 0, 0],
                pageSize: {
                    width: w,
                    height: h
                },
                pageOrientation: w >= h ? PAGE_ORIENTATION.LANDSCAPE : PAGE_ORIENTATION.PORTRAIT,
                content: [{
                    image: data,
                    width: w,
                    height: h,
                    margin: [0, 0, 0, 0]
                }]
            };
            // pdfMake.createPdf(definition).print(); 

            const currentDocument = pdfMake.createPdf(definition);
            currentDocument._openPdf = printScreen;
            currentDocument.open();

        }).catch(err => console.log(err));
    }

    static printReport(elem, customHeader, customGridHeader, options = {}, callback) {

        if(options.type === SCREEN_VIEW) {
            PDFDocument.printScreen();
            return;
        }
        // we need to use html2Canvas and then use pdfmake to render the image into PDF. 
        const root = document.getElementsByClassName('rwt__tabs ');
        const hideElements = document.getElementsByClassName('hide-in-reports');
        const displayElements = document.getElementsByClassName('display-in-reports');
        
        if(root.length) {
            root[0].className = root[0].className+' report-container';
        }
        if(hideElements.length) {
            [...hideElements].forEach((e) => {
                e.className = e.className+' must-hidden';
            });
        }
        if(displayElements.length) {
            [...displayElements].forEach((e) => {
                e.className = e.className+' display-block';
            });
        }

        const element = elem || document.body;
        
        let doc = new jsPDF('p', 'px', 'a4');
        let pageWidth = Math.round(doc.internal.pageSize.getWidth());
        let pageHeight = Math.round(doc.internal.pageSize.getHeight());
        let headersHeight = customHeader ? customHeader.offsetHeight : 0;
        const headerPromise = customHeader ? html2Canvas(customHeader, {scale: 1}) : Promise.resolve();
        let tableHeaderPromise = customGridHeader ? html2Canvas(customGridHeader, {scale: 1}) : Promise.resolve();
        if(options.isAgGrid){
            customGridHeader = element.querySelector("div.ag-header, div[ref='headerRoot']");
            tableHeaderPromise = html2Canvas(customGridHeader, {scale: 1});
        }

        headersHeight += customGridHeader.offsetHeight;
        
        Promise.all([headerPromise, tableHeaderPromise]).then(([headerCanvas, tableHeaderCanvs]) => {
            let headerData, headerHeight = 0, tableHeaderData, tableHeaderHeight = 0;
            if(headerCanvas) {
                headerData = headerCanvas.toDataURL('image/png');
                headerHeight = headerCanvas.height * pageWidth / headerCanvas.width;
            }

            if(tableHeaderCanvs) {
                tableHeaderData = tableHeaderCanvs.toDataURL('image/png');
                tableHeaderHeight = tableHeaderCanvs.height * pageWidth / tableHeaderCanvs.width;
            }
            
            let breakElems = [];
            if(options.type === PRINT_VIEW) {
                breakElems = printHeights(element, pageWidth, pageHeight, headerHeight+tableHeaderHeight, options, headersHeight);
            }
            setTimeout(() => {
                html2Canvas(element, {
                    scale: 1
                }).then(canvas => {
                    if(root.length) {
                        root[0].className = root[0].className.replace(' report-container', '');
                    }
                    if(hideElements.length) {
                        [...hideElements].forEach((e) => {
                            e.className = e.className.replace(' must-hidden', '');
                        });
                    }
                    if(displayElements.length) {
                        [...displayElements].forEach((e) => {
                            e.className = e.className.replace('display-block', '');
                        });
                    }
                    let marginTopTotal = 0;
                    [...breakElems].forEach(e => {
                        marginTopTotal += parseInt(e.style.marginTop.split('px')[0]);
                        e.style.marginTop = 0;
                    });
                    if(options.isAgGrid) {
                        const tableContainer = element.querySelector("div.ag-center-cols-clipper, div[ref='eCenterColsClipper']");
                        if(tableContainer) {
                            const existingHeight = tableContainer.style.height;
                            tableContainer.style.height = existingHeight.indexOf('px') > 0 ? (parseInt(existingHeight.split('px')[0]) - marginTopTotal) + 'px' : (existingHeight - marginTopTotal) + 'px';
                        }
                    }
                    // const data = canvas.toDataURL("img/jpeg", 2);
                    const dim = getElementDimention(element);
        
                    let imgData = canvas.toDataURL('image/png');
                    let imgHeight = canvas.height * pageWidth / canvas.width;
                    let heightLeft = imgHeight;
        
                    let position = 0;
                    let totalPages = Math.ceil(imgHeight/pageHeight);
                    if(options.type === SCREEN_VIEW) {
                        if(callback) {
                            callback(imgData);
                        }
                        return;
                    }
                    
                    doc.addImage(imgData, 'PNG', 0, position, pageWidth, imgHeight);
                    heightLeft -= pageHeight;
                    doc.page=1;
                    doc.setFontSize(10);
                    
                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        if(options.type === PRINT_VIEW) {
                            doc.text(pageWidth-70,pageHeight-10, 'Page ' + doc.page +' of '+totalPages);
                        }
                        doc.addPage();
                        doc.page ++;
                        doc.addImage(imgData, 'PNG', 0, position, pageWidth, imgHeight);
                        if(options.type === PRINT_VIEW) {
                            headerData && doc.addImage(headerData, 'PNG', 0, options.pageTopPadding || 0, pageWidth, headerHeight);
                            tableHeaderData && doc.addImage(tableHeaderData, 'PNG', 0, headerHeight+(options.pageTopPadding || 0), pageWidth, tableHeaderHeight);
                        }
                        heightLeft -= pageHeight;
                    }
                    if(options.type === PRINT_VIEW) {
                        doc.text(pageWidth-70,pageHeight-10, 'Page ' + doc.page +' of '+totalPages);
                    }
                    // setTimeout(() => {
                    if(callback) {
                        callback( doc.output('bloburl'));
                    }
        
                }).catch(err => console.log(err));
            }, 10);
        });
        
    }
}

const printHeights = (element, pageWidth, pageHeight, headerHeight, options, initialHeight = 0) => {
    const elem = element;
    let width = elem.offsetWidth;
    let height = elem.offsetHeight;
    let imageHeight = Math.round(height * (pageWidth / width));
    let count = 1, pageCanvasHeight = initialHeight;
    let aspectPageDomHeight = Math.round((height)/ (imageHeight/pageHeight));
    const perPixel = aspectPageDomHeight/pageHeight;
    const breakElems = [];
    const getChilds = (em) => {
        em.children && em.children.length && [...em.children].forEach(e => {
            if(options.isAgGrid && (typeof e.className ==='string' && e.className.indexOf('ag-row')  > -1 && e.parentNode.getAttribute('role') === 'rowgroup')) {
                if((pageCanvasHeight) >= aspectPageDomHeight-150) {
                    breakElems.push(e);
                    const adjustHeight = aspectPageDomHeight-pageCanvasHeight;
                    count++;
                    const marginTop = adjustHeight+initialHeight;
                    e.style.marginTop = (marginTop).toString()+'px';
                    pageCanvasHeight = initialHeight + (options.pageTopPadding || 0);
                    const tableContainer = elem.querySelector("div.ag-center-cols-clipper, div[ref='eCenterColsClipper']");
                    if(tableContainer) {
                        const existingHeight = tableContainer.style.height;
                        tableContainer.style.height = existingHeight.indexOf('px') > 0 ? (parseInt(existingHeight.split('px')[0]) + marginTop) + 'px' : (existingHeight + marginTop) + 'px';
                    }
                }
                pageCanvasHeight += e.offsetHeight;

            } else if (!options.isAgGrid && (e.tagName === 'TR' || (typeof e.className ==='string' && e.className.indexOf('use-in-reports') > -1))) {
                pageCanvasHeight += e.offsetHeight;

                if((pageCanvasHeight) >= aspectPageDomHeight-150) {
                    
                    breakElems.push(e);
                    const adjustHeight = aspectPageDomHeight-pageCanvasHeight;
                    count++;
                    e.style.marginTop = (adjustHeight+(headerHeight * perPixel)).toString()+'px';
                    pageCanvasHeight = headerHeight*perPixel + (options.pageTopPadding || 0);
                }

            }
            if(!options.isAgGrid && e.children.length && e.tagName != 'TR') {
                getChilds(e);
            }
            if(options.isAgGrid && e.children.length && !(typeof e.className ==='string' && e.className.indexOf('ag-row')  > -1 && e.parentNode.getAttribute('role') === 'rowgroup')) {
                getChilds(e);
            }
        });
    };

    if(elem.children.length) {
        getChilds(elem);
    }
    return breakElems;
};
