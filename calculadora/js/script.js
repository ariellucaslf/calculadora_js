function calcular(tipo, valor) {
    let campo = document.getElementById('resultado');

    if (tipo === 'acao') {
        if (valor === 'c') {
            // limpar o visor
            campo.value = '';
        }
        else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            let ultimo = campo.value.slice(-1); // último caractere

            // se o último já for operador, substitui
            if (['+', '-', '*', '/', '.'].includes(ultimo)) {
                campo.value = campo.value.slice(0, -1) + valor;
            } else {
                campo.value += valor;
            }
        }
        else if (valor === '=') {
            let expressao = campo.value;

            let operadores = ['+', '-', '*', '/'];
            let ultimo = expressao.slice(-1);
            let primeiro = expressao.slice(0, 1);

            // só calcula se expressão for válida
            if (
                expressao !== '' && 
                !operadores.includes(ultimo) && 
                !operadores.includes(primeiro) && 
                operadores.some(op => expressao.includes(op))
            ) {
                try {
                    campo.value = eval(expressao);
                } catch (e) {
                    // se der erro no eval, apenas não faz nada
                }
            }
            // caso contrário: não faz nada
        }
    } 
    else if (tipo === 'valor') {
        campo.value += valor;
    }
}