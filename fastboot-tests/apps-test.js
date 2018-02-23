'use strict';

const expect = require('chai').expect;

describe('apps', function() {

  it('renders', function() {
    return this.visit('/apps')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        // add your real tests here
        expect(response.statusCode).to.equal(200);
        expect($('body').length).to.equal(1);
      });
  });

  it('redirect response to authorize', function() {
    return this.visit({
      uri: '/apps',
      followRedirect: false
    }).then(function(res) {
      let response = res.response;

      expect(response.statusCode).to.equal(307);
      expect(response.headers.location).to.match(/\/authorize/);
    });
  });

});
