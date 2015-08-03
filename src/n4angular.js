"use strict";

;(function(ng)
{
  ng.module('n4Angular.interceptors', [
    'n4ExceptionInterceptor',
    'n4AuthenticationInterceptor'
  ]);

  ng.module('n4Angular.filters', [
    'n4FileSizeFilter',
    'n4CodigoFilter',
    'n4CpfCnpjFilter'
  ]);

  ng.module('n4Angular.directives', [
    'n4Notifications',
    'n4Modal',
    'n4OnBottom',
    'n4DateInput',
    'n4NumberInput'
  ]);

  ng
    .module('n4Angular', [
      'n4Angular.interceptors',
      'n4Angular.filters',
      'n4Angular.directives'
    ]);
}(angular))
