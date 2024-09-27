import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HashRouter } from "react-router-dom";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./style/tailwind.css";
import "./style/index.css";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
