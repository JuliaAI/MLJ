// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Element {
		style: CSSStyleDeclaration
	}

	interface DataItem {
		image: string;
		title: string;
		description: string;
		link: string;
		github_link: string;
		categories: string;
		skills: string[];
		special: string;
	}

	interface Model {
		modelName: string;
		packageName: string;
		link: string;
	}

	interface ModelMap {
		[genre: string]: Model[];
	}

	interface JsonObject {
		[key: string]: any[];
	}


	type Tutorial = {
		name: string;
		href: string;
		ilos: string[];
	};

	type Section = {
		name: string;
		href: string;
		tags?: string[];
		ilos?: string[];
	};

	type NavigationItem = {
		name: string;
		href: string;
		sections: Section[];
		sectionItemWidth?: string;
		id: string;
	};
}

export { };
