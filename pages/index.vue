<template lang="pug">
	Layout
		template(v-slot:header)
			Header(
				logo-src="https://cdn.viriciti.com/statics/img/logo/green-logo.svg"
				class-name-dropdown="btn btn--transparent dropdown-toggle"
				:uber="true"
				:session="null"
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
					NavTabs(:routes="routes")
		template(v-slot:main-content)
			.links
				a.button--green(href='https://nuxtjs.org/' target='_blank' rel='noopener noreferrer') Documentation
				a.button--grey(href='https://github.com/nuxt/nuxt.js' target='_blank' rel='noopener noreferrer') GitHub
			h1.text--center CS OEM TEST APP
			.pages
				NuxtLink(to='/about') | About

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
		}
	},
	computed: {
		routes() {
			return [ "Route 1", "Route 2" ]
		},
	},
	methods: {
		goHome() {
			this.$router.push("/")
		},
	},
})
</script>

<style scoped>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family:
		'Quicksand',
		'Source Sans Pro',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	position: absolute;
	padding-top: 10px;
}
</style>
