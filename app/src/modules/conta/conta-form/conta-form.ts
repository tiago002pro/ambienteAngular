import { ClienteService } from '../../clientes/services/cliente.service'
import { ContaService } from '../service/conta.service'

class ContaFormController {
    public sucessResp: any
    public errorResp: any
    
    constructor (
        public $scope,
        public $state,
        public clienteService: ClienteService,
        public contaService: ContaService,
        public entity,
        public $http,
        // public resposta: any
    ) {}

    createContaCC(cliente) {
        this.contaService.postContaCC(cliente).then((resp) => {
            this.sucessResp = resp.data.responseSuccess
            this.errorResp = resp.data.responseError
            
            console.log(resp.data.responseSuccess)
            console.log(resp.data.responseError)
        })
    }

    createContaCP(cliente) {
        this.contaService.postContaCP(cliente).then((resp) => {
            this.sucessResp = resp.data.responseSuccess
            this.errorResp = resp.data.responseError
            
            console.log(resp.data.responseSuccess)
            console.log(resp.data.responseError)
        })
    }

    reloadPage() {
        location.reload();
    }

    OnInit() {
        return this.clienteService.getClientes().then((resp) => resp.data)
    }
}

ContaFormController ['$inject'] = [
    '$scope',
    '$state',
    'clienteService',
    'contaService',
    'entity',
    '$http'
]

export { ContaFormController }