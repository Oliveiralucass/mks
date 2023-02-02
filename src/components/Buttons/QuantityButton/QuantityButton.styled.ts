import styled from 'styled-components'

export const QuantityButtonStyled = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border:0.3px solid #BFBFBF;
    border-radius: 4px;
`

export const QuantityButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
   

    p, span {
        font-size: 10px;
        font-weight: 500;
    }

    button {
        border: none;
        outline: none;
        font-size: 10px;
        font-weight: 500;
        background-color: #FFFFFF;
        padding: 4px 6px;
        border-radius: 4px;
        text-align: center;
    }
`