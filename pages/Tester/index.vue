<template lang="pug">
	div
		h1.text-center Tester Page
		CSDetails(:cs="cs")
		h2.text-center.room-md-vertical Select Tests:
		TestTypeSelector
		TestCardsContainer()
</template>
<script>

export default {
	name: "Tester",
	layout: "default",
	data() {
		return {
			ws: null,
			cs: ""
		}
	},
	mounted() {
		this.ws           = new WebSocket("ws://localhost:5050/ocpp")
		this.ws.onopen    = () => console.log("Connected")
		this.ws.onmessage = msg => this.handleMessage(msg)
	},
	methods: {
		handleMessage(msg) {
			const parsedMsg = JSON.parse(msg.data)
			this.cs = parsedMsg.Data.ChargePoint
			console.log("MESSAGE", parsedMsg)
		}
	}
}
</script>