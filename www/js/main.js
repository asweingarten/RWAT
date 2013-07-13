require.config(
{
	paths:
	{
		jquery: 	'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 	'lib/backbone'
	},

	shim:
	{
		backbone:
		{
			deps: [ 'underscore', 'jquery' ],
			exports: 'Backbone'
		},


	}
});


require( [
			'app'
], function( App )
{
	App.initialize();
});