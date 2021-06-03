const TAG = process.env.TAG ? process.env.TAG : ""

if (TAG) console.info("Compiling with TAG", TAG)

module.exports = {

	server: {
		port: 8080,
	},

	oauth2Provider: {
		host         : "https://accounts.sd.dev.viriciti.com",
		internal     : "http://dev-master.viriciti.intra:30402",
		clientId     : "server",
		clientSecret : "!Difficult88",
		serviceName  : "sd-frontend-develop",
	},

	authMiddlewareOverride: {
		session: {
			name              : "web.sd.dev.viriciti.com",
			secret            : "Moeilijk!",
			resave            : false,
			saveUninitialized : false,
			cookie            : {
				domain : ".sd.dev.viriciti.com",
				maxAge : 7 * 24 * 60 * 60 * 1000,
			},
		},
		store: {
			host   : "dev-master.viriciti.intra",
			port   : 30400,
			prefix : "web_sess:",
		},
		provider: {
			redirectProtocol : "http://",
			scope            : "viriciti",
			state            : true,
		},
		gateway: {
			http: "https://gateway.sd.dev.viriciti.com",
		},
	},

	bundle: {
		gatewayHTTP : "https://gateway.sd.dev.viriciti.com",
		graphql     : "https://gateway.sd.dev.viriciti.com/api/v1/graphql",
		publicPath  : `https://cdn.viriciti.com/smart-driving/${TAG}/`,
		CDN         : "https://cdn.viriciti.com/smart-driving",
	},

	// TODO should be a secret sorry!
	mapboxAccessToken: "pk.eyJ1IjoidmlyaWNpdGkiLCJhIjoiY2s0OW56OTd0MDZ0ZjNubW85bHNxb2RhdSJ9.Bf15P_oQDxydBt1upFQiSw",

	hotjarId        : 1744277,
	enableGa        : false,
	aSayerProjectId : 5133954178651062,
}