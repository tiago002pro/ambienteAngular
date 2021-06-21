import * as angular from 'angular'
import '../banco-form.scss'
import template from './saque.html'
import { SaqueController } from './saque'
import { ContaService } from '../../../conta/service/conta.service'

const saqueFormModule = angular
    .module('saque-form', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.saque-form', {
            url: '/saque-form/conta/:id/:tipoConta',
            params: {
                id: null,
                tipoConta: null
            },
            templateUrl: template,
            controller: SaqueController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['$stateParams', 'contaService', ($stateParams, contaService: ContaService) => {
                    return contaService.getContaIDCliente($stateParams.id, $stateParams.tipoConta).then((resp) => resp.data)
                }]
            }
        })
    }])
    .name
export { saqueFormModule }