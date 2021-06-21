class ContaService {
    private url: string = 'http://localhost:8080'
    constructor (
        public $http
    ) {}

    getContas() {
        return this.$http.get(`${this.url}/contas`)
    }

    postContaCC(cliente) {
        return this.$http.post(`${this.url}/contas/cc/clientes/` + cliente)
    }

    postContaCP(cliente) {
        return this.$http.post(`${this.url}/contas/cp/clientes/` + cliente)
    }

    getContaIDCliente(idCliente, contaTipo) {
        let tipoDaConta;
        if (contaTipo == 'corrente') {
            tipoDaConta = 'cc'
        } else 
        if (contaTipo == 'poupanca') {
            tipoDaConta = 'cp'
        } 
        return this.$http.get(`${this.url}/contas/` + tipoDaConta + `/cliente/` + idCliente)
    }

    getContaID(id) {
        return this.$http.get(`${this.url}/contas/` + id)
    }

    getTipoContaCod(tipo) {
        return (tipo == 'corrente')? 'cc' : 'cp'
    }
}

ContaService ['$inject'] = [
    '$http'
]

export { ContaService } 