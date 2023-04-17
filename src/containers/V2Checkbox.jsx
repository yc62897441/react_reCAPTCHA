import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const V2Wrapper = styled.label`
    width: 100%;
`

const V2Checkbox = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isBtnShow, setIsBtnShow] = useState(false)

    function handlePost(event) {
        event.preventDefault()

        // 取得表單資料
        const account = event.target[0].value
        const password = event.target[1].value

        //建立表單資料
        const postData = {}
        if (account && password) {
            postData.account = account
            postData.password = password
        } else {
            // window.alert('帳號、密碼不可空白')
            return
        }
        console.log('postData', postData)
        // 發送向後端的 post API
        // ...
    }

    function showSubmitBtn() {
        setIsBtnShow(true)
    }

    function renderCheckbox() {
        grecaptcha.ready(function () {
            grecaptcha.render('reCaptchaCheckbox', {
                sitekey: '6LdjTdwkAAAAACcoWEz7SfM9bjwg1MG3X9-dplrg',
                callback: showSubmitBtn,
            })
        })
    }

    useEffect(() => {
        // 載入 reCaptcha API 資源
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
        script.addEventListener('load', function () {
            setIsLoaded(true)
        })
        document.body.appendChild(script)
    })

    useEffect(() => {
        // 確認 reCaptcha API 資源已載入完成後，再去建立(render) 核取方塊 checkbox
        if (isLoaded === true) renderCheckbox()
    }, [isLoaded])

    return (
        <V2Wrapper>
            <h1>reCAPTCHA v2 核取方塊 checkbox 運作說明</h1>
            <p>1. 先去載入 reCaptcha API 資源</p>
            <p>2. 資源載入後，在畫面 render reCaptcha 核取方塊 checkbox</p>
            <p>3. 勾選 reCaptcha 核取方塊 checkbox，完成驗證後，render submit 按鈕</p>
            <p>4. 點擊 submit 按鈕，向後端發送表單資訊</p>

            <form
                className="form"
                onSubmit={(event) => {
                    handlePost(event)
                }}
            >
                <div>
                    <label htmlFor="account">帳號</label>
                    <input id="account" type="text" />
                </div>
                <div>
                    <label htmlFor="password">密碼</label>
                    <input id="password" type="password" />
                </div>

                {/* 來掛載 reCaptcha checkbox 的 DOM 節點 */}
                <div id="reCaptchaCheckbox"></div>

                {isBtnShow && <button type="submit">submit</button>}
            </form>
        </V2Wrapper>
    )
}

export default V2Checkbox
