import * as angular from 'angular'
import { depositoFormModule } from './banco-form/deposito'
import { saqueFormModule } from './banco-form/saque'
import { transferenciaFormModule } from './banco-form/transferencia'
import { BancoService } from './service/banco.service'

const bancoModule = angular 
    .module('app.banco', [
        depositoFormModule,
        saqueFormModule,
        transferenciaFormModule
    ])
    .service('bancoService', BancoService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.banco', {
            url: '/banco',
            abstract: true
        })
    }])

export { bancoModule }