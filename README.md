# NFT Photoshop Collection Generator

This script generates a collection of NFTs from a photoshop project.
 It visibles each time different layers and creates an image. 
 If the image is unique then saves it in the "NFTS" folder.

 ## How to run?
 1. Download this script.
 2. Open your photoshop project.
 3. Go to file -> scripts -> "Script Events Manager".
 4. Check the "Enable Events to Run Scripts/Actions".
 5. Photoshop Event: "Open Document".
 6. Script: Browse the downloaded script.
 7. Press "Add" and then "Done".
 8. Close and reopen your photoshop project.

 ## Important Notes
 1. Make sure your photoshop project structure is compatible (see below).
 2. Before running the script make sure all layers are invisible.
 3. The max collection size is determined by the possible amount combinations.
    For instance: itemsA * itemsB * itemsC ... = maxCombinations
    Don't give a bigger collection size than the possible combinations (will case an infinity loop).

 ## Structure
 The script runs on each folder layers, and each time visible different items.
 Folders represent types of items, such as background, body, hat, glasses and so on.
 While layers represent items.

 For example:
 - backgrounds (folder)
   - background_01 (layer)
   - background_02 (layer)
   ...
 - monkey_faces (folder)
   - face_01 (layer)
   - face_02 (layer)
   ...
 - hats (folder)
   - hat_01 (layer)
   - hat_02 (layer)
   ...
 ...
 
 Make sure each item in a folder has a unique name.
 Feel free to contribute this script.
 Enjoy!
