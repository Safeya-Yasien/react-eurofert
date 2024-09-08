import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/global.scss";
import "./styles/__variable.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppRouter />
);
