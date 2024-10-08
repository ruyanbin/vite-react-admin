import PageError from "../../components/pageError";
import LazyImportComponent from "../../components/lazyImportComponent";
export const nologin = [
	// {
	// 	path: "/login",
	// 	Element: <LazyImportComponent lazyChildren={lazy(() => import("../../page/Login/index"))} />
	// }
];
export const staticRoutes = [
	{
		path: "*",
		element: <PageError />
	}
];
