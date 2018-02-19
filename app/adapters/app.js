import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  /* Override RESTAdapter#ajax to modify data before sending out. */
  ajax: function(url, type, options) {
    /* POST /apps accepts 3 options arguments: name, stack, region */
    if (type === 'POST') {
      if (options.data) {
        options.data = {'name': options.data.app.name}
      }
    }

    return this._super(url, type, options);
  }
});
