import Route from "@ember/routing/route";

export default Route.extend({
  beforeModel: function(transition) {
    if (transition.targetName == 'index') {
      this.transitionTo('apps');
    }
  }
});
