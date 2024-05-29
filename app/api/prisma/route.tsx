import axios from "axios";

export async function POST(req: Request, res: Response) {
    const { nome, email, telefone } = await req.json();
    const responsePost = axios.post('https://infoback.infocomputec.com.br/mulheres/create', {nome, email, telefone})
    return Response.json(responsePost);
}