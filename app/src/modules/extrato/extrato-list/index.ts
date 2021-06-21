import * as angular from 'angular'
import './extrato-list.scss'
import template from './extrato-list.html'
import { ExtratoListController } from './extrato-list'
import { ExtratoService } from '../service/extrato.service'

const extratoListModule = angular
    .module('app.extrato-list', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.extrato-list', {
            url: '/extrato-list/:id/:tipoConta',
            params: {
                id: null,
                tipoConta: null
            },
            templateUrl: template,
            controller: ExtratoListController,
            controllerAs: '$ctrl',
            // resolve: {
            //     entity: ['$stateParams', 'extratoService', ($stateParams, extratoService: ExtratoService) => {
            //         return extratoService.getExtrato($stateParams.id, $stateParams.tipoConta).then((resp) => resp.data)
            //     }]
            // }
        })
    }])
    .name

export { extratoListModule }