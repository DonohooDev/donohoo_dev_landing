<script lang="ts">
	import LogoSolid from "./NavbarLogo.svelte";
	import { slide } from "svelte/transition";
	import { quintInOut } from "svelte/easing";
	import NavbarThemeToggle from "./NavbarThemeToggle.svelte";
	import NavbarMobileMenuButton from "./NavbarMobileMenuButton.svelte";
	import { isMobileMenuOpen, toggleMobileMenu } from "$stores/mobile-menu.store";
	import DigitalLandscape from "../home/assets/DigitalLandscape.svelte";
	import ButtonLink from "$components/common/ButtonLink.svelte";
</script>

<header class="full-width-breakout-container navigation">
	<div class="container">
		<div class="main-nav">
			<button class="nav-logo" on:click={() => toggleMobileMenu("/", false)}>
				<LogoSolid />
			</button>

			<nav class="desktop-menu-navigation">
				<ul>
					<li>
						<ButtonLink size="sm" href="/" variant="text">Home</ButtonLink>
					</li>
					<li>
						<ButtonLink size="sm" href="/contact" variant="text">Contact</ButtonLink>
					</li>
				</ul>
			</nav>

			<div class="nav-actions">
				<NavbarThemeToggle />

				<NavbarMobileMenuButton />
			</div>
		</div>

		<div class="backdrop {$isMobileMenuOpen ? 'open' : ''}" role="presentation">
			{#if $isMobileMenuOpen}
				<div
					class="mobile-menu"
					transition:slide={{ axis: "x", duration: 300, easing: quintInOut }}
				>
					<nav class="mobile-menu-navigation">
						<ul>
							<li>
								<button
									class="mobile-menu-link"
									role="link"
									on:click={() => toggleMobileMenu("/")}
								>
									<i
										style="margin-right: 1rem;"
										class="fa-regular fa-house fa-lg"
									/>
									Home
								</button>
							</li>
							<li>
								<button
									class="mobile-menu-link"
									role="link"
									on:click={() => toggleMobileMenu("/contact")}
								>
									<i
										style="margin-right: 1rem;"
										class="fa-regular fa-envelope fa-lg"
									/>
									Contact
								</button>
							</li>
						</ul>
					</nav>

					<div class="mobile-menu-divider">
						<DigitalLandscape />
					</div>

					<footer class="mobile-menu-footer">
						<ul>
							<li>
								<button
									class="mobile-menu-link"
									role="link"
									on:click={() => toggleMobileMenu("terms-of-use")}
									>Terms of Use</button
								>
							</li>
							<li>
								<button
									class="mobile-menu-link"
									role="link"
									on:click={() => toggleMobileMenu("privacy-policy")}
									>Privacy Policy</button
								>
							</li>
						</ul>
					</footer>
				</div>
			{/if}
		</div>
	</div>
</header>

<style scoped>
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.navigation {
		color: var(--clr-text);
		align-content: center;
		padding-block: 0;
		padding-inline: 2rem;
		height: var(--nav-height);
		background-color: hsl(from var(--clr-bg) h s l / 0.85);
		backdrop-filter: blur(0.7rem);
		transition:
			box-shadow 0.3s,
			backdrop-filter 0.3s,
			background-color 0.3s;

		& > .container {
			padding-block: 0;
			height: auto;
		}
	}

	.main-nav {
		display: flex;
		align-items: center;
	}

	.nav-logo {
		flex: 1;
		color: var(--clr-primary);

		@media screen and (min-width: 768px) {
			display: block;
			flex: 0;
		}

		& > svg {
			max-height: calc(var(--nav-height) - 2rem);
			max-width: 125px;
		}
	}

	nav.desktop-menu-navigation {
		display: none;

		@media screen and (min-width: 768px) {
			display: block;
			flex: 1;
		}

		& ul {
			margin-left: 2rem;
			display: flex;
			list-style: none;
			align-items: center;
			gap: 1rem;
		}

		& li {
			display: flex;
			align-items: center;
		}

		& button {
			font-size: var(--font-size-lg);
			font-weight: 500;
			color: var(--clr-text);
		}
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		@media (min-width: 768px) {
			gap: 1rem;
		}
	}

	.backdrop {
		position: absolute;
		inset: 0;
		top: calc(var(--nav-height));
		pointer-events: auto;
		z-index: -1;
		backdrop-filter: blur(0.9rem);
		background-color: orange;

		&.open {
			z-index: 999;
		}

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	.mobile-menu {
		height: calc(100vh - var(--nav-height) - 2rem);
		height: calc(100svh - var(--nav-height) - 2rem);
		margin: 1rem;
		padding-inline: 1rem;
		border-radius: 1rem;
		border: solid 2px hsl(from var(--clr-text) h s l / 0.2);
		background-color: hsl(from var(--clr-bg) h s l / 1);
		box-shadow: 0 0 1rem 0 hsl(from var(--clr-text) h s l / 0.2);
		display: grid;
		grid-auto-rows: auto 1fr auto;
		overflow-y: scroll;
		overscroll-behavior: contain;
		gap: 2rem;

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	nav.mobile-menu-navigation {
		& ul {
			list-style: none;
			padding-inline: 1rem;
			display: grid;
			grid-auto-rows: 1fr;
			margin-top: 0rem;
		}

		& li {
			display: flex;
			align-items: center;
			gap: 1rem;
			border-bottom: solid 1px hsl(from var(--clr-text) h s l / 0.35);
		}

		& button {
			color: var(--clr-text);
			padding-block: 2rem;
			width: 100%;
			text-align: left;
			font-weight: 400;
		}
	}

	.mobile-menu-divider {
		display: flex;
		place-items: center;

		& > svg {
			filter: drop-shadow(0 0 5rem hsl(from var(--clr-primary) h s l / 0.5));
			max-width: 50rem;
			margin: auto;
		}
	}

	:global([data-theme="dark"]) .mobile-menu-divider {
		& > svg {
			filter: drop-shadow(0 0 5rem hsl(from var(--clr-secondary) h s l / 0.5));
		}
	}

	.mobile-menu-footer {
		padding-inline: 2rem;
		margin-bottom: 1rem;

		@media screen and (min-width: 480px) {
			padding-inline: 4rem;
		}

		& ul {
			list-style: none;
			padding-inline: 0;
			display: flex;
			justify-content: space-between;
		}

		& button {
			color: var(--clr-text);
			background-color: transparent;
			border: none;
			cursor: pointer;
			font-size: 1.2rem;
			font-weight: 500;
		}
	}
</style>
