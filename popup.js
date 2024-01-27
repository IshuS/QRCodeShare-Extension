// popup.js

// Function to generate QR code using the current page URL
function generateQRCode() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    updateQRCode(url);
  });
}

// Function to update QR code
function updateQRCode(url) {
  // Clear existing QR code
  document.getElementById("qrcode").innerHTML = "";

  // Generate new QR code
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 128,
    height: 128
  });
}

// Generate QR code on extension popup open
generateQRCode();