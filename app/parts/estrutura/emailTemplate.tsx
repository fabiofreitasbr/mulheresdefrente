interface EmailTemplateProps {
    nome: string;
    email: string;
    phone: string;
    cidade: string;
    consumo: string;
}

export function EmailTemplate(body: EmailTemplateProps) {
    return (
        <div>
            <h1>Contato - Site - GoodSun</h1>
            <p>Nome: {body.nome}!</p>
            <p>E-mail: {body.email}!</p>
            <p>Telefone: {body.phone}!</p>
            <p>Cidade: {body.cidade}!</p>
            <p>Consumo: {body.consumo}!</p>
        </div>
    )
};