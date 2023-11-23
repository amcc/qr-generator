export function downloadPNG(svg) {
  // specify png with and height in pixels
  var png_width = 1024;
  var png_height = 1024;

  var inline_svg = ""; // code of inline SVG

  var canvas = document.createElement("canvas"); // create <canvas> element
  // The 2D Context provides objects, methods, and properties to draw
  // and manipulate graphics on a canvas drawing surface.
  var context = canvas.getContext("2d");

  // set canvas with and height equal to png with and height
  canvas.width = png_width;
  canvas.height = png_height;

  let image = new Image(); // create <img> element
  image.onload = function () {
    // define fill (specify 'no-repeat' if you don't want it to repeat
    context.fillStyle = context.createPattern(image, "repeat");
    // fill rectangle with defined fill
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.download(canvas.toDataURL("image/png"), "example.png");
  }.bind(this);

  // btoa — binary string to ASCII (Base64-encoded)
  image.src = "data:image/svg+xml;base64," + btoa("inline svg");
}
