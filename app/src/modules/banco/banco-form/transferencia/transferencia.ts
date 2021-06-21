import { BancoService } from "../../service/banco.service"


class TransferenciaController {
    constructor (
        public $scope,
        public $state,
        public bancoService: BancoService,
        public entity
    ) {}
}

TransferenciaController ['$inject'] = [
    '$scope',
    '$state',
    'bancoService',
    'entity'
]

export { TransferenciaController }