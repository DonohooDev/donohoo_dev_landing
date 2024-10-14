<script>
	import { goto } from "$app/navigation";
	import Button from "$components/common/Button.svelte";
	import LogoHome from "$assets/logos/primary/donohoo_dev_primary_flush_t.svg";
	import PrimaryFlushLogo from "$components/common/PrimaryFlushLogo.svelte";
	import ButtonLink from "$components/common/ButtonLink.svelte";
	import HomeAboutUs from "./components/HomeAboutUs.svelte";
	import HomeServices from "./components/HomeServices.svelte";
	import DigitalLandscape from "./components/assets/DigitalLandscape.svelte";
	import HomeWebsitePotential from "./components/HomeWebsitePotential.svelte";
</script>

<header class="full-width-container section-spacing">
	<div class="container main-header">
		<div>
			<h1 id="welcome">Transforming Ideas into <span>Innovation</span></h1>
			<p class="subtitle">
				Our expert team specializes in crafting tailored, full-stack solutions that drive
				performance, enhance user experience, and propel your business forward.
			</p>

			<ButtonLink variant="primary" size="lg" href="/contact">Lets talk</ButtonLink>
		</div>

		<div class="brand-logo">
			<DigitalLandscape />
			<!-- <PrimaryFlushLogo /> -->
		</div>
	</div>
</header>

<HomeAboutUs />

<HomeWebsitePotential />

<HomeServices />

<style scoped>
	.main-header {
		display: grid;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			gap: 8rem;
			align-items: center;
		}
	}

	.main-header :global(.btn) {
		display: inline-block;
		margin-top: 2rem;
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
