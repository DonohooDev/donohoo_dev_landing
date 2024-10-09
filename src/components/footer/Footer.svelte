<script lang="ts">
	import { goto } from "$app/navigation";
	import LogoSolid from "$components/navbar/NavbarLogo.svelte";
</script>

<footer class="main-footer container">
	<div>
		<div class="logo-section">
			<LogoSolid height={36} />
			<p class="catch-phrase"><em>Listen. Develop. Grow.</em></p>
		</div>

		<small>
			&copy; {new Date().getFullYear()} Donohoo Development, LLC. All rights reserved.
		</small>

		<ul class="privacy-links">
			<li>
				<button class="mobile-menu-link" role="link" on:click={() => goto("/")}
					>Terms of Use</button
				>
			</li>
			<li>
				<button class="mobile-menu-link" role="link" on:click={() => goto("/")}
					>Privacy Policy</button
				>
			</li>
		</ul>
	</div>
</footer>

<style>
	.main-footer {
		background-color: hsl(from var(--clr-primary) h s 12.5%);
		color: var(--clr-white);
	}

	.logo-section {
		display: grid;
		grid-auto-rows: auto;
		place-items: flex-start;
		margin-bottom: 1rem;
	}

	.catch-phrase {
		margin-top: 0;
	}

	.privacy-links {
		display: flex;
		list-style: none;
		padding-inline-start: 0;
		gap: 1rem;
		margin: 0;
		margin-top: 0.5rem;

		& > li {
			& > button {
				margin: 0;
				background-color: transparent;
				border: none;
				cursor: pointer;
				font-size: 1.2rem;
				text-decoration: underline;
			}
		}
	}
</style>
