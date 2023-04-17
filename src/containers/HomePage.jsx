import styled from 'styled-components'
import Form from '../components/Form.jsx'

const HomePageWrapper = styled.div`
    width: 100%;
`

function HomePage() {
    return (
        <HomePageWrapper>
            <Form />
        </HomePageWrapper>
    )
}

export default HomePage
