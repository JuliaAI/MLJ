<script lang="ts">
	export let orgs: any[] = [];

	// repeat orgs twice
	orgs = [...orgs, ...orgs, ...orgs];
</script>

<div class="slider">
	<div class="slide-track">
		{#each orgs as org}
			<button class="slide" on:click={() => window.open(org['link'], '_blank')}>
				<img src={org['image']} height="100" width="250" alt={'logo'} />
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	@mixin white-gradient {
		background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		height: 150px;
	}

	$animationSpeed: 30s;

	// Animation
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 7));
		}
	}

	// Styling
	.slider {
		background-color: white;
		box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
		margin: auto;
		overflow: hidden;
		position: relative;
		height: 150px;
		width: 80%;
		margin-top: 3rem;
		border-radius: 2rem;

		&::before,
		&::after {
			@include white-gradient;
			content: '';
			height: 200px;
			position: absolute;
			width: 200px;
			z-index: 2;
		}

		&::after {
			right: 0;
			top: 0;
			transform: rotateZ(180deg);
		}

		&::before {
			left: 0;
			top: 0;
		}

		.slide-track {
			animation: scroll $animationSpeed linear infinite;
			display: flex;
			width: calc(250px * 14);
		}

		.slide {
			height: 150px;
			width: 150px;
			margin: 0rem 1.5rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
</style>
