<script>
	import ButtonLink from "$components/common/ButtonLink.svelte";
</script>

<section class="breakout-container section-spacing who-we-are">
	<h2 id="innovators">Innovators at Heart</h2>
	<p>
		At Donohoo Dev, we're more than just a development company. We're a team of passionate
		innovators dedicated to transforming ideas into powerful digital solutions.
	</p>

	<div class="who-we-are-cards">
		<div class="card">
			<i class="fa-duotone fa-solid fa-laptop-code icon"></i>
			<h3>Passion Meets Expertise</h3>
			<p>
				Our team combines deep technical expertise with creative problem-solving, delivering
				innovative solutions for every project.
			</p>
		</div>

		<div class="card">
			<i class="fa-duotone fa-solid fa-ear-listen icon"></i>
			<h3>We Hear You</h3>
			<p>
				We believe in collaboration and open communication, building strong partnerships
				that lead to successful outcomes.
			</p>
		</div>

		<div class="card">
			<i class="fa-duotone fa-solid fa-bullseye-arrow icon"></i>
			<h3>Driving Your Success</h3>
			<p>
				Your success is our top priority. We deliver high-quality solutions that drive your
				business forward.
			</p>
		</div>

		<ButtonLink variant="text" size="lg" href="/about">Learn more</ButtonLink>
	</div>
</section>

<style scoped>
	.who-we-are {
		background-color: var(--clr-bg-contrast);
		text-align: center;

		@media (min-width: 768px) {
			border-radius: 1rem;
			padding: 4rem 2rem;
		}

		& > h2,
		& > p {
			margin-inline: auto;
			max-width: 70ch;
		}

		& > .who-we-are-cards {
			margin-top: 4rem;
			display: grid;
			gap: 4rem;
			grid-template-columns: 1fr;
			max-width: 50ch;
			margin-inline: auto;

			@media (min-width: 1024px) {
				max-width: none;
				padding-inline: 2rem;
				grid-template-columns: repeat(3, 1fr);
			}

			& > .card {
				background-color: var(--clr-bg);
				border-radius: 1rem;
				padding: 3rem;
				box-shadow: 0 0 1.25rem 0 hsl(from var(--clr-gray) h s l / 0.5);

				@media (min-width: 1024px) {
					text-align: left;
				}

				& > .icon {
					font-size: clamp(3rem, 8vw, 4rem);
					color: var(--clr-secondary);
				}

				& > h3 {
					color: var(--clr-primary);
					margin-top: 2rem;
					font-size: var(--font-size-h4);
				}

				& > p {
					color: var(--clr-text);
					margin-top: 1rem;
				}
			}
		}
	}

	.who-we-are-cards > :global(.btn) {
		@media (min-width: 1024px) {
			grid-column: 2;
		}
	}
</style>
