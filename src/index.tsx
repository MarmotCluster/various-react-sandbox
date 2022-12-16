<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import App from "./App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root")!
);
root.render(<App />);
=======
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root")!
);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
>>>>>>> e64fcc2 (feat: :sparkles: tested recoil)
