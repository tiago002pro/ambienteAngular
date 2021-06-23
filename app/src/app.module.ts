import * as angular from 'angular'
import 'angular-ui-bootstrap'
import 'bootstrap'
import '@uirouter/angularjs'
import 'angular-input-masks'
import base from './components/base/base'
import navBar from './components/nav-bar/nav-bar'
import footer from './components/footer/footer'

import './app.module.scss'

angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    'ui.utils.masks'
])
.component('base', base)
.component('navbar', navBar)
.component('footer', footer)
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('app', {
        abstract: true,
        component: 'base'
    })
    $urlRouterProvider.otherwise('/')
}])