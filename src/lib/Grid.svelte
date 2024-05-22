<script lang="ts">
	export let data: DataItem[] = [];
</script>

<div class="modern-grid">
	{#each data as item, index}
		<div class="grid-item">
			{#if item.special}
				<div class="special">{item.special}</div>
			{/if}
			<a href={item.link}>
				<img src={item.image} alt="" />
				<div class="item-title">
					<b>{item.title}</b>
					<p>{item.description}</p>
					{#if item.skills && item.skills.length > 0}
						<span><b>Top Skills: </b>{item.skills.join(', ')}</span>
					{/if}
				</div>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
	:root {
		--background-color: #0f1423;
		--secondary-color: #42d3ce;
		--tertiary-color: #647eff;
		--theme: black;
		--inverse-theme: white;
		--secondary-color-affected: color-mix(in srgb, var(--secondary-color) 65.5%, var(--theme));
		--tertiary-color-affected: color-mix(in srgb, var(--tertiary-color) 65.5%, var(--theme));
		--border-color: color-mix(in srgb, var(--background-color) 85.5%, var(--inverse-theme));
		--text-color: color-mix(in srgb, var(--background-color) 25.5%, var(--inverse-theme));
		--hover-background-color: color-mix(
			in srgb,
			var(--background-color) 84.5%,
			var(--inverse-theme)
		);
	}

	$background-color: var(--background-color);
	$secondary-color: var(--secondary-color);
	$tertiary-color: var(--tertiary-color);
	$theme: var(--theme);
	$inverse-theme: var(--inverse-theme);
	$secondary-color-affected: var(--secondary-color-affected);
	$tertiary-color-affected: var(--tertiary-color-affected);
	$border-color: var(--border-color);
	$text-color: var(--text-color);
	$hover-background-color: var(--hover-background-color);
	
	.modern-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 3), 1fr));
		@media only screen and (max-width: 767px) {
			grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 2), 1fr));
		}
		gap: 20px;
		max-width: 1200px;
		padding: 20px;

		.grid-item {
			position: relative;
			overflow: hidden;
			border-radius: 15px;
			transition: transform 0.3s ease;
			cursor: pointer;
			height: 300px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
			}

			.special {
				background: -webkit-linear-gradient(
					0deg,
					color-mix(in srgb, $background-color 20.5%, $secondary-color-affected),
					$tertiary-color-affected
				);
				border-radius: 20px;
				font-size: 0.6rem;
				position: absolute;
				top: 10px;
				right: 10px;
				padding: 4px;
				color: white;
			}

			.item-title {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				//background-color: rgba(0, 0, 0, 0.9);
				//background: -webkit-linear-gradient(0deg, color-mix(in srgb, $background-color 20.5%, $secondary-color-affected) , $tertiary-color-affected);
				background: color-mix(in srgb, $tertiary-color 25.5%, $theme);
				color: #fff;
				padding: 8px 15px;
				font-size: 1rem;

				p {
					font-size: 0.9rem;
					opacity: 0.7;
					font-weight: normal !important;
					display: none;
				}
				span {
					margin-top: 0.5rem;
					font-size: 0.9rem;
					display: none;
				}
			
			}

			&:hover {
				p {
					display: block;
					animation: fade_in_show 0.5s;
				}
				span {
					display: block;
				}

				.special {
					display: none;
				}
			}

			@keyframes fade_in_show {
				0% {
					opacity: 0;
					transform: scale(0);
				}

				100% {
					opacity: 0.7;
					transform: scale(1);
				}
			}
		}
	}
</style>
