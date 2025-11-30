"use client";

import { Fragment, useState } from "react";

export default function Page() {
  const [hexColor, setHexColor] = useState("#202020");

  function getColorInput(e: any) {
    setHexColor(e.target.value);
  }

  function CreateHeading() {
    return (
      <div>
        <h2 id="appTitle">WELCOME TO HEX GENERATION APPLICATION</h2>
      </div>
    );
  }

  function setBackground(e: any) {
    if (hexColor == "#") {
      document.body.style.backgroundColor = "#" + hexColor;
    } else {
      document.body.style.backgroundColor = hexColor;
    }
  }

  function Button() {
    return (
      <div>
        <button onClick={setBackground}>GENERATE</button>
      </div>
    );
  }

  return (
    <div>
      <header>
        <div>
          <a href=""></a>
        </div>
      </header>
      <div className="container">
        <main>
          <CreateHeading />
          <div>
            <input placeholder="Enter Hex Code: " onChange={getColorInput} />
          </div>
        </main>
      </div>
      <Button />
    </div>
  );
}
