import React from 'react'
import module from './Code.module.scss'
import Cross from '../assets/cross.png'
import Email_icon from '../assets/email_icon.png'
import key_icon from '../assets/key_icon.png' 
function Code() {

  return (
    <div>
        <div className={module.container}> 
        <div className={module.cross_button}>
            <button className={module.cross}>
              <img src={Cross}></img> 
            </button>
          </div>
          <div className={module.email_container}> 
            <div>
              <p>Ввести новый пароль</p>
              <div className={module.input_email}> 
              <img className={module.email_icon} src={key_icon}></img>

                <input className={module.e_mail}
                  type='text' 
                  placeholder='Введите пароль'/>                 
              </div><div className={module.line}> </div>
              <p>Подтвердить новый пароль</p>
              <div className={module.input_email}> 
              <img className={module.email_icon} src={key_icon}></img>

                <input className={module.e_mail}
                  type='text' 
                  placeholder='Введите пароль'/> 
              </div>
            </div> 
        
                <div className={module.line}> </div></div>
                <div className={module.forget}> 
                </div>
                <div > <button className={module.login_button}> Получить код </button>
                </div>
        </div>

    </div>
  )
}

export default Code