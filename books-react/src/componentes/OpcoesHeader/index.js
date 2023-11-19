import { Link } from 'react-router-dom'
import './estilo.css'
import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']
const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( texto => (
                <Link to={`/${texto.toLowerCase()}`}><li className='opcao'><p>{texto}</p></li></Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;