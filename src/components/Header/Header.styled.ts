import React from 'react'
import styled from 'styled-components'

export const HeaderStyled = styled.div` 
    width: 100%;
    height: 100px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    padding: 0 10%;
    justify-content: space-between;
    gap: 8px;
`

export const CartButtonContainer = styled.button`
    border-radius: 8px; 
    border: none;
    outline: none;
`
export const HeaderContainer = styled.div`
    height: 100%;
    display: flex;
`

export const HeaderTitle = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;
    color: #FFFFFF;
    
    h1{
        font-size: 40px;
    }
    span{
        font-size: 20px;
    }
`