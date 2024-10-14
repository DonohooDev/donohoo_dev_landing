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

		<div class="navigation">
			<p>Navigation</p>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
			</ul>
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
					<a rel="noopener noreferrer" target="_blank" href="https://x.com/DonohooDev">
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
					<a href="/terms-of-use">Terms of Use</a>
				</li>
				<li>
					<a href="/privacy">Privacy Policy</a>
				</li>
			</ul>

			<small>
				&copy; {new Date().getFullYear()} Donohoo Development, LLC. All rights reserved.
			</small>
		</div>
	</div>
</footer>

<style scoped>
	.main-footer {
		background-color: var(--clr-primary-dark);
		color: var(--clr-white);
		padding: 4rem 2rem;

		& p {
			margin: 0;
		}

		& > .container {
			display: grid;
			gap: 4rem;

			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr;
			}
		}
	}

	.logo-section {
		@media (min-width: 768px) {
			grid-column: 1/-1;
			order: 1;
		}
	}

	.contact {
		@media (min-width: 768px) {
			grid-column: 1;
			order: 2;
		}
	}

	.contact > :global(.contact-btn) {
		width: 100%;
		max-width: 38ch;
		color: var(--clr-secondary);
		border-color: var(--clr-secondary);
		margin-top: 1rem;

		&:hover {
			background-color: var(--clr-secondary);
		}

		@media (min-width: 768px) {
			max-width: 42ch;
		}
	}

	.navigation {
		display: none;

		& > p {
			font-size: 1.5rem;
			margin: 0 0 1rem;
			text-decoration: underline;
			text-align: right;
		}

		& > ul {
			display: flex;
			gap: 4rem;
			margin: 0;
			padding: 0;
			justify-content: flex-end;

			& > li {
				& > a {
					margin: 0;
					font-size: 1.2rem;
					color: var(--clr-white);

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}

		@media (min-width: 768px) {
			display: block;
			grid-column: 2;
			order: 3;
			align-self: flex-end;
		}
	}

	.actions {
		& > ul {
			display: flex;
			gap: 2rem;
			margin: 0;
			padding: 0;

			& > li {
				& > a {
					color: var(--clr-secondary);

					&:hover {
						color: var(--clr-accent);
					}
				}
			}
		}

		@media (min-width: 768px) {
			grid-column: 2;
			order: 5;
			align-self: flex-end;
			justify-self: flex-end;
		}
	}

	.copyright {
		& > .links {
			display: flex;
			gap: 4rem;
			margin: 0 0 1rem;

			& > li {
				& > a {
					margin: 0;
					font-size: 1.2rem;
					text-decoration: underline;
					color: var(--clr-white);
				}
			}
		}

		& > small {
			font-size: 1.125rem;
			margin-top: 2rem;
			color: var(--clr-gray);
		}

		@media (min-width: 768px) {
			grid-column: 1;
			order: 4;
		}
	}
</style>
