define(['backbone'], function (Backbone) {
	// slide model

	var Slide = Backbone.Model.extend({
			defaults: {

				type: 'note',
				title: ''

			}
	});

	return Slide;
});