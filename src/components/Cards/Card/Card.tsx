import React, { useEffect } from 'react'
import { PriceButton } from '../../Buttons/PriceButton/PriceButton'
import { CardBodyStyled, CardBuyButton, CardContainerStyled, CardContentStyled, CardHeaderStyled, CardImageStyled, CardStyled } from './Card.styled'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector'
import { addToCart } from '../../../app/reducers/cartSlice'
import shoppingBag from '../../../assets/shopping-bag.svg'

interface ICard {
  id: number,
  name: string,
  description: string,
  price: string,
  photo: string
  quantity: number
}


export const Card = (props: ICard) => {
  const dispatch = useAppDispatch();
  
  const {items, precoTotal} = useAppSelector((state) => state.cart)

  useEffect(() => {
    console.log(items)
  }, [items])
  
  return (
    <CardStyled>
      <CardContainerStyled>
        <CardImageStyled>
          <img src={props.photo} alt="macbook-pro" />
        </CardImageStyled>

        <CardContentStyled>
          <CardHeaderStyled>
            <p>{props.name}</p>
            <PriceButton price={props.price} size={64}/>
          </CardHeaderStyled>

          <CardBodyStyled>
            <p>{props.description}</p>
          </CardBodyStyled>
        </CardContentStyled>
      </CardContainerStyled>

      <CardBuyButton onClick={() => dispatch(addToCart(props))}>
        <img src={shoppingBag} alt="Sacola de Compras" />
        <p>COMPRAR</p>
      </CardBuyButton>
    </CardStyled>
  )
}

