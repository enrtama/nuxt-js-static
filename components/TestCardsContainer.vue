<template lang="pug">
	.container.flex--space-around
		TestCardSimple(
			v-for="test in tests"
			:key="test.name"
			:test="getMessage(test)"
		)
</template>

<script>

import { tests } from "../assets/tests"

import TestCardSimple from "./TestCardSimple"

export default {
	components: {
		TestCardSimple,
	},
	props: {
		messages: {
			type    : Array,
			default : () => { return [] },
		},
	},
	data() {
		return {
			tests,
		}
	},
	methods: {
		getMessage(test) {
			// Get last message whose name is test.name
			const find = this.messages.find(message => message.Data.Name === test.name)
			if (find) {
				return {
					name  : find.Data.Name,
					error : !find.Data.Passed,
				}
			}
			return {
				name  : test.name,
				error : null, // Blue / No status
			}
		},
	},
}
</script>
