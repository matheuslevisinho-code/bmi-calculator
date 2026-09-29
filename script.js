function calcularIMC() {
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');
    const divResultado = document.getElementById('resultado');

    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        exibirMensagem(divResultado, "Por favor, preencha valores válidos para peso e altura.", true);
        return;
    }

    const valorIMC = peso / (altura * altura);

    let classificacao = '';

    if (valorIMC < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        classificacao = 'Peso normal';
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (valorIMC >= 35 && valorIMC <= 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III (Mórbida)';
    }

    const dadosUsuario = {
        pesoInformado: peso,
        alturaInformada: altura,
        imcCalculado: valorIMC.toFixed(2),
        resultadoClassificacao: classificacao
    };

    const mensagemHtml = `
        <h2>Seu IMC é ${dadosUsuario.imcCalculado}</h2>
        <p>Classificação: <strong>${dadosUsuario.resultadoClassificacao}</strong></p>
    `;

    exibirMensagem(divResultado, mensagemHtml, false);
}

function exibirMensagem(elemento, conteudo, ehErro) {
    elemento.classList.remove('escondido', 'erro');
    elemento.innerHTML = conteudo;

    if (ehErro) {
        elemento.classList.add('erro');
    }
}