<template lang="pug">
	.room-lg.flex--space-around.pointer
		Card.col-md-5(v-for="type in testTypes" :key="type.key")
			.content(
				@click="type.selected = !type.selected"
				:class="{ selected: type.selected }"
			)
				h3 {{type.type}}
</template>
<script>
import { Card } from "@viriciti/atomic-components-frontend"

export default {
	components: {
		Card,
	},
	data() {
		return {
			testTypes: [
				{
					key      : 0,
					type     : "OCPP Basic",
					selected : false,
				},
				{
					key      : 1,
					type     : "Smart Charging",
					selected : false,
				},
			],
		}
	},
}
</script>
<style>
.selected {
	background: lightgreen;
	border: 2px solid black;
}
</style>
