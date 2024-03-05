const port = process.env.PORT || 3001;
const app = require('./app');

app.listen(port, (err) => {
  if (err) {
    console.error('Erro ao iniciar o servidor:', err);
  } else {
    console.log(`Api rodando na porta ${port}`);
  }
});