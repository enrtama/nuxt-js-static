<template lang="pug">
	.block
		.links
			a.button--green(href='https://nuxtjs.org/' target='_blank' rel='noopener noreferrer') Documentation
			a.button--grey(href='https://github.com/nuxt/nuxt.js' target='_blank' rel='noopener noreferrer') GitHub
		h1.text--center CS OEM TEST APP

		CSDetails
		TestTypeSelector
		TestCardsContainer

</template>

<script>

import Vue from "vue"

export default Vue.extend({
	name: "Dashboard",
	mounted() {
		this.ws           = new WebSocket("wss://cs-oem-test-backend.cloud1.viriciti.com/ocpp")
		this.ws.onopen    = () => console.log("hoer")
		this.ws.onmessage = msg => console.log(msg)
	},
})
</script>

<style scoped>

.links {
	position: absolute;
	padding-top: 10px;
}

</style>
