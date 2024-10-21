<script lang="ts">
	import { enhance } from "$app/forms";
	import Button from "$components/common/Button.svelte";

	export let form;
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
	<form class="form" method="POST" action="?/submitForm" use:enhance>
		<label for="company">
			<span> Company </span>
			<input
				type="text"
				id="company"
				value={form?.lastSubmission?.company ?? ""}
				name="company"
			/>
		</label>

		<div class="form-group">
			<label for="full_name">
				<span> Full Name </span>
				<input
					type="text"
					id="full_name"
					name="full_name"
					value={form?.lastSubmission?.full_name ?? ""}
					required
				/>
			</label>

			<label for="email">
				<span> Email Address </span>
				<input
					type="email"
					id="email"
					name="email"
					value={form?.lastSubmission?.email ?? ""}
					required
				/>
			</label>
		</div>

		<label for="intention">
			<span> Project Intention </span>
			<select
				id="intention"
				name="intention"
				value={form?.lastSubmission?.intention ?? ""}
				required
			>
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
			<textarea
				id="description"
				name="description"
				value={form?.lastSubmission?.description ?? ""}
				rows="5"
				required
			/>
		</label>

		<label for="timeline">
			<span> Timeline </span>
			<input
				type="text"
				id="timeline"
				name="timeline"
				value={form?.lastSubmission?.timeline ?? ""}
				placeholder="Ex: 2 months"
			/>
		</label>

		<label for="budget">
			<span> Budget </span>
			<input
				type="text"
				id="budget"
				name="budget"
				value={form?.lastSubmission?.budget ?? ""}
				placeholder="Ex: $25,000"
			/>
		</label>

		<label for="referrer">
			<span> How did you hear about us? </span>
			<select
				id="referrer"
				name="referrer"
				value={form?.lastSubmission?.referrer ?? ""}
				required
			>
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
			<input type="text" id="honeypot" name="honeypot" />
		</label>
		<Button type="submit">Submit</Button>
	</form>

	{#if form?.message}
		<p class="submission-msg" class:error={!form?.success}>{form.message}</p>
	{/if}
</div>

<style>
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

	.submission-msg {
		margin-top: 4rem;
		font-size: var(--font-size-lg);
		color: var(--clr-success);

		&.error {
			color: var(--clr-error);
		}
	}
</style>
