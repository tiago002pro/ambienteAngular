import * as angular from 'angular'
import './conta-area-list.scss'
import template from './conta-area-list.html'
import { ContaAreaListController } from './conta-area-list'
import { ContaService } from '../service/conta.service'
import { ExtratoService } from '../../extrato/service/extrato.service'

const contaAreaListModule = angular
    .module('app.conta-area', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.conta-area-list', {
            url: '/conta-area-list/conta/:id/page/:page',
            params: {
                id: null,
                page: null
            },
            templateUrl: template,
            controller: ContaAreaListController,
            controllerAs: '$ctrl',
            resolve: {
                conta: ['$stateParams', 'contaService', ($stateParams, contaService: ContaService) => {
                    return contaService.getContaID($stateParams.id).then((resp) => resp.data)
                }],
                extrato: ['$stateParams', 'extratoService', ($stateParams, extratoService: ExtratoService) => {
                    return extratoService.getExtrato($stateParams.id, $stateParams.page).then((resp) => resp.data.content)
                }]
            }
        })
    }])
    .name

export { contaAreaListModule }