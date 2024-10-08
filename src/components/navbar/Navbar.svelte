<script lang="ts">
	import LogoSolid from "./NavbarLogo.svelte";
	import FullLogo from "$assets/logos/primary/donohoo_dev_primary_t.svg";
	import { slide } from "svelte/transition";
	import { quintInOut } from "svelte/easing";
	import { goto } from "$app/navigation";
	import NavbarThemeToggle from "./NavbarThemeToggle.svelte";
	import NavbarMobileMenuButton from "./NavbarMobileMenuButton.svelte";
	import { isMobileMenuOpen, toggleMobileMenu } from "$stores/mobile-menu.store";
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
						<button class="nav-link" role="link" on:click={() => goto("/")}>Home</button
						>
					</li>
					<li>
						<button class="nav-link" role="link" on:click={() => goto("/about")}>
							About
						</button>
					</li>
					<li>
						<button class="nav-link" role="link" on:click={() => goto("/contact")}>
							Contact
						</button>
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
									on:click={() => toggleMobileMenu("/about")}
								>
									<i
										style="margin-right: 1rem;"
										class="fa-regular fa-buildings fa-lg"
									/>About
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
						<img src={FullLogo} alt="full brand primary logo" />
					</div>

					<footer class="mobile-menu-footer">
						<ul>
							<li>
								<button
									class="mobile-menu-link"
									role="link"
									on:click={() => toggleMobileMenu()}>Terms of Use</button
								>
							</li>
							<li>
								<button
									class="mobile-menu-link"
									role="link"
									on:click={() => toggleMobileMenu()}>Privacy Policy</button
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
		height: var(--nav-height);
		background-color: hsl(from var(--clr-bg) h s l / 0.85);
		backdrop-filter: blur(0.7rem);
		transition:
			box-shadow 0.3s,
			backdrop-filter 0.3s,
			background-color 500ms;

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
			gap: 2rem;

			@media screen and (min-width: 1200px) {
				gap: 4rem;
			}
		}

		& li {
			display: flex;
			align-items: center;
		}

		& button {
			font-size: 1.5rem;
			font-weight: 500;
			color: var(--clr-text);
		}
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 1.25rem;
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
		border: solid 2px hsl(from var(--clr-text) h s l / 0.15);
		background-color: hsl(from var(--clr-bg) h s l / 1);
		box-shadow: 0 0 1rem 0 hsl(from var(--clr-text) h s l / 0.1);
		display: grid;
		grid-auto-rows: auto 1fr auto;
		overflow-y: scroll;
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
			font-size: 1.6rem;
			font-weight: 400;
		}
	}

	.mobile-menu-divider {
		border-radius: 1rem;
		display: flex;
		place-items: center;
		background-color: linear-gradient(
			to bottom,
			hsl(from var(--clr-bg) h s 6% / 0.01),
			hsl(from var(--clr-bg) h s 20% / 0.1),
			hsl(from var(--clr-bg) h s 20% / 0.25)
		);

		& > img {
			filter: drop-shadow(0 0 5rem hsl(from var(--clr-secondary) h s l / 0.4));
			width: 80%;
			max-width: 40rem;
			margin: auto;
		}
	}

	:global([data-theme="light"]) .mobile-menu-divider {
		background-color: hsl(from var(--clr-primary) h s 6% / 0.9);

		& > img {
			filter: drop-shadow(0 0 5rem hsl(from var(--clr-primary) h s l / 0.25));
		}
	}

	.mobile-menu-footer {
		padding-inline: 2rem;

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
