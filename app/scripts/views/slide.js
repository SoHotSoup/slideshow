define(['backbone'], function (Backbone) {
    // slide view

    var Slide = Backbone.View.extend({

        className: 'slide',

        render: function () {
            console.log('u slideu sam' + this.model.get('title'));
            this.$el.append(

                    '<h1>' + this.model.get('title') + '</h1>'

                );

            return this;

        }

    });

    return Slide;
});