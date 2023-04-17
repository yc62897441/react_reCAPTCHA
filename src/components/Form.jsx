import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'

const Label = styled.label`
    display: block;
    margin-bottom: 2px;
    font-family: 'Courier New', Courier, monospace;
`

const Input = styled.input`
    width: 295px;
    height: 30px;
    border: rgb(122, 195, 238) 2px solid;
    display: block;
    margin-bottom: 10px;
    border-radius: 3px;

    :focus {
        border: none;
    }
`

const Button = styled.button`
    padding: 7px;
    margin-top: 5px;
    width: 300px;
    background-color: rgb(122, 195, 238);
    border: none;
    border-radius: 4px;
`

const Form = () => {
    const [isVerified, setIsVerified] = useState(false)
    const handleVerify = (response) => {
        if (response) {
            setIsVerified(true)
        }
    }

    function onSubmit(token) {
        console.log('token', token)
        // document.getElementById('demo-form').submit()
    }

    useEffect(() => {
        console.log('createElement')
        const script = document.createElement('script')
        script.src = 'https://www.google.com/recaptcha/api.js'

        script.addEventListener('load', function () {
            console.log('load finished')
            setIsVerified(true)
        })

        document.body.appendChild(script)
        console.log('load start')
    })

    return (
        <div>
            <form id="demo-form" method="POST">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" className="input" />
                
                <button className="g-recaptcha" data-sitekey="6LdjTdwkAAAAACcoWEz7SfM9bjwg1MG3X9-dplrg" data-callback="onSubmit" data-action="submit">
                    Submit
                </button>
                {/* {isVerified && (
                )} */}

                {/* <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" className="input" /> */}
            </form>
            <br />
            <br />
            <br />

            <form>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" className="input" />
                {/* {isVerified && <Button>Submit</Button>} */}

                {/* 使用 react-router-dom 切換路由後就不會再顯示出來，要重新整理才會有。 */}
                {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY.trim()} onChange={handleVerify} />
            {isVerified && <Button>Submit</Button>} */}
            </form>
        </div>
    )
}

export default Form
