// THIS FILE IS CURRENTLY NOT USED BY THE EXTENTSION AT ALL

let sku
let newPageType
let productMetaElement

// Select the value of the SKU so that the barcode can be created.
if (document.getElementsByClassName("pdp-jss29")[1].innerHTML.split(' ')[1]) {
  const sku = document.getElementsByClassName("pdp-jss29")[1].innerHTML.split(' ')[1]
  const newPageType = true
} else {
  const sku = document.getElementsByTagName('dd')[1].innerText
  const newPageType = false
}

// Select the div with the Model Number and SKU so that the barcode can be placed under.
if (newPageType == true) {
  const productMetaElement = document.getElementsByClassName("pdp-jss8")[0]
} else {
  const productMetaElement = document.getElementsByClassName("product-meta")[0]
}

// Insert an SVG HTML element below the div containing the Model Number and SKU
productMetaElement.insertAdjacentHTML('afterEnd', "<svg id=\"barcode\"></svg>")

// Create the Barcode and place it in the created SVG element.
JsBarcode("#barcode", sku, {height: 20, width: 2, displayValue: true});