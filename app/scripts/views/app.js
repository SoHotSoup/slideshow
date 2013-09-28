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

        initialize: function (){

            var testCollection = [

                { title: 'My First Slide' },
                { title: 'My Second Slide' }

            ];

            new SlidesView({
                collection: new SlidesCollection(testCollection)
            });

            App.Router = new Router();
            Backbone.history.start();
        }
    });



    return AppView;
});