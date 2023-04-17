import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: #eeeeee;

    @media (min-width: 576px) {
        padding: 30px 15px;
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
