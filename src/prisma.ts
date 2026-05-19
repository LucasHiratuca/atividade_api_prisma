import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const autores = await prisma.autor.findMany();

    res.json(autores);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});