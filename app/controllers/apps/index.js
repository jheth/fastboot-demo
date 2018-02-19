import Controller from "@ember/controller";

export default Controller.extend({
  appName: '',

  actions: {
    create: function(appName) {
      let app = this.store.createRecord('app', {
        'name': appName
      });

      app.save().then(() => {
        this.get('flashMessages').success('Successfully created!');
        this.set('appName', '');
      }).catch(() => {
        this.get('flashMessages').warning('Failed to create!');
      });
    }
  }

})
