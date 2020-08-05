import React from 'react'
import whatsappicon from '../../assets/images/icons/whatsapp.svg'

import './style.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/28544719?s=460&u=51183e5a62c60e23877f5dcbbffc5088247e064b&v=4" alt="Foto de perfil" />
                <div>
                    <strong>Gabriel Novaes</strong>
                    <span>Matemática computacional</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a visão.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappicon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}



export default TeacherItem