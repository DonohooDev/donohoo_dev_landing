<script lang="ts">
	import type { SvelteHTMLElements } from "svelte/elements";
	type $$restProps = Omit<SvelteHTMLElements["button"], "onClick">;

	export let clickHandler: (e: MouseEvent) => void = () => {};
	export let variant: "primary" | "inverted" | "text" | "outlined" = "primary";
	export let size: "sm" | "md" | "lg" = "md";
	const buttonClass = `btn btn-${variant} btn-${size}`;
</script>

<button {...$$restProps} class={`${buttonClass} ${$$restProps.class}`} on:click={clickHandler}>
	<slot />
</button>

<style>
	.btn {
		font-weight: 500;
		border-radius: 0.5rem;
		cursor: pointer;
		transition:
			background-color 0.3s,
			color 0.3s,
			transform 0.2s ease;

		&.btn-sm {
			padding: 0.5rem 1rem;
			font-size: 1rem;
		}

		&.btn-md {
			padding: 0.75rem 1.5rem;
			font-size: 1.25rem;
		}

		&.btn-lg {
			padding: 1rem 2rem;
			font-size: 1.5rem;
		}

		&.btn-primary {
			background-color: var(--clr-primary);
			border: 2px solid var(--clr-primary);
			color: var(--clr-text-inverse);

			&:hover {
				background-color: var(--clr-bg);
				color: var(--clr-primary);
			}
		}

		&.btn-inverted {
			background-color: var(--clr-bg);
			border: 2px solid var(--clr-primary);
			color: var(--clr-primary);

			&:hover {
				background-color: var(--clr-primary);
				color: var(--clr-text-inverse);
			}
		}

		&.btn-text {
			background-color: transparent;
			border: 2px solid transparent;
			color: var(--clr-primary);

			&:hover {
				border: 2px solid var(--clr-primary);
			}
		}

		&.btn-outlined {
			background-color: transparent;
			border: 2px solid var(--clr-primary);
			color: var(--clr-primary);

			&:hover {
				background-color: var(--clr-primary);
				color: var(--clr-text-inverse);
			}
		}

		&:hover {
			transform: translateY(-0.2rem);
		}
	}
</style>
