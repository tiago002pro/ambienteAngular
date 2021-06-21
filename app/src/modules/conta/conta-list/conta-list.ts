class ContaListController {
    constructor (
        public $scope,
        public $state,
        public entity,
    ) {}

    getSiglaTipoConta(tipo) {       
        return (tipo == 'corrente')? 'cc' : 'cp'
    }
}

ContaListController ['$inject'] = [
    '$scope',
    '$state',
    'entity',
]

export { ContaListController }

