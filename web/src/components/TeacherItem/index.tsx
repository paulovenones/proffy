import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

 import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/64383609?s=460&u=8a1e7b09c2c1ee6f0b5023975cfbccfa2e9b0752&v=4" alt="Paulo Venones"/>
            <div>
              <strong>Paulo Venones</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores texnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            pessoas através de experiências. Mais de 200.000 pessoas já passaram por
            uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;