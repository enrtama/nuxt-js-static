const TAG = process.env.TAG ? process.env.TAG : ""

if (TAG) console.info("Compiling with TAG", TAG)

module.exports = {

	server: {
		port: 8080,
	},

	oauth2Client: {
		session: {
			name   : "web.viriciti.com",
			secret : "Moeilijk!",
			cookie : {
				domain: ".viriciti.com",
			},
		},
		store: {
			host : "redis",
			port : 6379,
		},

		oauth2Provider: {
			host             : "https://accounts.viriciti.com",
			internal         : "http://oauth2-provider:8002",
			clientId         : "server",
			clientSecret     : "!Difficult88",
			redirectProtocol : "https://",
		},
		gateway: {},
	},

	bundle: {
		gatewayHTTP : "https://api.viriciti.com",
		graphql     : "https://api.viriciti.com/api/v1/graphql",
		publicPath  : `https://cdn.viriciti.com/smart-driving/${TAG}/`,
	},
	enableGa: true,
}
