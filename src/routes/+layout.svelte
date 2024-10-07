<script>
	// import Footer from "./Footer.svelte";
	import Navbar from "$components/Navbar.svelte";
</script>

<div class="app-layout">
	<div class="content-grid">
		<Navbar />
	</div>

	<main class="content-grid">
		<slot />
	</main>

	<!-- <Footer /> -->
	<div class="content-grid">footer</div>
</div>

<style scoped>
	.app-layout {
		position: relative;
		min-height: 100vh;
		min-height: 100dvh;
		display: grid;
		grid-template-rows: var(--nav-height) 1fr auto;
		margin: 0;
		padding: 0;
	}
</style>
