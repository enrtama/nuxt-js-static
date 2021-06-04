<template lang="pug">
	.container.flex--space-around
		TestCardSimple(
			v-for="test in tests"
			:key="test.name"
			:test="test"
		)
</template>
<script>
import { tests } from "../assets/tests.js"

import TestCardSimple from "./TestCardSimple"

export default {
	components: {
		TestCardSimple,
	},
	data() {
		return {
			tests,
		}
	},
}
</script>
