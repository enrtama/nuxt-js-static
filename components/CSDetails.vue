<template lang="pug">
	Card.offset-3(title="Title")
		h3 Chargestation Details:
		.container
			div.text-dark Name:
				span {{chargestation.name}}
			div.text-dark Identity:
				span {{chargestation.identity}}
			div.text-dark Charger Model:
				div Brand: {{chargestation.chargerModel.brand}}
				div Name: {{chargestation.chargerModel.name}}
			div Firmware: {{chargestation.firmware}}
</template>
<script>
import { Card } from "@viriciti/atomic-components-frontend"

const MOCK_CS = {
	alive        : true,
	chargerModel : { brand: "Siemens", name: "SICHARGE VC" },
	connectors   : [ { position: 1, info: null, status: "Available", errorCode: "NoError", identity: "ViriCiti_0" } ],
	firmware     : "1.8.20",
	gps          : [ 4.8458214, 52.3947988 ],
	identity     : "ViriCiti_0",
	lastMessage  : "1590661291036",
	name         : "ViriCiti_0",
	_id          : "5be309e3df93de8c6be5a1c9",
}

export default {
	components: {
		Card,
	},
	props: {
		chargestation: {
			type    : Object,
			default : () => MOCK_CS,
		},
	},
}
</script>
