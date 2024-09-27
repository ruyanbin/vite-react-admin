import { Suspense, LazyExoticComponent } from "react";
const lazyImportComponent = (props: { lazyChildren: LazyExoticComponent<() => JSX.Element> }) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<props.lazyChildren />
		</Suspense>
	);
};
export default lazyImportComponent;
