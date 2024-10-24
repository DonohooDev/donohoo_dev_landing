<script lang="ts">
	import { onMount, tick } from "svelte";
	import { draw } from "svelte/transition";

	export let underlineScale: number;
	export let positionTop: number;
	let visible = false;
	let transitioning = true;

	let graphicEl: null | HTMLElement = null;

	onMount(() => {
		if (graphicEl) {
			visible = true;
			transitioning = false;
		}
	});
</script>

<span
	class="title-underline"
	role="presentation"
	on:focus={() => {
		visible = true;
	}}
	on:mouseenter={async () => {
		if (!transitioning) {
			transitioning = true;
			visible = false;
			await tick();
			visible = true;
			setTimeout(() => {
				transitioning = false;
			}, 2000); // 1000ms for the draw transition + 1000ms for overuse headache prevention
		}
	}}
>
	<slot />
	<span class="graphic" bind:this={graphicEl} style="top: {positionTop}%;">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 800 400"
			style="transform: scale({underlineScale}%);"
		>
			{#if visible}
				<path
					in:draw={{ delay: 0, duration: 1000 }}
					d="M17.488771438598633,106.72644805908203C101.85349168141684,107.23466944376628,741.7578014246623,108.4663596089681,761.8833618164062,111.21075439453125C782.0089222081502,113.9551491800944,226.3736730957031,128.09565745035806,195.06724548339844,130.9416961669922C163.76081787109376,133.7877348836263,493.57842870076496,135.103130086263,485.6501770019531,136.32286071777344C477.7219253031413,137.54259134928387,112.60983754475912,139.1629192097982,125.1120834350586,141.7040252685547C137.61432932535809,144.24513132731119,542.6008815002441,156.8131440226237,595.964111328125,158.744384765625"
					fill="none"
					stroke-width="4"
					stroke="hsl(153 39% 30%)"
					stroke-linecap="round"
				/>
			{/if}
		</svg>
	</span>
</span>

<style>
	.title-underline {
		position: relative;
		font-size: inherit;
		font-weight: inherit;
		color: var(--clr-primary);
	}

	.graphic {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	svg {
		width: 100%;
		height: 100%;
	}
</style>
