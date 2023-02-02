import React from 'react'
import { useAppDispatch } from '../../../hooks/useTypedSelector';
import { QuantityButtonContainer, QuantityButtonStyled } from './QuantityButton.styled'
import { addQuantity, removeQuantity } from '../../../app/reducers/cartSlice';

interface IQuantityButton {
  quantity: number,
  id: number,
  price: string
}

export const QuantityButton = ({quantity, id, price}:IQuantityButton) => {
  const dispatch = useAppDispatch();
  return (
    <QuantityButtonStyled>
      <QuantityButtonContainer>
        <button onClick={() =>
            dispatch(removeQuantity({ price: Number(price), id }))
          }>-</button>
        <span>|</span>
        <p>{quantity}</p>
        <span>|</span>
        <button onClick={() =>
            dispatch(addQuantity({ price: Number(price), id }))
          }>+</button>
      </QuantityButtonContainer>
    </QuantityButtonStyled>
  )
}
