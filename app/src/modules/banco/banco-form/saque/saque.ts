import { BancoService } from "../../service/banco.service"

class SaqueController {
    constructor (
        public $scope,
        public $state,
        public bancoService: BancoService,
        public entity
    ) {}

    saque(id, valor) {
        console.log(valor)
        console.log(id)
        return this.bancoService.saque(id, { valor })
    }
}

SaqueController ['$inject'] = [
    '$scope',
    '$state',
    'bancoService',
    'entity'
]

export { SaqueController }