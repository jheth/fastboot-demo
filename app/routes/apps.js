import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  flashMessages: service(),

  beforeModel: function() {
    let matches = document.cookie.match(/apiKey=([^;]*)/);
    if (matches == null) {
      this.transitionTo('authorize');
    }
  },
  model: function() {
    return this.store.findAll('app');
  },
  actions: {
    error: function(error) {
      document.cookie = 'apiKey=;';
      alert(error.message);
      this.transitionTo('authorize');
    },

    destroyApp: function(app) {
      app.destroyRecord().then(() => {
        /* do nothing on success */
        this.get('flashMessages').success('Successfully deleted!');
      }).catch(() => {
        this.get('flashMessages').danger('An error occurred while deleting ' + app.get('name'));
      });
    }
  }
});
