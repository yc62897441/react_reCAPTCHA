import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomePageWrapper = styled.div`
    width: 100%;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`

function HomePage() {
    return (
        <HomePageWrapper>
            <h1>Home Page</h1>
            <p>請選擇版本：</p>
            <LinksWrapper>
                <Link to="/v3">v3</Link>
                <br />
                <Link to="/v2Checkbox">v2Checkbox</Link>
                <br />
                <Link to="/v2Invisible">v2Invisible</Link>
                <br />
            </LinksWrapper>
        </HomePageWrapper>
    )
}

export default HomePage
