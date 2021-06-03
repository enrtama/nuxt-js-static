module.exports = {
	root : true,
	env  : {
		browser : true,
		node    : true,
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/recommended",
	],
	plugins: [
		"align-assignments",
	],
	// add your custom rules here
	rules: {
		"space-before-function-paren" : [ "error", "never" ],
		"import/default"              : "warn",
		"import/namespace"            : "warn",
		"import/no-unresolved"        : "off",
		"no-sequences"                : "error",
		"comma-dangle"                : [ "warn", "always-multiline" ],
		"comma-spacing"               : [
			"error",
			{
				before : false,
				after  : true,
			},
		],
		"no-useless-escape"   : 1,
		"no-console"          : "warn",
		"space-before-blocks" : "error",
		"key-spacing"         : [
			"error",
			{
				multiLine: {
					beforeColon : false,
					afterColon  : true,
				},
				align: {
					beforeColon : true,
					afterColon  : true,
					on          : "colon",
				},
			},
		],
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs",
		],
		"array-bracket-spacing": [
			"error",
			"always",
		],
		"object-curly-spacing": [
			"error",
			"always",
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		semi: [
			"error",
			"never",
		],
		quotes: [
			"error",
			"double",
		],
		"no-template-curly-in-string" : "off",
		"no-tabs"                     : "off",
		"max-len"                     : [
			1,
			{
				code: 300,
			},
		],
		"no-multi-spaces"                     : 0,
		"align-assignments/align-assignments" : [
			1,
			{
				requiresOnly: true,
			},
		],
	},
}
