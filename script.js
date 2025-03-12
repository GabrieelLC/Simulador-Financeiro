document.getElementById('calcular').addEventListener('click', () => {
    let ganhos = parseFloat(document.getElementById('ganhos').value) || 0;
    let gastos = parseFloat(document.getElementById('gastos').value) || 0;
    let juros = parseFloat(document.getElementById('juros').value) || 0;
    let meses = parseInt(document.getElementById('meses').value) || 1;
    let tipo = document.getElementById('tipo').value;

    fetch('http://localhost:3000/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ganhos, gastos, juros, meses, tipo }) // Adicionei 'tipo' aqui
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').textContent = 
            `Saldo futuro após ${meses} meses: R$ ${data.resultado}`;
    })
    .catch(error => console.error('Erro:', error));
});
