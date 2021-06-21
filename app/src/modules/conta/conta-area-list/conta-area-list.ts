// import { BancoService } from '../../banco/service/banco.service'
import { Extrato } from '../../extrato/interfaces/extrato.interface'
import { ExtratoService } from '../../extrato/service/extrato.service'
import { Conta } from '../interfaces/conta.interface'
import { ContaService } from '../service/conta.service'

class ContaAreaListController {
    private page: number
    constructor (
        public $scope,
        public $state,
        public conta: Conta,
        public extrato: Extrato,
        public extratoService: ExtratoService,
        public contaService: ContaService
    ) {}
 
    
    getTipoConta(tipo) {
        return (tipo == 'corrente')? 'Corrente' : 'Poupança'
    }

    buttonNext() {
        console.log(this.page)
        if (this.page == null) {
            this.page = 1
        } else {
            this.page = this.page + 1

        }
        return this.page
    }

    buttonPrevious() {
        this.page = this.page - 1
        return this.page
    }

}

ContaAreaListController ['$inject'] = [
    '$scope',
    '$state',
    'conta',
    'extrato',
    'extratoService'
]

export { ContaAreaListController }