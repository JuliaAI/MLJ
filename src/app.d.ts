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
}

export {};
