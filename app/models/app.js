import DS from 'ember-data';

export default DS.Model.extend({
  archivedAt: DS.attr('date'),
  buildpackProvidedDescription: DS.attr('string'),
  buildStack: DS.attr(),
  createdAt: DS.attr('date'),
  gitUrl: DS.attr('string'),
  maintenance: DS.attr('boolean'),
  name: DS.attr('string'),
  owner: DS.attr(),
  region: DS.attr(),
  releasedAt: DS.attr('date'),
  repoSize: DS.attr('number'),
  slugSize: DS.attr('number'),
  stack: DS.attr(),
  updatedAt: DS.attr('date'),
  webUrl: DS.attr('string')
});
