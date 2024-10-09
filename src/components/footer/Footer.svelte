<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$components/common/Button.svelte";
	import LogoSolid from "$components/navbar/NavbarLogo.svelte";
</script>

<footer class="full-width-container main-footer">
	<div class="container">
		<div class="logo-section">
			<LogoSolid height={36} />
			<p class="catch-phrase"><em>Listen. Develop. Grow.</em></p>
		</div>

		<div class="contact">
			<p>Want to transform your ideas into innovation?</p>
			<Button
				class="contact-btn"
				variant="outlined"
				size="sm"
				clickHandler={() => goto("/contact")}>Get in touch</Button
			>
		</div>

		<div class="actions">
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/company/104173630/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fa-brands fa-linkedin-in fa-xl" />
						<span class="visually-hidden">Donohoo Dev, LLC LinkedIn profile</span>
					</a>
				</li>
				<li>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/JoshWComeau"
					>
						<i class="fa-brands fa-x-twitter fa-xl" />
						<span class="visually-hidden">Donohoo Dev, LLC X profile</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/donohoodev/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fa-brands fa-github fa-xl" />
						<span class="visually-hidden">Donohoo Dev, LLC Github profile</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="copyright">
			<ul class="links">
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

			<small>
				&copy; {new Date().getFullYear()} Donohoo Development, LLC. All rights reserved.
			</small>
		</div>
	</div>
</footer>

<style>
	.main-footer {
		background-color: hsl(from var(--clr-primary) h s 12.5%);
		color: var(--clr-white);

		& p {
			margin: 0;
		}

		& > .container {
			display: grid;
			gap: 4rem;
		}
	}

	.logo-section {
	}

	.contact {
	}

	.contact > :global(.contact-btn) {
		width: 100%;
		color: var(--clr-text-inverse);
		border-color: var(--clr-accent);
		margin-top: 1rem;

		&:hover {
			background-color: var(--clr-accent);
			color: var(--clr-gray);
		}
	}

	.catch-phrase {
	}

	.actions {
		& > ul {
			display: flex;
			gap: 2rem;
			margin: 0;
			padding: 0;

			& > li {
				& > a {
					color: var(--clr-accent);

					&:hover {
						color: var(--clr-text-inverse);
					}
				}
			}
		}
	}

	.copyright {
		& > .links {
			display: flex;
			gap: 2rem;
			margin: 0 0 1rem;

			& > li {
				& > button {
					margin: 0;
					background-color: transparent;
					border: none;
					cursor: pointer;
					font-size: 1.2rem;
					text-decoration: underline;
					color: var(--clr-white);
				}
			}
		}

		& > small {
			margin-top: 2rem;
			color: var(--clr-text-secondary);
		}
	}
</style>
