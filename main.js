function imageGenerator() {
  let fileName = ""
  const photoshopLayersSets = app.activeDocument.layerSets
  for (let i = 0; i < photoshopLayersSets.length; i++) {
    const layerSet = photoshopLayersSets[i]
    layerSet.visible = true
    const randLayerIndex = Math.floor(Math.random() * layerSet.layers.length)
    const randLayer = layerSet.layers[randLayerIndex]
    randLayer.visible = true
    fileName = fileName + layerSet.fileName + randLayer.fileName
  }
  return fileName
}

function save(fileName) {
  const filePath = new File(folderPath + "/" + fileName + ".png")
  if (!filePath.exists) {
    pngSaveOptions = new PNGSaveOptions()
    pngSaveOptions.interlaced = false
    app.activeDocument.saveAs(filePath, pngSaveOptions, true, Extension.LOWERCASE)
  }
  else x--
}

function revert() {
  const idRvrt = charIDToTypeID("Rvrt")
  executeAction(idRvrt, undefined, DialogModes.NO)
}

function main() {
  const folderPath = app.activeDocument.path + "/" + "NFTS"
  const folder = new Folder(folderPath)
  if (!folder.exists) folder.create()
  const count = prompt("How many versions you want", "")
  for (let x = 0; x < count; x++) {
    const fileName = imageGenerator()
    save(fileName)
    revert()
  }
}

main()