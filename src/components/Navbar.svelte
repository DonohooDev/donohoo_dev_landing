<script lang="ts">
	import Logo from "$assets/logos/lettermark_flush.svg";
	import LogoLight from "$assets/logos/lettermark_light_flush.svg";
	import FullLogo from "$assets/logos/pictorial/donohoo_dev_pictorial_t.svg";
	// import FullLogo from "$assets/logos/primary/donohoo_dev_primary_t.svg";
	import { fade, fly, slide } from "svelte/transition";
	import { onMount } from "svelte";
	import { quintInOut } from "svelte/easing";
	import { goto } from "$app/navigation";
	import { theme, toggleTheme } from "$stores/theme.store";

	let isMenuOpen = false;
	let navbarEl: HTMLElement | null = null;
	let backdropEl: HTMLDivElement | null = null;
	let scrollY = 0;

	$: if (navbarEl) {
		if (scrollY > 0) {
			navbarEl.classList.add("scrolled");
		} else {
			navbarEl.classList.remove("scrolled");
		}
	}

	function toggleMenu(goToRoute?: string) {
		if (isMenuOpen) {
			// If we are closing the menu
			document.body.style.overflowY = "auto";
		} else {
			// If we are opening the menu
			document.body.style.overflowY = "hidden";
		}

		isMenuOpen = !isMenuOpen;

		if (goToRoute) {
			goto(goToRoute);
		}
		console.log(`isMenuOpen :>>`, isMenuOpen);
	}

	onMount(() => {
		// Ensure the header is updated on initial load
		if (scrollY > 25 && navbarEl) {
			navbarEl.classList.add("scrolled");
		}
	});
</script>

<svelte:window bind:scrollY />

<header bind:this={navbarEl} class="breakout-container navigation">
	<div class="main-nav">
		<span class="nav-logo">
			<img
				class="logo"
				width="1920"
				height="580"
				src={LogoLight}
				alt="brand lettermark logo"
			/>
		</span>

		<nav class="desktop-menu-navigation">
			<ul>
				<li>
					<button class="nav-link" role="link" on:click={() => goto("/")}>Home</button>
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
			{$theme}
			<button class="theme-toggle" on:click={toggleTheme}>
				<svg
					aria-hidden="true"
					focusable="false"
					data-icon="sun-bright"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					width="24"
					height="24"
				>
					{#if $theme === "light"}
						<path
							fill="white"
							d="M256 0c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zm0 400c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zM488 280c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0zM112 256c0-13.3-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24zM437 108.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-45.3 45.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L437 108.9zM154.2 357.8c-9.4-9.4-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.3-45.3c9.4-9.4 9.4-24.6 0-33.9zM403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L403.1 437zM154.2 154.2c9.4-9.4 9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"
						/>
					{:else}
						<path
							fill="white"
							d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
						/>
					{/if}
				</svg></button
			>

			<button on:click={() => toggleMenu()} class="mobile-menu-button">
				<svg
					aria-hidden="true"
					focusable="false"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 338 512"
					width="24"
					height="24"
				>
					{#if !isMenuOpen}
						<path
							d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 272c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24L24 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z"
							fill="white"
							in:fade={{ duration: 150 }}
							out:fade={{ duration: 150 }}
						/>
					{:else}
						<path
							d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
							fill="white"
							in:fade={{ duration: 150 }}
							out:fade={{ duration: 150 }}
						/>
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<div class="backdrop {isMenuOpen ? 'open' : ''}" bind:this={backdropEl} role="presentation">
		{#if isMenuOpen}
			<div
				class="mobile-menu"
				transition:slide={{ axis: "x", duration: 300, easing: quintInOut }}
			>
				<nav class="mobile-menu-navigation">
					<ul>
						<li>
							<i class="fa-light fa-house"></i>
							<button
								class="mobile-menu-link"
								role="link"
								on:click={() => toggleMenu("/")}>Home</button
							>
						</li>
						<li>
							<i class="fa-light fa-buildings"></i>
							<button
								class="mobile-menu-link"
								role="link"
								on:click={() => toggleMenu("/about")}>About</button
							>
						</li>
						<li>
							<i class="fa-light fa-envelope"></i>
							<button
								class="mobile-menu-link"
								role="link"
								on:click={() => toggleMenu("/contact")}>Contact</button
							>
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
								on:click={() => toggleMenu()}>Terms of Use</button
							>
						</li>
						<li>
							<button
								class="mobile-menu-link"
								role="link"
								on:click={() => toggleMenu()}>Privacy Policy</button
							>
						</li>
					</ul>
				</footer>
			</div>
		{/if}
	</div>
</header>

<style scoped>
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.navigation {
		align-content: center;
		padding-block: 0;
		height: var(--nav-height);
		background-color: hsl(from var(--clr-bg) h s l / 0.9);
		transition:
			box-shadow 0.3s,
			backdrop-filter 0.3s;

		&.scrolled {
			backdrop-filter: blur(0.8rem);
		}
	}

	.main-nav {
		display: flex;
		align-items: center;
		padding-block: 0;
	}

	nav.desktop-menu-navigation {
		display: none;

		@media screen and (min-width: 768px) {
			display: block;
			flex: 1;
		}

		& ul {
			display: flex;
			list-style: none;
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
			font-size: 1.8rem;
			font-weight: 400;
		}
	}

	.nav-logo {
		flex: 1;

		@media screen and (min-width: 768px) {
			flex: 0;
		}

		& > img {
			max-height: calc(var(--nav-height) - 2rem);
			width: 30vw;
			max-width: 125px;
		}
	}

	.mobile-menu-button {
		background-color: transparent;
		border: none;
		color: var(--nav-clr-text);
		cursor: pointer;
		font-size: 1.5rem;
		margin-inline: 1rem;

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	.backdrop {
		position: absolute;
		inset: 0;
		top: var(--nav-height);
		pointer-events: auto;
		z-index: -1;
		background-color: #a5137e;

		&.open {
			z-index: 999;
		}

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	.mobile-menu {
		height: calc(100vh - var(--nav-height));
		height: calc(100svh - var(--nav-height));
		margin-inline: 1rem;
		padding-inline: 1rem;
		border-radius: 1rem;
		border: solid 2px var(--clr-bg);
		background-color: hsl(from var(--clr-bg) h s 6%);
		box-shadow: 0 0 0.75rem 1rem hsl(from var(--clr-text) h s l / 0.0125);
		display: grid;
		grid-auto-rows: auto 1fr auto;
		overflow-y: scroll;

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
			border-bottom: solid 1px hsl(from var(--clr-bg) h s 20% / 0.5);
		}

		& button {
			padding-block: 2rem;
			width: 100%;
			text-align: left;
			font-size: 1.6rem;
			font-weight: 400;
		}
	}

	.mobile-menu-divider {
		border-radius: 1rem;
		background: linear-gradient(
			to bottom,
			hsl(from var(--clr-bg) h s 6% / 0.1),
			hsl(from var(--clr-bg) h s 20% / 0.5)
		);
		display: flex;
		place-items: center;

		& > img {
			filter: drop-shadow(0 0 1rem hsl(from var(--clr-bg) h s 3%));
			width: 75%;
			max-width: 40rem;
			margin: auto;
		}
	}

	.mobile-menu-footer {
		padding-inline: 2rem;
		& ul {
			list-style: none;
			padding-inline: 0;
			display: flex;
			justify-content: space-between;
		}

		& button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			font-size: 1.2rem;
			font-weight: 500;
		}
	}
</style>
