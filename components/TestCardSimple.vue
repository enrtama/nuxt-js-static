<template lang="pug">
		InfoCard(
			:value="test.name"
			:errored="test.error"
		)
</template>
<script>
import { InfoCard } from "@viriciti/atomic-components-frontend"
import tests from "../assets/tests.js"

export default {
	components: {
		InfoCard,
	},
	props: {
		test: {
			type    : Object,
			default : () => { name: "TEST" },
		},
	},
}
</script>
<style scoped>
.infocard {
	width: 250px !important;
}
</style>
