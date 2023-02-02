import React from 'react'
import { PriceButtonStyled } from './PriceButton.styled'
interface IPriceButton{
  price: string,
  size: number
} 

export const PriceButton = ({price, size}: IPriceButton) => {
  return (
    <PriceButtonStyled size={size}>
        <p>R${price}</p>
    </PriceButtonStyled>
  )
}
