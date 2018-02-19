import Route from "@ember/routing/route";
import { isPresent } from "@ember/utils";
import { inject } from "@ember/service";

export default Route.extend({
  flashMessages: inject(),

  actions: {
    authorize: function(apiKey) {
      if (isPresent(apiKey)) {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.cookie = "apiKey=" + apiKey + "; expires=" + tomorrow.toGMTString() + "; path=/";

        this.transitionTo('apps');
      } else {
        this.get('flashMessages').warning('API Key is Required: heroku auth:token');
      }
    }
  }
});
