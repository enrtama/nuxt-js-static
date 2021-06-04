export default {
	// Target: https://go.nuxtjs.dev/config-target
	target : "static",
	ssr    : false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title : "CS OEM Test App",
		meta  : [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "stylesheet", type: "text/css", href: "https://atomic-components.viriciti.com/default.bundle.css" },
			{ rel: "stylesheet", type: "text/css", href: "https://viricons.viriciti.com/viricon.css" },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: "~node_modules/@viriciti/atomic-components-frontend/dist/atomic-components-frontend.umd.js", ssr: false },
		{ src: "~node_modules/@viriciti/atomic-components-frontend/dist/atomic-components-frontend.esm.js", ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/stylelint
		"@nuxtjs/stylelint-module",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL     : "https://api.viriciti.com/api/v1",
		credentials : "withCredentials",
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang        : "en",
			theme_color : "white",
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [ "@viriciti/atomic-components-frontend", "vue-responsive" ],
	},
	env: {
	},
	router: {
		base: "/",
	},
}
