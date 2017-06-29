import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        deleteTask: function(taskId){

            this.store.find('task', taskId)
                        .then((task)=>task.destroyRecord());

        },

        pinToggleTask: function(taskId, status){

            this.store.findRecord('task', taskId)
                .then((task)=>task.set('isPinned', !status));

        },

        doneToggleTask: function(taskId, status){

            this.store.findRecord('task', taskId)
                .then((task)=>task.set('status', !status));

        }

    }

});
