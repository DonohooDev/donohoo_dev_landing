<script lang="ts">
	import Button from "$components/common/Button.svelte";

	let isSending = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		if (formData.get("honeypot")) {
			// If our honeypot field is filled out, we know it's a bot
			return;
		}

		try {
			isSending = true;
			new Promise<void>((resolve, _reject) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			// const res = await emailjs.sendForm("postmark_salessource", "template_send_to", form, {
			// 	publicKey: "PUBLIC_KEY",
			// });

			// if (res.status === 200) {
			// 	form.reset();

			// 	// Show success message
			// 	alert("Your message has been sent. We will get back to you as soon as possible.");
			// }
		} catch (error) {
			console.error(error);
		} finally {
			isSending = false;
		}
	}
</script>

<section class="container section-spacing">
	<header class="">
		<h1 id="getting-started">
			Innovation through <span class="underline-title">Collaboration</span>
		</h1>
		<p class="subtitle">
			Ready to elevate your online presence? We're here to help! Whether you have a project in
			mind or just want to explore your options, our team is ready to assist you.
		</p>
	</header>
</section>

<section class="container section-spacing get-started">
	<header>
		<h2 id="how-to">How to Get Started</h2>
	</header>

	<ol class="instructions">
		<li>
			<strong>Fill out the contact form:</strong> Provide us with some basic information about
			your project, timeline, and budget. The more details you can share, the better we can understand
			your needs.
		</li>
		<li>
			<strong>Schedule a consultation:</strong> Once we receive your form submission, we'll reach
			out to schedule a free consultation. This is an opportunity for us to learn more about your
			project and for you to ask any questions you may have.
		</li>
		<li>
			<strong>Receive a proposal:</strong> Based on our consultation, we'll prepare a detailed
			proposal outlining our recommended approach, timeline, and costs.
		</li>
		<li>
			<strong>Start your project:</strong> If you're happy with the proposal, we'll kick off your
			project with a detailed planning session and get to work bringing your vision to life!
		</li>
	</ol>
</section>

<div class="article-container section-spacing">
	<form class="form" on:submit={handleSubmit}>
		<label for="company">
			<span> Company </span>
			<input type="text" id="company" name="company" />
		</label>

		<div class="form-group">
			<label for="name">
				<span> Name </span>
				<input type="text" id="name" name="name" required />
			</label>

			<label for="email">
				<span> Email Address </span>
				<input type="text" id="email" name="email" required />
			</label>
		</div>

		<label for="intention">
			<span> Project Intention </span>
			<select id="intention" name="intention" required>
				<option value="">Select an option</option>
				<option value="landing-page">New landing page</option>
				<option value="internal-tool">New internal tool</option>
				<option value="update">Update an existing website or tool</option>
				<option value="something-else">I have something else in mind</option>
				<option value="inquiry">General inquiry</option>
			</select>
		</label>

		<label for="description">
			<span> Please describe your project or inquiry: </span>
			<textarea id="description" name="description" rows="5" required />
		</label>

		<label for="timeline">
			<span> Timeline </span>
			<input type="text" id="timeline" name="timeline" placeholder="Ex: 2 months" />
		</label>

		<label for="budget">
			<span> Budget </span>
			<input type="text" id="budget" name="budget" placeholder="Ex: $25,000" />
		</label>

		<label for="referrer">
			<span> How did you hear about us? </span>
			<select id="referrer" name="referrer" required>
				<option value="">Select an option</option>
				<option value="google">Google</option>
				<option value="linked-in">LinkedIn</option>
				<option value="social-media">Social Media</option>
				<option value="word-of-mouth">Word of Mouth</option>
				<option value="other">Other</option>
			</select>
		</label>

		<label for="honeypot" class="visually-hidden">
			<span>Leave this field blank</span>
			<input type="text" id="honeypot" name="misdirection" />
		</label>

		<Button type="submit">Submit</Button>
	</form>
</div>

<style scoped>
	#getting-started {
		color: var(--clr-text);
	}

	.instructions {
		list-style-type: decimal;
		margin-left: 4rem;
	}

	.instructions > li {
		margin-bottom: 2rem;
	}

	.instructions > li > strong {
		font-weight: 600;
		font-size: var(--font-size-lg);
		color: var(--clr-primary);
	}
</style>
