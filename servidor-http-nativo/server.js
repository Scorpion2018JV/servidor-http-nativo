const http = require('node:http');
const PORTA = 3000;

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url} - ${new Date().toISOString()}`)

    res.statusCode = 201;
    res.setHeader('Content-Type', `application/json`)

    res.end(JSON.stringify({ status: "ok" }))
});

server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`)
});

//Se a linha res.end() for removida, o servidor recebe a requisição, mas não exibe a resposta.
//Então o navegador fica carregando e esperando uma resposta que nunca aparece.
//O res.end() indica ao servidor que a resposta foi concluída e envia o conteúdo ao cliente.