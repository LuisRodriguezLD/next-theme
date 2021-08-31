const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
	modifyVars: { "@primary-color": "#00b8d0" },
	webpack(config) {
		return config;
	},
});
