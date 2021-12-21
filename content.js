// Select the div with the Model Number and SKU so that the barcode can be placed under.
const productMetaElement = document.getElementsByClassName("product-meta")[0]

// Select the value of the SKU so that the barcode can be created.
const sku = document.getElementsByTagName('dd')[1].innerText;

// Insert an SVG HTML element below the div containing the Model Number and SKU
productMetaElement.insertAdjacentHTML('afterEnd', "<svg id=\"barcode\"></svg>")

// Create the Barcode and place it in the created SVG element.
JsBarcode("#barcode", sku, {height: 20, width: 2, displayValue: false});