import React from 'react'
import module from './Email.module.scss'
import Cross from '../assets/cross.png'
import Email_icon from '../assets/email_icon.png'

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
              <p> E-mail</p>
              <div className={module.input_email}> 
                <img className={module.email_icon} src={Email_icon}></img>
                <input className={module.e_mail}
                  type='text' 
                  placeholder='Введите e-mail'/> 
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
