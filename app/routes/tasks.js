import Ember from 'ember';

export default Ember.Route.extend({
    taskList: function(){
        return this.store.findAll('task');
    }
});
