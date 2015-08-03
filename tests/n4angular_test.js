"use strict";

describe('n4Angular', function()
{
  beforeEach(module('n4-angular'));


  describe('Module creation', function()
  {
    it('should be able to create the module', inject(function(N4NotificationModel)
    {
      expect(new N4NotificationModel()).toBeDefined();
    }));
  });
});
