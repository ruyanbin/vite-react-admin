import { FC } from "react";
import { Result } from "antd";
import { NavLink } from "react-router-dom";
const pageError: FC = () => {
	return (
		<>
			<Result title="Your operation has been executed" extra={<NavLink to={{ pathname: "/home" }}>返回上一页</NavLink>} />
		</>
	);
};

export default pageError;
