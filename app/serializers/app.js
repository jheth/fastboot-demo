import DS from 'ember-data';
import { underscore } from "@ember/string";

export default DS.RESTSerializer.extend({
  keyForAttribute: function(key) {
    return underscore(key);
  },

  normalizeArrayResponse: function (store, primaryModelClass, payload, id, requestType) {
    /* We get a raw array as the response, wrap it in 'apps' root key */
    return this._super(store, primaryModelClass, {'apps': payload}, id, requestType);
  },
  normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
    /* We get a raw array as the response, wrap it in 'apps' root key */
    return this._super(store, primaryModelClass, {'app': payload}, id, requestType);
  }
});
