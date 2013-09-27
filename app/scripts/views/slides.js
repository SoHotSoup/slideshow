define(['backbone', 'views/slide'], function (Backbone, SlideView) {
    // slides view

    var SlidesView = Backbone.View.extend({

        el: $('.slides'),

        initialize: function(){

            this.renderAll();

        },

        renderAll: function () {
            
            this.$el.empty();
            this.collection.each(this.render, this);

        },

        render: function (slide) {
            //...

            var slideView = new SlideView({model: slide});
            this.$el.append(slideView.render().el);

            console.log(slide);

            return this;
        }

    });

    return SlidesView;
});