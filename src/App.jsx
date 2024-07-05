import { useState } from "react";
import Header from "./components/Header";
import Popup from "./components/popup";

import Docs from "./Docs";
import Home from "./Home";

function App() {

  const [markdownContent, setMarkdownContent] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [toHome, setToHome] = useState(true);
  const [toDocs, setToDocs] = useState(false);

  return (
    <>
      <Header setToHome={setToHome} setToDocs={setToDocs} />
      {showPopup &&
        <Popup />
      }

      {toHome && <Home markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} setShowPopup={setShowPopup} />}
      {toDocs && <Docs />}
    </>
  )
}

export default App
