const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'tweteroo')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'html');
app.set('tweteroo', path.join(__dirname, 'tweteroo'));


let usuarios = [];


app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'tweteroo', '/index.html'));
});

app.post('/sign-up', (req, res) => {
    const { username, avatar } = (req.body);

    // Verifica se ambos os campos foram preenchidos
    if (username && avatar) {
        const novoUsuario = { username, avatar }; // Cria um objeto usuário com nome e URL da foto
        usuarios.push(novoUsuario); // Adiciona o objeto à array de usuários
        console.log('Usuário adicionado com sucesso!', usuarios ); // Retorna a lista de usuários atualizada
    } else {
        res.status(400).json({ error: 'Nome e URL da foto são obrigatórios!' }); // Retorna erro se faltarem dados
}
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com HTTPS na porta ${PORT}`);
});