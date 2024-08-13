let leitor = require("readline-sync")

export class Pessoa{
    nome: string
    sobrenome: string
    nome_do_pai: string
    nome_da_mãe: string
    numero_rg: number
    numero_cpf: number
    data_de_nascimento: Array<number>

    constructor(nomePessoa: string, sobrenomePessoa: string, nome_do_pai: string, nome_da_mãe, numero_rg: number, numero_cpf: number, data_de_nascimento: Array<number>)
    this.nome: nomePessoa
    this.sobrenome: sobrenomePessoa
    this.nome_da_mãe: nome_da_mãe
    this.nome_do_pai: nome_do_pai
    this.numero_rg: numero_rg
    this.numero_cpf: numero_cpf
    this.data_de_nasciment: data_de_nascimento



}
