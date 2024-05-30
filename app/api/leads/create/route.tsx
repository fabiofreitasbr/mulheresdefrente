import { prismaClient } from "@/app/lib/prismaClient";

export async function POST(req: Request, res: Response) {
    const { nome, email, telefone } = await req.json();
    
        const responseContent = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {}
        };

        if (!nome || nome=="") { responseContent.message = "Preencha o campo nome"; }
        else if (!email || email=="") { responseContent.message = "Preencha o campo email"; }
        else {
            try {
                const avisemePrisma = await prismaClient.mdf_leads.create({
                    data: {
                        email,
                        nome,
                        telefone
                    },
                });
                responseContent.status = true;
                responseContent.message = "Formulário enviado com sucesso";
                responseContent.data = avisemePrisma;
            }
            catch (erro:any) {
                if (erro.code === 'P2002') { responseContent.message = "Você já está cadastrado em nosso sistema!"; }
            }
        }
    return Response.json(responseContent);
}