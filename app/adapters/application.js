import DS from 'ember-data';
import { computed } from "@ember/object";

export default DS.RESTAdapter.extend({
  host: 'https://api.heroku.com',
  headers: computed(function() {
    let key = '';
    let matches = document.cookie.match(/apiKey=([^;]*)/);
    if (matches && matches.length == 2) {
      key = matches[1];
    }
    return {
      "Authorization": "Bearer " + key,
      "Accept": "application/vnd.heroku+json; version=3"
    };
  }).volatile()
});
