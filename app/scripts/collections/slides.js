define(['backbone', 'models/slide'], function (Backbone, Slide) {
    // slide collection

    var Slides = Backbone.Collection.extend({

        model: Slide

    });

    return Slides;
});