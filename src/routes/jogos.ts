import { Router, Request, Response } from "express";
import { prisma } from "../prisma";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { titulo, generoId, plataformasIds } = req.body; 

    if (!titulo || !generoId) {
        return res.status(400).json({ 
            erro: "Título e generoId são obrigatórios." 
        });
    }

    const plataformas = await prisma.plataforma.findMany({
        where: {
            id: {
                in: plataformasIds.map((id: number) => Number(id))
            }
        }
    });

    if (plataformas.length !== plataformasIds.length) {
        return res.status(400).json({
            erro: "Uma ou mais plataformas não estão cadastradas."
        });
    }

    const Jogo = await prisma.jogo.create({
        data: {
            titulo: titulo,
            genero: {
                connect: { id: Number(generoId) }
            },
            plataformas: {
                connect: plataformasIds.map((id: number) => ({ id: Number(id) }))
            }
        },
        include: {
            genero: true,
            plataformas: true
        }
    });

    return res.status(201).json(Jogo);
});

router.get("/", async (req: Request, res: Response) => {


    const jogos = await prisma.jogo.findMany({
        include: {
            genero: true
        }
    });

    res.json(jogos);
});


export default router;