import * as angular from 'angular'
import '../banco-form.scss'
import template from './deposito.html'
import { DepositoController } from './deposito'
import { ContaService } from '../../../conta/service/conta.service'

const depositoFormModule = angular
    .module('app.deposito-form', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.deposito-form', {
            url: '/deposito-form/conta/:id/:tipoConta',
            params: {
                id: null,
                tipoConta: null
            },
            templateUrl: template,
            controller: DepositoController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['$stateParams', 'contaService', ($stateParams, contaService: ContaService) => {
                    return contaService.getContaIDCliente($stateParams.id, $stateParams.tipoConta).then((resp) => resp.data)
                }]
            }
        })
    }])
    .name
export { depositoFormModule }