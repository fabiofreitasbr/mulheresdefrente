"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormContato() {

    const [message, setMessage] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [colorMessage, setColorMessage] = useState('bg-red-700');

    const handleNome = (e: ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    function onSubmitSend(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (nome == null || nome.length < 3) { setMessage('O nome digitado não é válido'); }
        else if (email == null || email.length < 5) { setMessage('O e-mail digitado não é válido'); }
        else if (phone == null || phone.length < 7) { setMessage('O telefone digitado não é válido'); }
        else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setMessage('O e-mail digitado não é válido'); }
        else {
            setMessage('');
            axios.post('/api/resend', { nome, email, phone })
            .then(function (response) {
                if (response.data) { setMessage("Mensagem enviada com sucesso!"); setColorMessage('bg-green-700'); } else { setMessage("Houve um erro ao enviar a mensagem!"); setColorMessage('bg-red-700'); }
            })
            .catch(function (error) { setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"); });
        }
    }
    return (
        <form onSubmit={onSubmitSend}>
            <div className="grid gap-5 container mx-auto max-w-lg">
                <input type="text" name="nome" onChange={handleNome} value={nome} className="w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent border-2 border-zinc-200 placeholder:text-zinc-200 text-beige-500" placeholder="Nome" />
                <input type="text" name="email" onChange={handleEmail} value={email} className="w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent border-2 border-zinc-200 placeholder:text-zinc-200 text-beige-500" placeholder="E-mail" />
                <input type="text" name="phone" onChange={handlePhone} value={phone} className="w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent border-2 border-zinc-200 placeholder:text-zinc-200 text-beige-500" placeholder="Telefone" />
                <div className="flex justify-end">
                    <button type="submit" className="py-2 px-6 text-base rounded-full bg-beige-500 hover:bg-purple-600 transition ease-in-out duration-300 delay-300 text-purple-700 uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} />Quero Participar</button>
                </div>
            </div>
            {
                (message != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white my-2 p-2 uppercase text-center border-2 border-white  border-dashed ' + colorMessage} role="alert">{message}</div></div> : ''
            }
        </form>
    )
}