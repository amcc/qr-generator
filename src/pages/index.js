import * as React from "react";
import { QRCodeSVG } from "qrcode.react";

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
  cursor: "pointer",
  // height: "50vh",
};
const svgStyle = {
  height: "50vh",
  width: "50vh",
};

const IndexPage = () => {
  const [url, setUrl] = React.useState("enter a url");
  const [firstFocus, setFirstFocus] = React.useState(false);

  // make an svg
  function downloadAsSVG(event) {
    console.log(event.target.children[0]);
    var tempUrl =
      "data:image/svg+xml;utf8," + encodeURIComponent(event.target.innerHTML);
    var link = document.createElement("a");
    link.download = url;
    link.href = tempUrl;
    link.click();
  }

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>QR Code Generator</h1>

      <form style={formStyles}>
        <input
          style={inputStyles}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onFocus={() => {
            if (!firstFocus) setUrl("");
            setFirstFocus(true);
          }}
        />
      </form>

      <div style={downloader} onClick={downloadAsSVG}>
        <QRCodeSVG
          value={url}
          style={svgStyle}
          // renderAs="svg"
          level="L"
          size="113"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
