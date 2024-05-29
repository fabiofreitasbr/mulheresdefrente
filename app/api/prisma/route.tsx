import axios from "axios";

export async function POST(req: Request, res: Response) {
    const { nome, email, telefone } = await req.json();
    const responsePost = axios(
        {
            url: 'https://infoback.infocomputec.com.br/mulheres/create',
            data: { nome, email, telefone },
            withCredentials: false,
        }
    );
    return Response.json(responsePost);
}