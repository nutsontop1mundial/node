function calcularDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}

function calcularAcrescimo(valor, acrescimo) {
    return valor + (valor * acrescimo / 100);
}

module.exports = { calcularDesconto, calcularAcrescimo };
