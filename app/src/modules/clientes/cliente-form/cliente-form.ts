import { ClienteService } from '../services/cliente.service'

class ClienteFormController {
    constructor (
        public $scope,
        public $state,
        public clienteService: ClienteService,
    ) {}

    addClientePF(cliente) {
        // this.$scope.clienteForm.$setPristine();
        return this.clienteService.postClientePF(cliente)
    }

    addClientePJ(cliente) {
        // this.$scope.clienteForm.$setPristine();
        return this.clienteService.postClientePJ(cliente)
    }

    cpjMask(event: KeyboardEvent) {
        let value = ((<HTMLInputElement>event.currentTarget).value)
        value = value.replace(/\D/g, '')

        if (value && value.length >= 11) {
            if (value.length > 11) {
                value = value.substring(0,11)
            }
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
        }
        ((<HTMLInputElement>event.currentTarget).value) = value
        // console.log(value.length)
    }

    cnpjMask(event: KeyboardEvent) {
        let value = ((<HTMLInputElement>event.currentTarget).value)
        value = value.replace(/\D/g, '')

        if (value && value.length >= 14) {
            if (value.length > 14) {
                value = value.substring(0, 14)
            }
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
        }
        ((<HTMLInputElement>event.currentTarget).value) = value
        // console.log(value.length)
    }
}

ClienteFormController['$inject'] = [
    '$scope',
    '$state',
    'clienteService'
]

export { ClienteFormController }
