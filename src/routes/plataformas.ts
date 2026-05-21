import { Router, Request, Response } from "express";
import { prisma } from "../prisma";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { nome } = req.body; 

    if (!nome) {
        return res.status(400).json({ 
            erro: "Nome da plataforma é obrigatório." 
        });
    }

    const Plataforma = await prisma.plataforma.create({
        data: {
            nome: nome
        }
    });

    return res.status(201).json(Plataforma);
});

router.get("/", async (req: Request, res: Response) => {


    const plataformas = await prisma.plataforma.findMany();

    res.json(plataformas);
});


export default router;