    function somar() {
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var soma = n1 + n2;
        document.getElementById('resultado').innerHTML = soma;
    }

    function subtrair() {
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var subtracao = n1 - n2;
        document.getElementById('resultado').innerHTML = subtracao;
    }

    function multiplicar() {
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var multiplicacao = n1 * n2;
        document.getElementById('resultado').innerHTML = multiplicacao;
    }

    function dividir() {
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var divisao = n1 / n2;
        document.getElementById('resultado').innerHTML = divisao;
    }