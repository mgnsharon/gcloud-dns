/*globals inject, beforeEach, describe, it, expect, module*/
describe('xd.views.DnsManager', function () {

  beforeEach( module('xd.views.DnsManager'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('dnsManagerCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('DnsManagerCtrl');
  });

});