import ReactDoM from "react-dom/client";
import { App } from "./App"
const rootDiv = document.getElementById("root");

const reactRoot = ReactDoM.createRoot(rootDiv);
reactRoot.render(<App />);