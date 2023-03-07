import React, { useState } from 'react'
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

    return (
        <form>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" className="input" />
            {/* 使用 react-router-dom 切換路由後就不會再顯示出來，要重新整理才會有。 */}
            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY.trim()} onChange={handleVerify} />
            {isVerified && <Button>Submit</Button>}
        </form>
    )
}

export default Form
