<script>
	import ButtonLink from "$components/common/ButtonLink.svelte";
	import HomeAboutUs from "./components/HomeAboutUs.svelte";
	import HomeServices from "./components/HomeServices.svelte";
	import DigitalLandscape from "./components/assets/DigitalLandscape.svelte";
	import HomeWebsitePotential from "./components/HomeWebsitePotential.svelte";
	import HomeReady from "./components/HomeReady.svelte";
</script>

<header class="full-width-container section-spacing">
	<div class="container main-header">
		<div class="heading">
			<h1 id="welcome">Transforming Ideas into <span>Innovation</span></h1>
			<p class="subtitle">
				Our expert team specializes in crafting tailored, full-stack solutions that drive
				performance, enhance user experience, and propel your business forward.
			</p>
		</div>

		<!-- <div class="brand-logo"> -->
		<DigitalLandscape />
		<!-- </div> -->

		<div class="cta-btn">
			<ButtonLink variant="primary" size="lg" href="/contact">Let's talk</ButtonLink>
		</div>
	</div>
</header>

<HomeWebsitePotential />

<HomeServices />

<HomeAboutUs />

<HomeReady />

<style scoped>
	.main-header {
		display: grid;
		gap: 4rem;

		/* & > .brand-logo {
			order: -1;
		} */

		@media (min-width: 768px) {
			justify-items: center;
		}

		@media (min-width: 1024px) {
			grid-template-columns: 1fr 1fr;
			column-gap: 10rem;
			justify-items: flex-start;
			align-items: center;

			& .cta-btn {
				/* margin-top: -6vw; */
			}
		}

		@media (min-width: 1300px) {
			& .cta-btn {
				margin-top: -8rem;
			}
		}
	}

	.main-header :global(.btn) {
		/* display: inline-block; */
		/* margin-top: 2rem; */
	}

	#welcome {
		color: var(--clr-text);
		font-size: clamp(4rem, 8vw, 5.5rem);

		& > span {
			display: inline-block;
			position: relative;
			color: var(--clr-primary);

			&::after {
				content: url("../assets/backgrounds/underline.svg");
				position: absolute;
				inset: 0.5em 0 0 0;
			}
		}
	}

	.brand-logo {
		display: none;

		@media (min-width: 768px) {
			display: block;
			margin: 2rem;
		}
	}
</style>
