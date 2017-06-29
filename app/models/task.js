import DS from 'ember-data';

export default DS.Model.extend({

    title: DS.attr('string'),
    content: DS.attr('string'),
    isPinned: DS.attr('boolean', {
        defaultValue: ()=> false
    }),
    prior: DS.attr('number', {
        defaultValue: ()=> null
    }),
    status: DS.attr('number', {
        defaultValue: ()=> false
    }),
    date: DS.attr('date'),
    created: DS.attr('string', {
        defaultValue: ()=> new Date()
    })

});
