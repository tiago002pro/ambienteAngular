export interface Extrato {
    id?: any,
    contaTipo: String,
    data: Date,
    descricao: String,
    saldo: DoubleRange,
    novoSaldo: DoubleRange,
    chequeEspecial: DoubleRange,
    juros: DoubleRange,
    cliente?: any
}