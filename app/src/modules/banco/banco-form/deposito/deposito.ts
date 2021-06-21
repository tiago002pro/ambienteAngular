import { BancoService } from '../../service/banco.service'

class DepositoController {
    constructor (
        public $scope,
        public $state,
        public bancoService: BancoService,
        public entity
    ) {}

    deposito(id, valor) {
        console.log(valor)
        console.log(id)
       return this.bancoService.deposito(id, { valor })
    }
}

DepositoController ['$inject'] = [
    '$scope',
    '$state',
    'bancoService',
    'entity'
]

export { DepositoController }