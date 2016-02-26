'use strict';

describe('Service: FundsService', function () {

  // load the service's module
  beforeEach(module('fundlistApp'));

  // instantiate service
  var app.services;
  beforeEach(inject(function (_app.services_) {
    app.services = _app.services_;
  }));

  it('should do something', function () {
    expect(!!app.services).toBe(true);
  });

});
