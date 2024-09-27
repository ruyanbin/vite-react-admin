import { ConfigProvider } from "antd";
import { FC } from "react";
const App: FC = () => {
	return (
		<div className="w-full h-full bg-block flex items-center justify-center">
			<ConfigProvider componentSize="small">
				<Outlet />
			</ConfigProvider>
		</div>
	);
};

export default App;
