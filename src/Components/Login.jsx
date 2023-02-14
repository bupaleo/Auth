import React from 'react'
import module from './Login.module.scss'
import Cross from '../assets/cross.png'
import Email_icon from '../assets/email_icon.png'
import key_icon from '../assets/key_icon.png' 
import tick_icon from '../assets/tick_icon.png' 
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import facebook from '../assets/facebook.png'
function Login() {

  return (
    <div>
        <div className={module.container}> 
        <div className={module.cross_button}>
            <button className={module.cross}>
              <img src={Cross}></img> 
            </button>
          </div>
          <div className={module.login_h3}> 
            <h3> Вход </h3> 
          </div>
          <div className={module.email_container}> 
            <div >
              <p> E-mail</p>
              <div className={module.input_email}> 
                <img className={module.email_icon} src={Email_icon}></img>
                <input className={module.e_mail}
                  type='text' 
                  placeholder='Введите e-mail'/> 
              </div>
            </div> 
            <div className={module.line}> </div>
                <div> 
                  <p>Пароль</p>
                  <div className={module.input_email}> 
                  <div> 
                    <img className={module.email_icon} src={key_icon}></img>
                    <input className={module.password}
                    type='text' 
                    placeholder='Введите пароль'/> </div>
                    </div> </div> 
                <div className={module.line}> </div></div>
                <div className={module.forget}> 
                  <p> <button className={module.tick}> <img className={module.email_icon} src={tick_icon}></img> </button> Запомнить меня</p>
                  <p> <a href='#'>Забыли пароль?</a></p>
                </div>
                <div > <button className={module.login_button}> Войти </button>
                </div>
                <div className={module.icons_container}> Войти с помощью:
                    <div className={module.icons}>
                        <a href='#'> <img src={google} className={module.icon} alt='gmail'></img> </a>
                        <a href='#'  id={module.one}> <img src={apple} className={module.icon} id={module.a} alt='apple'></img> </a>
                        <a href='#'  id={module.one}> <img src={facebook} className={module.icon} alt='facebook'></img> </a>
                    </div>
                </div>
                <div className={module.signin}><p> Нет аккаунта? <a href='#'>Зарегистрироваться </a> </p> </div>
        </div>

    </div>
  )
}

export default Login
