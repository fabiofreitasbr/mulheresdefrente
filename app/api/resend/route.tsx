import { EmailTemplate } from "@/app/parts/estrutura/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Contato - <noreply@agenciakls.com.br>',
            to: ['fabiofreitassilvacontato@gmail.com'],
            subject: 'Mulheres de Frente - Contato',
            react: EmailTemplate(body),
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}