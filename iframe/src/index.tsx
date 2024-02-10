import {createRoot} from "react-dom/client";
import {App} from "./App";
import '../../node_modules/iframe-resizer/js/iframeResizer.contentWindow.js';

const root = createRoot(document.getElementById("root")!);
root.render(<App />);