const modulePage = import.meta.glob("@/page/**/*.tsx", { eager: true });
console.log(modulePage, "modulePAGE");
Object.keys(modulePage).forEach(key => {
	console.log(key), console.log(modulePage[key]);

	console.log(modulePage[key]!.default);
});
