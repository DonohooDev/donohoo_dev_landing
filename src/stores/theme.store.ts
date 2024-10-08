import { writable } from "svelte/store";

export const theme = writable<"light" | "dark">(getInitialColorScheme());

export function toggleTheme() {
	theme.update((value) => {
		const newTheme = value === "light" ? "dark" : "light";
		document.body.dataset.theme = newTheme;

		// localStorage.setItem("theme", newTheme);
		return newTheme;
	});
}

function getInitialColorScheme(): "light" | "dark" {
	if (typeof window === "undefined") {
		// Server side rendering
		return "light";
	}

	const persisted = localStorage.getItem("theme");
	if (persisted === "light" || persisted === "dark") {
		// If the user has set a theme, use it
		return persisted as "light" | "dark";
	}

	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	if (typeof mediaQuery.matches === "boolean") {
		// If the user hasn't set a theme, use the system preference
		return mediaQuery.matches ? "dark" : "light";
	}

	// Default to light theme
	return (document.body.dataset.theme as "light" | "dark") || "light";
}

// function getInitialColorScheme(): "light" | "dark" {
// 	if (typeof window === "undefined") {
// 		// Server side rendering
// 		return "light";
// 	}

// 	const persisted = localStorage.getItem("theme");
// 	if (persisted === "light" || persisted === "dark") {
// 		// If the user has set a theme, use it
// 		return persisted;
// 	}

// 	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
// 	if (typeof mediaQuery.matches === "boolean") {
// 		// If the user hasn't set a theme, use the system preference
// 		return mediaQuery.matches ? "dark" : "light";
// 	}

// 	// Default to light theme
// 	return "light";
// }
