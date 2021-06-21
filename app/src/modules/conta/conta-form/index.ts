import * as angular from 'angular'
import './conta-form.scss'
import template from './conta-form.html'
import { ContaFormController } from './conta-form'
import { ContaService } from '../service/conta.service'
import { ClienteService } from '../../clientes/services/cliente.service'

const contaFormModule = angular
    .module('conta-form', [])
    // .service('clienteService', (ClienteService))
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.conta-form', {
            url: '/conta-form',
            templateUrl: template,
            controller: ContaFormController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['clienteService', (clienteService: ClienteService) => {
                    return clienteService.getClientes().then((resp) => resp.data)
                }]
            }
        })
    }])
    .name

export { contaFormModule }