// Select the value of the SKU so that the barcode can be created.
const sku = document.getElementsByClassName("pdp-jss29")[1].innerHTML.split(' ')[1]

// Select the div with the product details so that the barcode can be placed under.
const productMetaElement = document.getElementsByClassName("pdp-jss8")[0]

// Insert an SVG HTML element below the div containing the Model Number and SKU
productMetaElement.insertAdjacentHTML('afterEnd', "<svg id=\"barcode\"></svg>")

// Create the Barcode and place it in the created SVG element.
JsBarcode("#barcode", sku, {height: 20, width: 2, displayValue: false});