import DS from 'ember-data';
import { computed } from "@ember/object";
import { inject } from "@ember/service";
import CachedShoe   from 'ember-cached-shoe'

export default DS.RESTAdapter.extend(CachedShoe, {
  fastboot: inject(),

  host: 'https://api.heroku.com',
  headers: computed(function() {
    let key = '';
    if (this.get('fastboot.isFastBoot')) {
      key = this.get('fastboot.request.cookies.apiKey');
    } else {
      let matches = document.cookie.match(/apiKey=([^;]*)/);
      if (matches && matches.length == 2) {
        key = matches[1];
      }
    }

    return {
      "Authorization": "Bearer " + key,
      "Accept": "application/vnd.heroku+json; version=3"
    };
  }).volatile()
});
