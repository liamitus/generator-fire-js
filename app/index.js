"use strict";

// --------------------------------------------------------------------- Imports

var yeoman = require("yeoman-generator");
var chalk = require("chalk");

// ----------------------------------------------------------------- Main action

module.exports = yeoman.generators.Base.extend({

	constructor: function () {
		// Call the super constructor.
		yeoman.generators.Base.apply(this, arguments);

		if (arguments && arguments[0]) {
			var configJSON = JSON.parse(arguments[0]);
			this.config.set("project_config", configJSON);
		}
	},
	
	composing: function () {
		var configJSON = this.config.get("project_config");
		var options = {
			args: JSON.stringify(configJSON)
		};
		var settings = {};
		if (configJSON.build_system === "grunt") {
			this.composeWith("fire-grunt", options, settings);			
		}
	}

});