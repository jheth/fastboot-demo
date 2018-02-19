import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  item: null,
  actions: {
    destroyApp: function() {
      this.sendAction('destroyApp', this.get('item')); // eslint-disable-line
    }
  }
});
