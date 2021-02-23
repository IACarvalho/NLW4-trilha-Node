import express, { request } from 'express';

const app = express();



app.get('/', (request, response) => {
  response.json({message: "Deu bom!"})
})

app.post('/', (request, response) => {
  return response.json({message: "Os dados foram salvo com sucesso!"})
})

app.listen(3333, () => console.log("Server is runing"))