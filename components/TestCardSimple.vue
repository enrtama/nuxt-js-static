<template lang="pug">
		InfoCard.spacing-base(
			:value="test.name"
			:errored="test.error"
			:class="getError(test)"
		)
</template>

<script>

import { InfoCard } from "@viriciti/atomic-components-frontend"

export default {
	components: {
		InfoCard,
	},
	props: {
		test: {
			type    : Object,
			default : () => { return { name: "TEST" } },
		},
	},
	methods: {
		getError(test) {
			if (test.error == null) { return "blue" }
			return test.error ? "red" : "green"
		},
	},
}
</script>
<style scoped>

.infocard {
	width: 250px !important;
}

.infocard.green {
	background-color: var(--msg-turquoise-success-light);
}

.infocard.red {
	background-color: var(--msg-red-error-light);
}

.infocard.blue {
	background-color: var(--msg-blue-information-light);
}

</style>
