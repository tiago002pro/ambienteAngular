import * as angular from 'angular'
import 'angular-ui-bootstrap'
import 'bootstrap'
import '@uirouter/angularjs'
// import './modules'
import 'angular-input-masks'
// import base from './components/base/base'
// import navBar from './components/nav-bar/nav-bar'
import footer from './components/footer/footer'
// import boxresponse from './components/box-response/boxResponse'

// import './app.module.scss'

angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    // 'app.management',
    // 'app.cliente',
    // 'app.conta',
    // 'app.extrato',
    // 'app.banco',
    'ui.utils.masks'
])
// .component('base', base)
// .component('navbar', navBar)
.component('footer', footer)
// .component('boxresponse', boxresponse)
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('app', {
        abstract: true,
        component: 'base'
    })
    $urlRouterProvider.otherwise('/')
}])