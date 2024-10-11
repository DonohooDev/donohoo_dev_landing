<script>
	import { goto } from "$app/navigation";
	import Button from "$components/common/Button.svelte";
	import LogoHome from "$assets/logos/primary/donohoo_dev_primary.svg";
</script>

<header class="full-width-container">
	<div class="container">
		<div>
			<h1>Transforming Ideas into Innovation</h1>
			<p class="subtitle">
				Our expert team specializes in crafting tailored, full-stack solutions that drive
				performance, enhance user experience, and propel your business forward.
			</p>
		</div>
		<img src={LogoHome} alt="primary logo" />
	</div>
</header>

<style scoped>
	/* header {
		background: url("../assets/backgrounds/waves.svg");
	} */
</style>
