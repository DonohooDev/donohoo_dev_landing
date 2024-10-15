<script>
	import ButtonLink from "$components/common/ButtonLink.svelte";
	import HomeAboutUs from "$components/home/HomeAboutUs.svelte";
	import HomeReady from "$components/home/HomeReady.svelte";
	import HomeServices from "$components/home/HomeServices.svelte";
	import HomeWebsitePotential from "$components/home/HomeWebsitePotential.svelte";
	import DigitalLandscape from "../components/home/assets/DigitalLandscape.svelte";
</script>

<section class="full-width-container section-spacing">
	<header class="container header-margin main-header">
		<div class="heading">
			<h1 id="welcome">
				Transforming Ideas into <span class="underline-title">Innovation</span>
			</h1>
			<p class="subtitle">
				Our expert team specializes in crafting tailored, full-stack solutions that drive
				performance, enhance user experience, and propel your business forward.
			</p>
		</div>

		<DigitalLandscape />

		<div class="cta-btn">
			<ButtonLink variant="primary" size="lg" href="/contact">Let's talk</ButtonLink>
		</div>
	</header>
</section>

<HomeWebsitePotential />

<HomeServices />

<HomeAboutUs />

<HomeReady />

<style scoped>
	.main-header {
		display: grid;
		gap: 4rem;

		@media (min-width: 768px) {
		}

		@media (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
			column-gap: 10rem;
			justify-items: flex-start;
			align-items: center;
		}

		@media (min-width: 1200px) {
			row-gap: 0;
		}
	}

	.heading {
		grid-column: 1;
		grid-row: 1;
	}

	#welcome {
		color: var(--clr-text);
	}

	.main-header > :global(svg) {
		display: none;
		grid-column: 2;
		grid-row: 1;

		@media (min-width: 1028px) {
			display: block;
		}
	}

	.cta-btn {
		grid-column: 1;
		grid-row: 2;

		/* Custom breakpoint for when the button is too far away from the heading */
		@media (min-width: 1300px) {
			grid-column: 1;
			grid-row: 1;
			align-self: flex-end;
		}
	}
</style>
