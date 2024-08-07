<script>
	import { onMount } from 'svelte';
	import YAML from 'yaml';
	import { base } from '$app/paths'; // may need this for Github pages deployment
	import headerDataYaml from '../../data/Header.yaml?raw';

	let headerData = YAML.parse(headerDataYaml);
	let navOpen = false;

	function toggleNav() {
		navOpen = !navOpen;
	}
	let currentPath = '';

	onMount(() => {
		//   If a link has a dropdown, add sub menu toggle.
		document.querySelectorAll('nav ul li a:not(:only-child)').forEach((item) => {
			item.addEventListener('click', (e) => {
				const sibling = item.nextElementSibling;
				if (sibling && sibling.classList.contains('nav-dropdown')) {
					sibling.style.display = sibling.style.display === 'block' ? 'none' : 'block';
					// Close one dropdown when selecting another
					document.querySelectorAll('.nav-dropdown').forEach((element) => {
						if (element !== sibling) {
							element.style.display = 'none';
						}
					});
					e.stopPropagation();
				}
			});
		});

		// Clicking away from dropdown will remove the dropdown class
		document.querySelector('html')?.addEventListener('click', () => {
			document.querySelectorAll('.nav-dropdown').forEach((element) => {
				element.style.display = 'none';
			});
		});

		// Get the current path
		currentPath = window.location.pathname;
	});
</script>

<section
	class="navigation"
	style={!currentPath.includes('/ecosystem')
		? 'border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);'
		: ''}
>
	<div class="nav-container">
		<div class="brand">
			<a href="./">MLJ.jl</a>
		</div>
		<nav>
			<div class="nav-mobile">
				<a id="nav-toggle" href="#!" on:click={toggleNav} class:active={navOpen}><span></span></a>
			</div>
			<ul class="nav-list" style={navOpen ? 'display: block;' : 'display: none;'}>
				{#each headerData['headerLinks'] as linkItem}
					<li>
						<a
							href="{base}{linkItem.link}"
							target="_{linkItem.target}"
							class:active-link={currentPath === `${base}${linkItem.link}`}
						>
							{linkItem.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</section>

<style lang="scss">
	.active-link {
		color: rgb(255, 255, 255);
		font-weight: bold;
	}
	section {
		background: rgb(100, 50, 100);
		// small screen take full height
	}
	nav {
		float: right;
	}
	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		@media screen and (max-width: 900px) {
			position: fixed;
			width: 100%;
			height: 100vh;
			z-index: 999 !important;
		}
	}
	nav ul li {
		float: left;
		position: relative;
	}
	nav ul li a {
		display: block;
		padding: 0 20px;
		line-height: 70px;
		color: #e6e6e6;
		text-decoration: none;
		font-family: 'Lato';
		font-weight: 500;
	}

	#item-dropdown {
		display: none !important;
	}
	#item-with-dropdown:hover {
		#item-dropdown {
			display: block !important;
		}
	}

	nav ul li a:hover {
		background: rgb(84, 41, 84);
		color: #ffffff;
	}
	nav ul li a:not(:only-child):after {
		padding-left: 4px;
		content: ' ▾';
	}
	nav ul li ul li {
		min-width: 190px;
	}
	nav ul li ul {
		background: rgb(119, 60, 119);
		position: absolute;
		left: 0;
		top: 100%;
	}
	nav ul li ul li a {
		padding: 15px;
		line-height: 20px;
	}

	.nav-dropdown {
		position: absolute;
		z-index: 5;
		/* Guarantees that the dropdown will display on top of any content. */
		box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
		display: none;
	}

	.nav-mobile {
		display: none;
		position: absolute;
		top: 0;
		right: 0;
		height: 70px;
		width: 70px;
	}

	@media only screen and (max-width: 1000px) {
		.nav-mobile {
			display: block;
		}

		nav {
			width: 100%;
			padding: 70px 0 15px;
		}
		nav ul {
			display: none;
			background: rgb(100, 50, 100);
		}
		nav ul li {
			float: none;
		}
		nav ul li a {
			padding: 15px;
			padding-top: 25px;
			padding-bottom: 25px;
			line-height: 20px;
		}
		nav ul li ul li a {
			padding-left: 30px;
		}
	}
	#nav-toggle {
		position: absolute;
		left: 18px;
		top: 25px;
		cursor: pointer;
		padding: 10px 35px 16px 0px;
	}
	#nav-toggle span,
	#nav-toggle span:before,
	#nav-toggle span:after {
		cursor: pointer;
		border-radius: 1px;
		height: 5px;
		width: 35px;
		background: #ffffff;
		position: absolute;
		display: block;
		content: '';
		transition: all 300ms ease-in-out;
	}
	#nav-toggle span:before {
		top: -10px;
	}
	#nav-toggle span:after {
		bottom: -10px;
	}
	#nav-toggle.active span {
		background-color: #ffffff;
	}
	#nav-toggle.active span:before,
	#nav-toggle.active span:after {
		top: 0;
	}
	#nav-toggle.active span:before {
		transform: rotate(45deg);
	}
	#nav-toggle.active span:after {
		transform: rotate(-45deg);
	}

	@media screen and (min-width: 1000px) {
		.nav-list {
			display: block !important;
		}
	}

	.navigation {
		height: 70px;
	}

	.nav-container {
		max-width: 1000px;
		margin: 0 auto;
		// for mobile take max width and max height
		@media screen and (max-width: 600px) {
			height: 1000px;
		}
	}

	.brand {
		position: absolute;
		left: 120px;
		margin-right: 80px;
		float: left;
		line-height: 70px;
		font-size: 1.9em;
		font-family: 'Lato';
		font-style: italic;
		font-weight: 600;

		@media only screen and (max-width: 1200px) {
			left: 20px;
		}
	}
	.brand a,
	.brand a:visited {
		color: #f2f2f2;
		text-decoration: none;
	}
</style>
