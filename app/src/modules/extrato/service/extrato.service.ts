class ExtratoService {
    private url: string = 'http://localhost:8080'
    constructor (
        public $http
    ) {}

    getExtrato(idConta, page) {
        return this.$http.get(`${this.url}/extrato/conta/${idConta}?size=3&page=${page}`)
    }

    // tamanhoLista(idConta, page) {
    //     let totalNumerPages = this.$http.get(`${this.url}/extrato/conta/${idConta}?size=3&page=${page}`).then((resp) => resp.data.totalPages)
    //     console.log(totalNumerPages)
    // }
}

ExtratoService ['$inject'] = [
    '$http'
]

export { ExtratoService }