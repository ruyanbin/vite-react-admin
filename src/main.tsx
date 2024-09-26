import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style/tailwind.css";
import "./style/index.css";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
