import { Router, Request, Response } from "express";
import { prisma } from "../prisma";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { nome } = req.body;  

    if (!nome) {
        return res.status(400).json({ 
            erro: "Nome do genero é obrigatório." 
        });
    }

    const genero = await prisma.genero.create({
        data: { nome }
    });

    return res.status(201).json(genero);
});
router.get("/", async (req: Request, res: Response) => {


    const generos = await prisma.genero.findMany();

    res.json(generos);
});


export default router;