<template lang="pug">
Layout
	template(v-slot:header)
		Header(
			logo-src="https://cdn.viriciti.com/statics/img/logo/green-logo.svg"
			class-name-dropdown="btn btn--transparent dropdown-toggle"
			:uber="true"
			:session="session"
			:users-impersonate-list="[]"
			:user-options="[]"
			:navigation-routes="routes"
			impersonate-placeholder="impersonate"
			user-menu-icon="viricon viricon-arrow-down"
			@logo-click="goHome")
			template(v-slot:appTitle)
				.flex.apptitle
					span.navbar__logo--text.font-weight-bold.room-xxxs-right(:style="{fontFamily:heavyFont}") CS OEM
					span.navbar__logo--text(:style="{fontFamily:lightFont}") App Test
			template(v-slot:navtabs)
				NavTabs.text--center(:tabs="routes" @tab-selected="onRoute")
	template(v-slot:main-content)
		Nuxt
</template>

<script>

import Vue from "vue"
import { Layout, Header, NavTabs } from "@viriciti/atomic-components-frontend"

import vueResponsive from "vue-responsive"
Vue.directive("responsive", vueResponsive)

export default Vue.extend({
	name       : "Home",
	components : {
		Layout,
		Header,
		NavTabs,
	},
	data() {
		return {
			heavyFont : "var(--museo-name-700)",
			lightFont : "var(--museo-name-300)",
			session   : null,
		}
	},
	computed: {
		routes() {
			return [ {
				key   : 0,
				title : "Dashboard",
				path  : "/",
			}, {
				key   : 1,
				title : "About",
				path  : "/about",
			}, {
				key   : 2,
				title : "Route 2",
				path  : "/route2",
			}, {
				key   : 3,
				title : "Route 1",
				path  : "/route1",
			} ]
		},
	},
	async created() {
		const session = await this.$axios.$get("sessions/my")
		if (session) { this.session = session }
	},
	methods: {
		onRoute({ path }) {
			if (path) { this.$router.push(path) }
		},
		goHome() {
			this.$router.push("/")
		},
	},
})
</script>

<style>
html {
	font-family:
		'Source Sans Pro',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
</style>
