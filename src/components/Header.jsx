import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 10px;
    border: 2px solid black;

    a {
        margin-right: 10px;
        text-decoration: none;
        color: navy;
    }
`

function Header() {
    return (
        <HeaderWrapper>
            <Link to="/">HomePage</Link>
            <Link to="/login">Login</Link>
            <Link to="/v3">v3</Link>
        </HeaderWrapper>
    )
}

export default Header
