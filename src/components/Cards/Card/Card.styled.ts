import styled from 'styled-components'

export const CardStyled = styled.div`
    width: 220px;
    height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20px;
    box-shadow: var(--card-box-shadow);
    border-radius: 8px;
    background-color: #FFFFFF;
`

export const CardContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 12px 12px 14px;
`
export const CardImageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;

    img{
        width: 60%;
    }
`

export const CardContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const CardHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CardBodyStyled = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
`

export const CardBuyButton = styled.button`
    width: 100%;
    height: 32px;
    display: flex;
    gap: 14px;
    color: #FFFFFF;
    background-color: var(--color-primary);
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 8px 8px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: var(--color-primary-hover);
    }

    p{
        font-weight: 600;
        font-size: 14px;
    }   
`