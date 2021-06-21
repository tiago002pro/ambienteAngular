class BancoService {
    private url: string = 'http://localhost:8080'
    constructor (
        public $http
    ) {}

    deposito(id, body) {
        return this.$http.post(`${this.url}/banco/deposito/conta/` + id, body)
    }

    saque(id, body) {
        return this.$http.post(`${this.url}/banco/saque/conta/` + id, body)
    }

    // postTransferencia() {}
}

BancoService ['$inject'] = [
    '$http'
]

export { BancoService }