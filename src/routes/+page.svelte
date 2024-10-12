<script>
	import { goto } from "$app/navigation";
	import Button from "$components/common/Button.svelte";
	import LogoHome from "$assets/logos/primary/donohoo_dev_primary_flush_t.svg";
	import PrimaryFlushLogo from "$components/common/PrimaryFlushLogo.svelte";
	import ButtonLink from "$components/common/ButtonLink.svelte";
</script>

<header class="full-width-container section-spacing">
	<div class="container main-header">
		<div>
			<h1 id="welcome">Transforming Ideas into <span>Innovation</span></h1>
			<p class="subtitle">
				Our expert team specializes in crafting tailored, full-stack solutions that drive
				performance, enhance user experience, and propel your business forward.
			</p>

			<ButtonLink variant="primary" size="lg" href="/contact">Lets talk</ButtonLink>
		</div>

		<div class="brand-logo">
			<PrimaryFlushLogo />
		</div>
	</div>
</header>

<section class="breakout-container who-we-are section-spacing">
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
			max-width: 80ch;
		}

		& > .who-we-are-cards {
			margin-top: 4rem;
			display: grid;
			gap: 4rem;
			grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
			max-width: 50rem;
			margin-inline: auto;

			@media (min-width: 1024px) {
				max-width: fit-content;
				padding: 2rem;
				grid-template-columns: repeat(3, 1fr);
				gap: 6rem;
			}

			& > .card {
				background-color: var(--clr-bg);
				border-radius: 1rem;
				padding: 3rem;
				text-align: left;
				box-shadow: 0 0 1.25rem 0 hsl(from var(--clr-gray) h s l / 0.5);

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
		grid-column: 2;
	}

	.main-header {
		display: grid;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			gap: 8rem;
			align-items: center;
		}
	}

	.main-header :global(.btn) {
		display: inline-block;
		margin-top: 2rem;
	}

	#welcome {
		color: var(--clr-text);
		font-size: clamp(4rem, 8vw, 5.5rem);

		& > span {
			display: inline-block;
			position: relative;
			color: var(--clr-primary);

			&::after {
				content: url("../assets/backgrounds/underline.svg");
				position: absolute;
				inset: 0.5em 0 0 0;
			}
		}
	}

	.brand-logo {
		display: none;

		@media (min-width: 768px) {
			display: block;
			margin: 2rem;
		}
	}
</style>
