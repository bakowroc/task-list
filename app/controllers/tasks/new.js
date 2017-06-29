import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        addTask: function(){

            let title = this.get('title');
            let content = this.get('content');
            let date = this.get('date');

            let newTask = this.store.createRecord('task', {
                title: title,
                content: content,
                date: new Date(date)
            });

            newTask.save();

            this.setProperties({
                title: '',
                content: '',
                date: null
            });

        }
    }

});
