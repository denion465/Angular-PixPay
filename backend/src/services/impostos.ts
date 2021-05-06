class Impostos {
    
    calcularSalarioLiquidoINSS(salarioBruto) {

        let salario = Number(salarioBruto)
        let aliquotas = 0
        let tabelaIrrf = 0

        if (salario < 1100) return 'A Lei No. 13.467 de 13 de Julho de 2017, conhecida como Reforma Trabalhista não permite essa salário'

        if (salario <= 1110) aliquotas = 7.5, tabelaIrrf = 61
        else if (salario > 1110 && salario <= 2203) aliquotas = 9, tabelaIrrf = 55
        else if (salario <= 2203 && salario <= 3305) aliquotas = 12, tabelaIrrf = 154
        else if (salario <= 3305 && salario <= 6433) aliquotas = 14, tabelaIrrf = 201
        else  aliquotas = 22, tabelaIrrf = 258

        let descontoInss = ((salario * aliquotas) / 100)
        let descontIRRF = descontoInss - tabelaIrrf

        salario = salario - descontIRRF - descontoInss;

        return salario

    }

    calcularImpostoImportados(valor) {

        const valorProduto = Number(valor)

        const imposto = {
            valor: valorProduto.toFixed(2) + 'R$',
            dataSobreArtigo: new Date().getMonth() + '/' + new Date().getFullYear(),
            porcentagem: '60%',
            taxaImportacao: ((valorProduto * 60) / 100),
            icms: '17% de Imposto sobre circulação de mercadorias e serviços',
            jurosFinal: ((valorProduto * 60) / 100) + ((valorProduto * 17) / 100),
            total: valorProduto + ((valorProduto * 60) / 100) + ((valorProduto * 17) / 100) + valorProduto
        }

        return imposto

    }

}

module.exports = new Impostos();