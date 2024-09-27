import { createBrowserRouter } from "react-router-dom";
import staticRoutes from "./modules/static";
const routes = [...staticRoutes];
const modulePage = import.meta.glob("../page/**/*.tsx", { eager: true });
console.log(modulePage, "modulePAGE");
// Object.keys(modulePage).forEach((key:string) => {
//     if(!key.includes('login')||!key.includes('Login')){

//     }
// }

const Router = createBrowserRouter(routes);

export default Router;
