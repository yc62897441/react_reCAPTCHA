import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const V2Wrapper = styled.label`
    width: 100%;
`

const V2Invisible = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    function onSubmit(token) {
        console.log('success!')

        // 取得表單資料
        const form = document.querySelector('.form')
        const account = form[0].value
        const password = form[1].value

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
        console.log('postData', postData)
        // 發送向後端的 post API
        // ...
    }

    function renderInvisible() {
        grecaptcha.ready(function () {
            grecaptcha.render('submit', {
                sitekey: '6LfolpMlAAAAAKu-7uQoX4Y7uF7K3t_nLyO3dghn',
                callback: onSubmit,
            })
        })
    }

    useEffect(() => {
        // 載入 reCaptcha API 資源
        const script = document.createElement('script')
        script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
        script.addEventListener('load', function () {
            setIsLoaded(true)
        })
        document.body.appendChild(script)
    })

    useEffect(() => {
        // 確認 reCaptcha API 資源已載入完成後，再去綁定  reCaptcha invisible 到 submit 按鈕上
        if (isLoaded === true) renderInvisible()
    }, [isLoaded])

    return (
        <V2Wrapper>
            <h1>reCAPTCHA v2 隱形 invisible 運作說明</h1>
            <p>1. 先去載入 reCaptcha API 資源</p>
            <p>2. 資源載入後，在 submit 按鈕上綁定 reCaptcha invisible</p>
            <p>3. 當使用者點擊 submit 按鈕時，系統只會提示最可疑的流量來完成人機驗證 (Captcha) 問題</p>

            <form className="form">
                <div>
                    <label htmlFor="account">帳號</label>
                    <input id="account" type="text" />
                </div>
                <div>
                    <label htmlFor="password">密碼</label>
                    <input id="password" type="password" />
                </div>
                <button id="submit">submit</button>
            </form>
        </V2Wrapper>
    )
}

export default V2Invisible
