import * as angular from 'angular'
import './cliente-form.scss'
import template from './cliente-form.html'
import { ClienteFormController } from './cliente-form'
import { ClienteService } from '../services/cliente.service'

const clienteFormModule = angular
    .module('cliente-form', [])
    // .service('clienteService', ClienteService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.cliente-form', {
            url: '/form',
            templateUrl: template,
            controller: ClienteFormController,
            controllerAs: '$ctrl'
            // resolve: {
            //     entity: ['clienteService', (clienteService: ClienteService) => {
            //         return clienteService.getClientesPF().then((resp) => resp.data)
            //     }]
            // }
        })
    }])
    .name

export { clienteFormModule }