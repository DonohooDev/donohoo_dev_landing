<section class="full-width-container potential">
	<div class="container">
		<header class="header-margin">
			<h2 id="potential">Unlocking Your Website's Potential</h2>
			<p>At Donohoo Dev, we focus on the key elements that drive your online success.</p>
		</header>

		<ul class="focuses">
			<li class="focus">
				<i class="fa-regular fa-chart-mixed" />
				<h3>Performance Optimization</h3>
				<p>Boosting your website's speed and performance for optimal user experience.</p>
			</li>

			<li class="focus">
				<i class="fa-regular fa-gauge-circle-bolt" />
				<h3>Efficiency</h3>
				<p>
					Improving your website's visibility and search engine rankings for increased
					organic traffic.
				</p>
			</li>

			<li class="focus">
				<i class="fa-regular fa-universal-access" />
				<h3>Accessibility</h3>
				<p>
					Ensuring your website is accessible to all users, regardless of their abilities.
				</p>
			</li>

			<li class="focus">
				<i class="fa-regular fa-chess" />
				<h3>Strategic Development</h3>
				<p>Leveraging technology and best practices to drive your business goals.</p>
			</li>
		</ul>
	</div>
</section>

<style scoped>
	.potential {
		background-color: var(--clr-primary-dark);
		color: var(--clr-white);
		padding-block: 4em;

		& > .container {
			@media (min-width: 768px) {
				grid-column: full-width;
				margin-inline: 8rem;
			}
		}
	}

	.focuses {
		display: grid;
		grid-auto-rows: 1fr;
		gap: 2rem;
		padding: 2rem 0;

		@media (min-width: 480px) {
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
			/* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
		}

		@media (min-width: 1080px) {
			grid-template-columns: repeat(4, 250px);
			/* grid-template-columns: 1fr 1fr 1fr 1fr; */
			justify-content: space-between;
		}

		& svg {
			color: var(--clr-accent);
			font-size: 7rem;
		}

		& h3 {
			font-size: 1.8rem;
			text-wrap: nowrap;
		}

		& p {
			font-size: 1.5rem;
		}
	}
</style>
