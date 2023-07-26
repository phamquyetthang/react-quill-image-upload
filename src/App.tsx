import { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  return (
    <div>
      <Editor onChange={(e) => setHtml(e.html)} />

      {html}
    </div>
  );
}

export default App;
