<script>
	import ButtonLink from "$components/common/ButtonLink.svelte";
</script>

<section class="container section-spacing services">
	<h2 id="services">Empowering Your Digital Presence</h2>
	<p>
		At Donohoo Dev, we offer a comprehensive range of services to help businesses establish a
		strong digital presence and achieve their goals. Our expertise spans full-stack development,
		e-commerce solutions, internal tools, and performance optimization.
	</p>

	<div class="service-sections">
		<div class="service">
			<div class="description">
				<h3>Full-Stack Development</h3>
				<p>
					Our skilled team of developers specializes in crafting robust, scalable web
					applications tailored to your unique requirements. From front-end design to
					back-end architecture, we leverage cutting-edge technologies to deliver
					seamless, high-performance solutions that engage users and drive results.
				</p>
			</div>
			<img src="https://via.placeholder.com/250" alt="Full-Stack Development" />
		</div>

		<div class="service">
			<div class="description">
				<h3>Landing Pages with SEO & Speed Optimization</h3>
				<p>
					We create stunning, conversion-focused landing pages that captivate your
					audience and drive action. Our team optimizes your pages for search engines,
					ensuring maximum visibility and organic traffic. Plus, we prioritize speed and
					performance, delivering lightning-fast experiences that keep visitors engaged
					and boost conversions.
				</p>
			</div>
			<img src="https://via.placeholder.com/250" alt="Full-Stack Development" />
		</div>

		<div class="service">
			<div class="description">
				<h3>Internal Tools & Integrations</h3>
				<p>
					We develop custom internal tools that streamline your workflows, automate tasks,
					and enhance productivity. Whether you need a powerful CMS like Sanity or a
					robust e-commerce platform like Shopify, we've got you covered. Our solutions
					are tailored to your unique needs, ensuring seamless integration and maximum
					efficiency.
				</p>
			</div>
			<img src="https://via.placeholder.com/250" alt="Full-Stack Development" />
		</div>
	</div>
</section>

<style scoped>
	.services {
	}

	.service-sections {
		display: grid;
		gap: 2rem;
		margin-top: 4rem;
		max-width: 400px;
		margin-inline: auto;

		@media (min-width: 768px) {
			max-width: none;
		}

		& > .service {
			display: grid;
			gap: 2rem;
			justify-items: center;

			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr;
				align-items: flex-start;
				justify-items: space-between;

				&:nth-child(2n) {
					& > .description {
						grid-row: 2;
						grid-column: 2;
					}

					& > img {
						grid-row: 2;
						grid-column: 1;
					}
				}
			}
		}
	}
</style>
