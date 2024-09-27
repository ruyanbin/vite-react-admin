const LayoutIndex = () => {
	return (
		<div className=" h-full w-full grid gap-1 grid-rows-3 grid-cols-6 grid-flow-col">
			<div className="row-span-3 ">aside</div>
			<div>header</div>
			<div className="row-span-2"></div>
		</div>
	);
};

export default LayoutIndex;
