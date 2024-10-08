import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { staticRoutes, nologin } from "./modules/static";
import LazyImportComponent from "../components/lazyImportComponent";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/Login" />
	},

	{
		path: "/login",
		element: <LazyImportComponent lazyChildren={lazy(() => import("../page/Login"))} />
	},
	...staticRoutes,
	...nologin
];
const modulePage: Record<string, any> = import.meta.glob("../page/**/*.tsx", { eager: true });
console.log(modulePage, "modulePAGE");
const layoutContainer: RouteObject = {
	path: "/layout",
	element: <LazyImportComponent lazyChildren={lazy(() => import("../Layout/index"))} />,
	children: []
};
Object.keys(modulePage).forEach((key: string) => {
	if (!key.includes("login") || !key.includes("Login")) {
		const item = modulePage[key];
		// 判断是否打开新页面 不打开新页面
		if (!item.blank) {
			layoutContainer.children!.push({
				path: "/layout" + key.replace("../page", "").replace(".tsx", "").replace("/index", ""),
				element: <LazyImportComponent lazyChildren={lazy(() => modulePage[key])} />
			});
		} else {
			// 打开新页面
			routes.push({
				path: key.replace("../page", "").replace(".tsx", "").replace("/index", ""),
				element: <LazyImportComponent lazyChildren={lazy(() => modulePage[key])} />
			});
		}
	}
});
if (layoutContainer.children!.length > 0) {
	routes.push(layoutContainer);
}
console.log(routes, "routes", layoutContainer);
const Router = createBrowserRouter(routes);

export default Router;
