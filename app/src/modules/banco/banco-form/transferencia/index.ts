import * as angular from 'angular'
import '../banco-form.scss'
import template from './transferencia.html'
import { TransferenciaController } from './transferencia'
import { ContaService } from '../../../conta/service/conta.service'

const transferenciaFormModule = angular
    .module('transferencia-form', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.transferencia-form', {
            url: '/transferencia-form/conta/:id/:tipoConta',
            params: {
                id: null,
                tipoConta: null
            },
            templateUrl: template,
            controller: TransferenciaController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['$stateParams', 'contaService', ($stateParams, contaService: ContaService) => {
                    return contaService.getContaIDCliente($stateParams.id, $stateParams.tipoConta).then((resp) => resp.data)
                }]
            }
        })
    }])
    .name
export { transferenciaFormModule }