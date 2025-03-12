const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/calcular', (req, res) => {
    let { ganhos, gastos, juros, meses, tipo } = req.body; // Adicionei 'tipo' aqui

    let saldo = ganhos - gastos;
    let montante = saldo;

    for (let i = 0; i < meses; i++) {
        montante += saldo; 

        switch (tipo) {
            case 'poupança':
                montante += montante * (juros / 100);
                break;
            case 'cdb':
                montante += montante * (juros / 100) * 1.1;
                break;
            case 'fundo':
                montante += montante * (juros / 100) * 1.2;
                break;
            case 'acoes':
                montante += montante * (juros / 100) * 1.3;
                break;
            default:
                montante += montante * (juros / 100); // Caso padrão
                break;
        }
    }

    res.json({ resultado: montante.toFixed(2) }); 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
