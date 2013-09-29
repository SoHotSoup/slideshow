define(['backbone'], function (Backbone) {
    // slide view

    var Slide = Backbone.View.extend({

        className: 'slide',

        render: function () {

            
            this.$el.append(

                    '<h1 class=' + this.model.get('size') + '>' + this.model.get('title') + '</h1>'

                );

            if( this.model.get('image') )
            {
                this.renderImage();

            }
            else if( this.model.get('bullets'))
            {
                this.renderBullets();
            }
            else if( this.model.get('quote'))
            {
                this.renderQuote();
            }

            return this;

        },

        renderImage: function () {
            this.$el
                .addClass('image')
                .append('<img src="'+ this.model.get('image') + '">')
        },

        renderBullets: function () {
            this.$el
                .addClass('bullets')
                .append([
                    '<ul>',
                    '<li>' + this.model.get('bullets').join('</li><li>'),
                    '</li>',
                    '</ul>'
                    ].join(''));
        },

        renderQuote: function () {
            this.$el
                .addClass('quote')
                .append([
                    '<figure>',
                        '<blockquote>',
                            this.model.get('quote'),
                        '</blockquote>',
                        '<figcaption>',
                            '<cite>',
                            this.model.get('cite'),
                            '</cite>',
                        '</figcaption>',
                    '</figure>'
                    ].join(''));
        }

    });

    return Slide;
});