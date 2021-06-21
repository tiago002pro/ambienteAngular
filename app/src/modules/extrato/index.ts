import * as angular from 'angular'
import { extratoListModule } from './extrato-list'
import { ExtratoService } from './service/extrato.service'

const extratoModule = angular
    .module('app.extrato', [
        extratoListModule
    ])
    .service('extratoService', ExtratoService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.extrato', {
            url: '/extrato',
            abstract: true
        })
    }])

export { extratoModule }