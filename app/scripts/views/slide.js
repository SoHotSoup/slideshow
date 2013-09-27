define(['backbone'], function (Backbone) {
    // slide view

    var Slide = Backbone.View.extend({

        el: $('.slide'),

        className: 'slide',

        render: function () {
            
            this.$el.append(

                    '<h1>' + this.model.get('title') + '</h1>'

                );

        }

    });

    return Slide;
});