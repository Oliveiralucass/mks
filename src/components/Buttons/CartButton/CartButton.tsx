import React from 'react'
import { CartButtonStyled } from './CartButton.styled'
import cartImage from '../../../assets/cart.svg'
import { useAppSelector } from '../../../hooks/useTypedSelector'

export const CartButton = () => {

  const { items } = useAppSelector((state) => state.cart)

  return (
   <CartButtonStyled>
        <img src={cartImage} alt="Carrinho" />
        <p>{items.length}</p>
   </CartButtonStyled>
  )
}
