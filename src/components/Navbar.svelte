<script lang="ts">
	import Logo from "$assets/logos/lettermark_flush.svg";
	import LogoLight from "$assets/logos/lettermark_light.svg";

	let isMenuOpen = false;
	function toggleMenu(e: MouseEvent) {
		e.preventDefault();
		isMenuOpen = !isMenuOpen;
		console.log(`isMenuOpen :>>`, isMenuOpen);
	}
	console.log(`isMenuOpen :>>`, isMenuOpen);
</script>

<header class="full-width-container navigation">
	<div class={isMenuOpen ? "backdrop" : "hidden"} on:click={toggleMenu} role="presentation">
		hi
	</div>
	<div class="container">
		<div class="mobile-nav">
			<a href="/"
				><img
					class="logo"
					width="1920"
					height="580"
					src={Logo}
					alt="brand lettermark logo"
				/></a
			>
			<div></div>
			{isMenuOpen}
			<button on:click={toggleMenu} class="menu-button">
				<span class={isMenuOpen ? "" : "hidden"}>
					<i class="fa-solid fa-times fa-xl" />
				</span>
				<span class={isMenuOpen ? "hidden" : ""}>
					<i class="fa-solid fa-bars fa-xl" />
				</span>
			</button>
		</div>
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
		padding-block: 0;
		height: var(--nav-height);
		background-color: var(--nav-clr-bg);
		color: var(--nav-clr-text);

		& > .container {
			padding-block: 0;
		}
	}

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* width: 100%; */
		/* height: 100%; */
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.mobile-nav {
		display: flex;
		align-items: center;
		height: inherit;

		& > div {
			flex: 1;
		}
	}

	.menu-button {
		background-color: transparent;
		border: none;
		color: var(--nav-clr-text);
		font-size: 1.5rem;
		cursor: pointer;
	}

	.nav-items {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 2rem;

		&:first-child {
			flex: 1;
		}
	}

	.logo {
		max-height: calc(var(--nav-height) - 2rem);
		width: 30vw;
		max-width: 125px;
		/* height: calc(var(--nav-height) - 2rem);
		width: min(100%, 300px); */
		/* height: min(100%, var(--nav-height)); */
	}
</style>
