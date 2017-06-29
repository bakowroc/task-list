import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        
        this.setProperties({
            title: '',
            content: '',
            date: null
        });

    },



});
