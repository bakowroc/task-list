import DS from 'ember-data';

export default DS.Model.extend({

    title: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('date'),
    created: DS.attr('string', {
        defaultValue: function(){
            return new Date();
        }
    })

});
