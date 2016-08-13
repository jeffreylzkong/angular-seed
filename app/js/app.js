'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.directives',
  'myApp.filters'
])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('root.view1');
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider', "$locationProvider",
    function ($stateProvider,   $urlRouterProvider, $locationProvider) {

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider
      // Root state to master all
        .state('root', {
        	abstract: true,
            views: {
                'header': {
                    templateUrl: 'partials/header.html',
                    controller: 'HeaderCtrl'
                },
                'footer': {
                    templateUrl: 'partials/footer.html',
                    controller: 'FooterCtrl'
                },
            }
        })

        // View1
        .state('root.view1', {
            url: '/view1',
            views: {
                'home@': {
                    templateUrl: 'partials/view1.html',
                    controller: 'View1Ctrl'
                },
            }
        })
        // View1
        .state('root.view2', {
            url: '/view2',
            views: {
                'home@': {
                    templateUrl: 'partials/view2.html',
                    controller: 'View2Ctrl'
                },
            }
        })
       
    }
  ]
);
