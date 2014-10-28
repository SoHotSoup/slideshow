define(['backbone',
         'views/slides',
         'collections/slides',
         'router'], 
function (Backbone,  
          SlidesView,
          SlidesCollection,
          Router) {
    // app view

    var AppView = Backbone.View.extend({

        el: 'body',
        initialize: function() {

            new SlidesView({
                collection: new SlidesCollection(window.slides)
            });

            App.router = new Router();
            Backbone.history.start();
        },
        events: {

            'keyup': 'keyUp',
            'click': 'onClick'

        },
        keyUp: function(e) {

            if (e.keyCode === 37 || e.keyCode === 39)
            {
                App.Vent.trigger('changeSlide', {

                    direction: e.keyCode === 39 ? 'next' : 'prev'

                });
            }

        },
        onClick: function(e) {
            App.Vent.trigger('changeSlide', { direction: 'next' });
        }

    });



    return AppView;
});