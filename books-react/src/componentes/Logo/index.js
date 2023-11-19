import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    text-decoration: none;
    color: inherit;
`
const LogoImg = styled.img`margin-right: 10px;`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg
                src={logo}
                alt='logo'
                className='logo-img'
            ></LogoImg>
            <p><strong>Books</strong></p>
        </LogoContainer>
    )
} 

export default Logo