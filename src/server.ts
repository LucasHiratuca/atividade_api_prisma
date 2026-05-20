import express from "express";
import generosRouter from "./routes/generos";
import jogosRouter from "./routes/jogos";
import plataformasRouter from "./routes/plataformas";

const app = express();
const PORT = 3000;

app.use(express.json());
    
app.use("/generos", generosRouter);
app.use("/jogos", jogosRouter);
app.use("/plataformas", plataformasRouter);

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`)
});