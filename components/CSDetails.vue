<template lang="pug">
	Card.offset-3(title="Title")
		h3 Chargestation Details:
		.container(v-if="cs")
			h4 Name:
				h5.room-md {{cs}}
			h4 Identity:
				h5.room-md {{cs.identity || "No Identity received"}}
			h4 Charger Model:
				div.room-md
					h5 Brand:
					h6.room-sm-vertical.room-sm-left {{cs.brand || "ViriCiti Mock Brand"}}
					h5 Name:
					h6.room-sm-vertical.room-sm-left {{cs.model || "ViriCiti Mock"}}
		div(v-else) No chargestation selected
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
		cs: {
			type    : String,
			default : () => MOCK_CS,
		},
	},
}
</script>
