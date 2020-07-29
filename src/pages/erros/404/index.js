import React from 'react'
import PageDefault from '../../../components/PageDefault';
import styled from 'styled-components'
import Imagem from '../../../assets/img/erro404.gif'

const Mensagem = styled.main`
    color: red;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;


function Erro404(){
    return(
        <PageDefault>
            <Mensagem>
                Página não encontrada 404
                <img src={Imagem} alt="Página não encontrada"/>
            </Mensagem>
        </PageDefault>
    )
}

export default Erro404;