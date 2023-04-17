import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const V3Wrapper = styled.label`
    width: 100%;
`

const V3 = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    function handlePost(token) {
        // 取得表單資料
        const form = document.querySelector('.form')
        const account = form[0].value
        const password = form[1].value
        console.log('form', form[0].value)
        console.log('form', form[1].value)
        console.log('token2', token)

        //建立表單資料
        const postData = {}
        if (account && password) {
            postData.account = account
            postData.password = password
            postData.token = token
        } else {
            // window.alert('帳號、密碼不可空白')
            return
        }

        // 發送向後端的 post API
        // ...
    }

    function handleReCaptchaAndPost() {
        //套用機器人辨識
        grecaptcha.ready(function () {
            grecaptcha
                .execute('6LemvpIlAAAAAIR0sMNg7nrNOly2XpWsrlyLrjDB', {
                    action: 'submit',
                })
                .then(function (token) {
                    if (token) handlePost(token)
                    return
                })
        })
    }

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LemvpIlAAAAAIR0sMNg7nrNOly2XpWsrlyLrjDB' // 如要進一步控制 reCAPTCHA 執行的時間，您可以在 grecaptcha 物件中使用 execute 方法。如要這麼做，您必須在 reCAPTCHA 指令碼載入中加入 render 參數。
        script.addEventListener('load', function () {
            console.log('load finished')
            setIsLoaded(true)
        })
        document.body.appendChild(script)
    })

    return (
        <V3Wrapper>
            {isLoaded ? <div>recaptcha API 載入完成</div> : <div>recaptcha API 載入中...</div>}

            <h1>reCAPTCHA v3 運作說明</h1>
            <p>在按下 submit 按鈕時，g-recaptcha API 會先去向 g-recaptcha 進行驗證並取回 token，之後再進行應用程式後續的邏輯例如 post form data</p>
            <p>注意：reCAPTCHA 權杖會在兩分鐘後失效。如果您要使用 reCAPTCHA 保護動作，請務必在使用者執行動作時呼叫 execute，而非在網頁載入時呼叫。</p>

            {/* <form class="form" action="submit" method="post"> */}
            <form className="form">
                <div>
                    <label htmlFor="account">帳號</label>
                    <input id="account" type="text" />
                </div>
                <div>
                    <label htmlFor="password">密碼</label>
                    <input id="password" type="password" />
                </div>
                {isLoaded && (
                    <button onClick={handleReCaptchaAndPost} type="button">
                        submit
                    </button>
                )}
            </form>
        </V3Wrapper>
    )
}

export default V3
