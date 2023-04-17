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
            <Link to="/v3">v3</Link>
            <Link to="/v2Checkbox">v2Checkbox</Link>
            <Link to="/v2Invisible">v2Invisible</Link>
        </HeaderWrapper>
    )
}

export default Header
