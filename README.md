# QRCodeShare-Extension
QRCodeShare-Extension is a Chrome extension that simplifies QR code sharing. Quickly generate QR codes for the current page URL and effortlessly scan the QR code for easy sharing. Share links seamlessly with this lightweight and user-friendly Chrome extension.

## How to install this extention?
- Clone this repository to your local system. 
- Open chrome browser. 
- Type _chrome://extensions/_ in the url bar.
- Choose _Developer Mode_ from the slider on the right hand top corner.
- Click on _Load Unpacked_ on the left hand top corner.
- Select QRCodeShare-Extension folder from your local system.
- You should find your extension under _All Extensions_.
- Click on _Details_.
- Enable _Pin to toolbar_.

## How to use the extension?
- Open a webpage in a new tab
- Click on the extension, this will pop up a qr code of the url of your website.
- Take out your mobile scan the qr code and you should be ablt to browse the website on your mobile now.

## Understanding the source code
The source code includes mainly 4 files:
- _manifest.json_ this file is used by chrome to configure the extension
- _popup.html_ this file defines the popup design
- _popup.js_ this file defines the js functions like generateQRCode
- _qrcode.min.js_ this file has the library which helps design the qr cord output

_Note:_ this extension can be only used on **Crome** or **Cromium** based browsers like **Edge** etc. 
