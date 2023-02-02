import styled from "styled-components"

export const CartButtonStyled = styled.button`
    width: 90px;
    height: 45px;
    padding: 12px 24px 12px 12px;
    display: flex;
    gap: 16px;
    border-radius: 8px;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    
    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }

    p{
        font-size: 18px;
        font-weight: 700;
    }
`

