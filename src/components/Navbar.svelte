<script lang="ts">
	import Logo from "$assets/logos/lettermark_flush.svg";
	import LogoLight from "$assets/logos/lettermark_light_flush.svg";
	import { fade, fly, slide } from "svelte/transition";
	import { onMount } from "svelte";
	import { quintInOut } from "svelte/easing";
	import { goto } from "$app/navigation";

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

<header bind:this={navbarEl} class="full-width-container navigation">
	<div class="main-nav container">
		<a href="/" class="nav-logo"
			><img
				class="logo"
				width="1920"
				height="580"
				src={LogoLight}
				alt="brand lettermark logo"
			/></a
		>

		<button on:click={() => toggleMenu()} class="nav-menu-button">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 512" width="24" height="24">
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

	<div class="backdrop {isMenuOpen ? 'open' : ''}" bind:this={backdropEl} role="presentation">
		{#if isMenuOpen}
			<div
				class="mobile-menu"
				transition:slide={{ axis: "x", duration: 300, easing: quintInOut }}
			>
				<nav class="mobile-menu-navigation">
					<ul class="">
						<li>
							<button
								class="mobile-menu-link"
								role="link"
								on:click={() => toggleMenu("/about")}>About</button
							>
						</li>
						<li>
							<button
								class="mobile-menu-link"
								role="link"
								on:click={() => toggleMenu("/contact")}>Contact</button
							>
						</li>
					</ul>
				</nav>

				<div class="mobile-menu-divider"></div>

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

<!-- <nav class="nav">
	<ul class="nav-items">
		<li>
			<a href="/"
				><img
					class="logo"
					width="1920"
					height="580"
					src={LogoLight}
					alt="brand-lettermark-logo"
				/></a
			>
		</li>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><button><i class="fa-solid fa-bars" /></button></li>
	</ul>
</nav> -->

<style scoped>
	.navigation {
		align-content: center;
		padding-block: 0;
		height: var(--nav-height);
		background-color: hsl(from var(--clr-bg) h s l / 0.9);
		transition:
			box-shadow 0.3s,
			backdrop-filter 0.3s;

		&.scrolled {
			/* box-shadow: 0 -0.5rem 0.5rem 0.75rem hsl(from var(--clr-text) h s l / 0.05); */
			backdrop-filter: blur(0.8rem);
		}
	}

	.main-nav {
		display: flex;
		align-items: center;
		padding-block: 0;
	}

	.nav-logo {
		flex: 1;

		& > img {
			max-height: calc(var(--nav-height) - 2rem);
			width: 30vw;
			max-width: 125px;
		}
	}

	.nav-menu-button {
		background-color: transparent;
		border: none;
		color: var(--nav-clr-text);
		cursor: pointer;
		font-size: 1.5rem;
		margin-inline: 1rem;
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
	}

	.mobile-menu {
		min-height: calc(100vh - var(--nav-height));
		min-height: calc(100svh - var(--nav-height));
		margin-inline: 1rem;
		padding-inline: 1rem;
		border-radius: 1rem;
		border: solid 2px var(--clr-bg);
		background-color: hsl(from var(--clr-bg) h s 6%);
		box-shadow: 0 0 0.75rem 1rem hsl(from var(--clr-text) h s l / 0.0125);
		display: grid;
		grid-auto-rows: auto 1fr auto;
	}

	.mobile-menu-navigation {
		& ul {
			list-style: none;
			padding-inline: 0;
			display: grid;
			grid-auto-rows: 1fr;
			margin-top: 0rem;
		}

		& li {
			border-bottom: solid 1px hsl(from var(--clr-bg) h s 20% / 0.5);
		}

		& button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			padding-block: 2rem;
			width: 100%;
			text-align: left;
			font-size: 1.6rem;
			font-weight: 600;
		}
	}

	.mobile-menu-divider {
	}

	.mobile-menu-footer {
		padding-inline: 2rem;
		& ul {
			list-style: none;
			padding-inline: 0;
			display: flex;
			justify-content: space-between;
		}

		& li {
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
