import * as angular from 'angular'
import { contaListModule } from './conta-list'
import { contaFormModule } from './conta-form'
import { contaAreaListModule } from './conta-area-list'
import { ContaService } from './service/conta.service'

const contaModule = angular 
    .module('app.conta', [
        contaListModule,
        contaFormModule,
        contaAreaListModule
    ])
    .service('contaService', ContaService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.conta', {
            url: '/conta',
            abstract: true
        })
    }])

    export { contaModule }