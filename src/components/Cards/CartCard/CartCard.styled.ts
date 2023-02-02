import styled from 'styled-components'

export const CartCardStyled = styled.div`
    background-color: #FFFFFF;
    height: 95px;
    width: 380px;
    border-radius:8px ;
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;

    @media (max-width: 768px){
        height: 250px;
        width: 220px;
        display: flex;
        flex-direction: column;
    }
`
export const CloseButtonContainer = styled.div`
   position: relative;
   top: -46px;
   right: -26px;
   border-radius: 100%;

   .close-mobile{
            display: none;
        }
    .close{
        display: block;
    }

    @media (max-width: 768px){
        top: -225px;
        right: -90px;
        font-size: 1.25rem;


        .close-mobile{
            display: block;
        }

        .close{
            display: none;
        }
    }
`

export const CartCardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 768px){
        flex-direction: column;
    }

    
`

export const CartCardImage = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 70%;
    }
`

export const CartCardTitle = styled.div`
    width: 115px;
    p{
        font-size: 13px;
    }

    @media (max-width: 768px){
        width: 211px;
        display: flex;
        justify-content: center;

        p{
            font-size: 16px;
        }
    }
`

export const CartCardQuantity = styled.div`
    display: flex;
    flex-direction: column;

    p.qtd{
        font-size: 6px;
    }
    .mobile-price {
        display: none;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;

        p.qtd{
            display: none;
        }
        .mobile-price {
            display: block;
        }
    }
`

export const CartCardPrice = styled.div`
    font-size: 14px;
    font-weight: 700;
    display: flex;


    @media (max-width: 768px) {
        display: none;
    }
`
