import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        addTask: function(){

            let title = this.get('title');
            let content = this.get('content');
            let date = this.get('date');
            let isPinned = this.get('isPinned');
            let prior = this.get('prior');

            if(prior > 3) prior = 3;

            let newTask = this.store.createRecord('task', {
                title: title,
                content: content,
                date: new Date(date),
                isPinned: isPinned,
                prior: prior
            });

            newTask.save();

            this.setProperties({
                title: '',
                content: '',
                date: null
            });

            this.transitionToRoute('tasks');

        }
    }

});
