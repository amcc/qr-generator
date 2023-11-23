import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import { saveSvgAsPng } from "save-svg-as-png";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const formStyles = {
  margin: "0 0 2em  0",
};
const inputStyles = {
  fontSize: "1.3em",
  width: "min(460px, 100%)",
};
const downloader = {
  // cursor: "pointer",
  display: "inline-block",
  // height: "50vh",
};
const svgStyle = {
  // cursor: "pointer",
  height: "50vh",
  width: "50vh",
};
const flex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const IndexPage = () => {
  const [url, setUrl] = React.useState("enter your url here");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const svgRef = React.useRef(null);

  // make an svg
  function downloadAsSVG() {
    var tempUrl =
      "data:image/svg+xml;utf8," + encodeURIComponent(svgRef.current.innerHTML);
    var link = document.createElement("a");
    link.download = "qr-vector.svg";
    link.href = tempUrl;
    link.click();
  }

  function downloadAsPNG() {
    saveSvgAsPng(document.getElementById("qr-code"), "qr-code.png", {
      scale: 10,
    });
  }

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>QR Code Generator</h1>

      <div style={flex}>
        <div>
          <div style={downloader} ref={svgRef}>
            <QRCodeSVG
              id="qr-code"
              value={url}
              style={svgStyle}
              // renderAs="svg"
              level="L"
              size="113"
            />
          </div>
        </div>
        <div>
          <form style={formStyles}>
            <input
              style={inputStyles}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onFocus={() => {
                if (!firstFocus) setUrl("");
                setFirstFocus(true);
              }}
              maxLength={2953}
            />
          </form>

          <div>
            <button onClick={downloadAsSVG}>download SVG</button>
            <button onClick={downloadAsPNG}>download PNG</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
