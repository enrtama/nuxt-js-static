<template lang="pug">
		InfoCard.spacing-base(
			:value="test.name"
			:errored="test.error"
			:class="test.error ? 'red' : 'green'"
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

</style>
