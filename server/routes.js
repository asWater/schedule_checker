/*
* app.js
*/
/*jslint node : true, continue : true,
devel : true, indent : 2, maxerr : 50,
newcap : true, nomen : true, plusplus : true,
regexp : true, sloppy : true, vars : false,
white : true
*/
/*global */

'use strict';

//===================================
// Module Scope Variant >>> Start

var
	configRoutes;
	//crud = require( './crud' ),
	//chat = require( './chat' ),
	//makeMongoId = crud.makeMongoId;

// Module Scope Variant <<< End
//===================================

//===================================
// Utility Method >>> Start

// Utility Method <<< End
//===================================


//===================================
// Public Method >>> Start

configRoutes = function ( app, server )
{
	app.get( '/', function ( request, response )
	{
		response.redirect( '/initset.html' );
	});

};


// Public Method <<< End
//===================================


//===================================
// Module Initialization >>> Start

module.exports = { configRoutes : configRoutes };

// Module Initialization <<< End
//===================================

