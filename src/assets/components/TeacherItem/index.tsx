import React from 'react';

import whatsappIcon from '../../images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1268532756910391296/jPGwaVBz_200x200.jpg" alt="José Mauricio"/>
                        <div>
                            <strong>José Mauricio Azevedo</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratórios e por mudar a vida de pessoas através de experiências.
                    </p>
                    
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp para contato"/>
                            Entrar em contato
                        </button>
                    </footer>
        </article>

    );
}

export default TeacherItem;


