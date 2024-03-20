# ADT Dominican Republic

## Description

This is the repository for the ADT (accessible digital textbooks) project in the Dominican Republic. The folder contains 2 ePubs (both compressed and in folder form). The ePubs were developed by Book Fusion designed to work with Book Fusion's platform, although they can also be run in an ePub reader like Thorium.

## Getting Started

To play the ePubs in Book Fusion's reader, follow the instructions below.

To play the ePubs offline on desktop with Thorium, follw the instructions below.

To download and edit the ePubs in Calibre, follow the instructions below.

## Play ePubs in Book Fusion

### Prerequisites

You need a desktop computer, tablet or mobile device with a web browser like google chrome. It is recommended to use a desktop or tablet as the book is formatted best to fit larger screen sizes.

### Steps

1. Navigate to [https://www.bookfusion.com/libraries/MOEYI](https://www.bookfusion.com/libraries/MINERD)
2. Choose a book to play. The ADTs have a green label that says 'interactive'.
   - For "La capa del Emperador" go to [https://www.bookfusion.com/books/2592584-harriet-hen-and-the-hawk-unicef](https://www.bookfusion.com/books/3966731-la-capa-del-emperador)
   - For "La Yuca" go to [https://www.bookfusion.com/books/2592566-my-brain-is-my-boss-unicef](https://www.bookfusion.com/books/3865843-la-yuca-adaptacion-del-cuento-el-nabo)

You may also use the iOS app to view the book. The iOS app offers offline functionality.
[https://apps.apple.com/us/app/bookfusion/id1141834096](https://apps.apple.com/us/app/bookfusion/id1141834096) 

1. Download the app.
2. Create an account.
3. Navigate to the [https://www.bookfusion.com/libraries/MOEYI](https://www.bookfusion.com/libraries/MINERD) page.

## Play ePubs offline on desktop with Thorium

You can run ePubs offline on your desktop computer by downloading them and playing them in a compatible reader. For this example, we recommend using [Thorium Reader](https://www.edrlab.org/software/thorium-reader/) from EDR Lab. Thorium reader supports the full ePub 3 spec including media-overlays, interactivity and embedded video.

### Prerequisites

You will need a desktop computer, either Windows, Mac or Linux. You will need Thorium installed. You can [Download Thorium](https://www.edrlab.org/software/thorium-reader/) from the EDRlab website.

### Steps

1. Download the ePubs from this github repository. You can download the whole respository, or each ePub individually by clicking on the ePub, and downloading the 'raw file'.
4. With thorium installed, open the Thorium application, and then press the plus in the top right of the Thorium window.
5. Navigate to the ePub file you downloaded from the github repository.
6. Play!

![A screenshot of the Thorium reader](https://i.imgur.com/j2DlNsK.png)

## Download and edit the ePubs in Calibre

You can download these ePubs to learn more about how they were made or modify them with your own image, video, text and audio content by replacing the assets in the underlying folders.

### Prerequisites

You will need a desktop PC and an editing application. We recommend [Calibre](https://calibre-ebook.com/download).

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/elasticsounds/ADT-Jamaica.git
   ```

2. Import the ePub folders into Calibre.
3. Edit your project using Calibre's in-built ePub editor. If you are new to editing ePubs with Calibre, you can review the [Calibre manual](https://manual.calibre-ebook.com/edit.html).
4. Preview the results in Calibre's inbuilt reader.
5. Export to ePub file and load in Thorium to test.

### Replacing existing content with custom assets

To replace existing content with your own assets, you must be aware of the ePub file structure and have experience editing ePubs. 

- The page content is found in the ```pageXXX.xhtml``` files in the ```OEBPS``` folder. Make sure you update the ```nav.xhtml``` and ```package.opf``` files with your revised structure.
  
- For sign language video files, replace those in the ```video``` folder and for read-aloud audio files, replace the ```.mp3s``` in the ```audio``` folder. Make sure to change the references to these files with the html content and manifest files.
  
- Smil files are used to synchronize the read-aloud audio to the text and have it highlight. These are contained in the ```smil``` folder. To generate additional [smil](https://www.albertopettarin.it/blog/2014/08/02/how-to-create-epub-3-read-aloud-ebooks.html) files, you can edit these manually or use [pubcoder](https://pubcoder.com/)'s built in smil generator. You can watch this [video](https://www.youtube.com/watch?v=lD61p9nOEpo) how to generate smil files using pubcoder.

## License

This project is open source and available under the MIT License.

```
MIT License

Copyright (c) 2023 UNICEF

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
