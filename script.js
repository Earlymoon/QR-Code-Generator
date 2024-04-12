const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("generate button clciked");
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
});
downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");

  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAttr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  qrText.value.length > 0
    ? generateQRcode()
    : alert("Enter the text or URL to generate your QR code");
}

function generateQRcode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#FFD700", // Change to a vibrant color for light areas
    colorDark: "#000080", // Change to a vibrant color for dark areas
  });
}
