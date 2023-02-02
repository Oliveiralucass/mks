import React from 'react'
import styled from 'styled-components'

export const CartContainer = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
`

export const CartStyled = styled.div`
    min-width: 400px;
    width: 30%;
    height: 100vh;  
    background-color: var(--color-primary);
    z-index: 1;
    position: fixed;
    right: 0;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px){
        min-width: 280px;
        width: 30%;
    }

`

export const CloseButtonContainer = styled.div`
   border-radius: 100%;
   border: none;
   outline: none;
`

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    height: 100px;
    align-items: center;

    h1{
        color: #FFFFFF
    }
`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 20px;
`

export const CartPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 20px 20px;
    color: #FFFFFF;
`

export const CartFinish = styled.div`
    height: 10%;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
`
