import { css } from '@emotion/react';

const GlobalStyle = css`
	:root {
		font-weight: 400;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;

		--color-black: #191a20;
		--color-white: #fff;

		--color-gray-10: #fafafa;
		--color-gray-50: #f7f7f7;
		--color-gray-100: #f9fafb;
		--color-gray-150: #f1f3f5;
		--color-gray-200: #f0f1f5;
		--color-gray-300: #ecedf0;
		--color-gray-350: #e5e5e5;
		--color-gray-400: #e7e7e9;
		--color-gray-450: #a3a3a3;
		--color-gray-500: #b8b8b8;
		--color-gray-550: #6e6e73;
		--color-gray-600: #4b4c53;
		--color-gray-650: #373a40;
		--color-gray-700: #3a3d4a;
		--color-gray-800: #2e3039;
		--color-gray-900: #1f2028;
		--color-gray-950: #141517;

		--color-green-10: #46df8e60;
		--color-green-50: #46df8e;
		--color-green-100: #76e4b8;
		--color-green-200: #3fd599;
		--color-green-300: #15c47e;
		--color-green-400: #0e7b6c;

		--color-blue-50: #56abff;
		--color-blue-100: #0687f0;
		--color-blue-200: #2272eb;
		--color-blue-300: #0164e6;
		--color-blue-opacity: #56abff75;

		--color-purple: #6466f1;

		--color-yellow: #ffd644;

		--color-orange-100: #ffa927;
		--color-orange-200: #fe9800;

		--color-red: #ff4545;

		--color-light-dark: #1a1b1e;
		--color-dark: #090b16;
		--footer-font: #909296;

		--transition-duration: 0.2;
		--radius: 0.5rem;

		--btn-sm-padding: 8px 16px;
		--btn-md-padding: 12px 20px;
		--btn-lg-padding: 16px 24px;
		--btn-font-size: 16px;

		--text-label: 18px;

		--opacity-gray-20: #e5e5e520;
		--opacity-gray-30: #e5e5e520;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		font-family: 'DM Mono', monospace;
		font-family: 'Noto Sans KR', sans-serif;
		word-break: keep-all;
	}

	body[data-theme='light'] {
		--font-color: var(--color-black);
		--hover-font-color: var(--color-blue-200);
		--hover-font-opacity-color: var(--color-blue-opacity);
		--body-bg-color: var(--color-white);
		--secondary-bg-color: var(--color-gray-10);
		--third-bg-color: var(--color-gray-150);
		--btn-bg-color: var(--color-dark);
		--btn-hover-color: var(--color-gray-700);
		--btn-hover-bg-color: var(--color-gray-800);
		--opacity-bg-color: var(--opacity-gray-20);
		--opacity-border-color: var(--color-gray-350);
		--header-bg-color: var(--color-gray-100);
		--footer-bg-color: var(--color-gray-10);
		--footer-font-color: var(--color-gray-550);
		--like-color: var(--color-orange-200);
	}

	body[data-theme='dark'] {
		--font-color: var(--color-white);
		--hover-font-color: var(--color-blue-50);
		--hover-font-opacity-color: var(--color-blue-opacity);
		--body-bg-color: var(--color-gray-950);
		--secondary-bg-color: var(--color-light-dark);
		--third-bg-color: var(--color-gray-650);
		--btn-bg-color: var(--color-white);
		--btn-hover-color: var(--color-gray-200);
		--btn-hover-bg-color: var(--color-gray-200);
		--opacity-bg-color: var(--opacity-gray-30);
		--opacity-border-color: var(--color-gray-600);
		--header-bg-color: var(--color-light-dark);
		--footer-bg-color: var(--color-light-dark);
		--footer-font-color: var(--footer-font);
		--like-color: var(--color-orange-200);
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
		background-color: var(--body-bg-color);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		font-size: 1em;
		font-weight: normal;
	}

	ul,
	ol,
	li {
		padding-left: 0;
		list-style-type: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a,
	button {
		cursor: pointer;
	}

	button,
	input,
	select,
	textarea {
		background-color: transparent;
		border: 0;
		&:focus {
			outline: none;
			box-shadow: none;
		}
	}

	select {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
	}

	::-moz-selection {
		background: var(--color-blue-opacity);
	}

	::selection {
		background: var(--color-blue-opacity);
	}

	.underlined {
		position: relative;
		text-decoration: none !important;
		white-space: nowrap;
	}

	.underlined:focus {
		outline: none;
		text-decoration: none !important;
	}

	.underlined:after {
		content: '';
		height: 3px;
		transform: scaleX(0);
		transition: transform 0.25s ease;
		transform-origin: left;
		left: 0;
		bottom: -6px;
		width: 100%;
		display: block;
		position: absolute;
	}

	.underlined:hover:after,
	.underlined:focus:after,
	.active.underlined:after {
		background-color: currentColor;
		transform: scaleX(1);
	}

	.clip-path-button {
		clip-path: polygon(0 0, 100% 0, 100% 70%, 88% 100%, 0 100%);
	}

	@media (prefers-reduced-motion) {
		.underlined:after {
			opacity: 0;
			transition: opacity 0.25s ease;
		}

		.underlined:hover:after,
		.underlined:focus:after,
		.active.underlined:after {
			opacity: 1;
		}
	}

	.skeleton-loading {
		position: relative;
		overflow: hidden;

		@keyframes loading {
			0% {
				transform: translateX(0);
			}
			50%,
			100% {
				transform: translateX(460px);
			}
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 45px;
			height: 100%;
			background: var(--linear-gradient);
			animation: loading 2s infinite linear;
		}
	}
`;

export default GlobalStyle;
