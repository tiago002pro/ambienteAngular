import { Extrato } from "../interfaces/extrato.interface"
import { ExtratoService } from "../service/extrato.service"

class ExtratoListController {
    constructor (
        public $scope,
        public $state,
        public entity: Extrato,
        public extratoService: ExtratoService

    ) {}
}

ExtratoListController ['$inject'] = [
    '$scope',
    '$state',
    'entity',
    'extratoService'
]

export { ExtratoListController }