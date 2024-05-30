import { prismaClient } from "@/app/lib/prismaClient";

export async function GET(req: Request, res: Response) {

    const leadsList = await prismaClient.mdf_leads.findMany();
    return Response.json(leadsList);
}