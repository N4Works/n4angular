"use strict";

;(function(ng)
{
  ng.module('n4-angular.interceptors', [
    'n4ExceptionInterceptor',
    'n4AuthenticationInterceptor'
  ]);

  ng.module('n4-angular.filters', [
    'n4FileSizeFilter',
    'n4CodigoFilter',
    'n4CpfCnpjFilter'
  ]);

  ng.module('n4-angular.directives', [
    'n4Notifications',
    'n4Modal',
    'n4OnBottom',
    'n4DateInput',
    'n4NumberInput'
  ]);

  ng
    .module('n4-angular', [
      'n4-angular.interceptors',
      'n4-angular.filters',
      'n4-angular.directives'
    ]);
}(angular))
