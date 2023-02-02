import React from 'react'
import { CartCardContainer, CartCardImage, CartCardPrice, CartCardQuantity, CartCardStyled, CartCardTitle, CloseButtonContainer } from './CartCard.styled'
import { QuantityButton } from '../../Buttons/QuantityButton/QuantityButton'
import { CloseButton } from '../../Buttons/CloseButton/CloseButton'
import { useAppDispatch } from '../../../hooks/useTypedSelector'
import { removeFromCart } from '../../../app/reducers/cartSlice'
import { PriceButton } from '../../Buttons/PriceButton/PriceButton'


interface ICartCard {
  name: string,
  price: string,
  image: string,
  quantity: number,
  id: number
}

export const CartCard = ({name, price, image, quantity, id}: ICartCard) => {

  const dispatch = useAppDispatch();

  return (
    <CartCardStyled>
      <CartCardContainer>
        <CartCardImage>
          <img src={image} alt="" />
        </CartCardImage>

        <CartCardTitle>
          <p>{name}</p>
        </CartCardTitle>

        <CartCardQuantity>
          <p className='qtd'>Qtd:</p>
          <QuantityButton quantity={quantity} id={id} price={price}/>

          <div className='mobile-price'>
            <PriceButton price={price} size={64}/>
          </div>
        </CartCardQuantity>
      </CartCardContainer>

      <CartCardPrice>
        R${price}
      </CartCardPrice>

      <CloseButtonContainer onClick={() =>
            dispatch(removeFromCart({ price: Number(price), id, quantity }))
          }>
            <div className='close'><CloseButton size={18}/></div>
        
        <div className='close-mobile'> X </div>
      </CloseButtonContainer>
    </CartCardStyled>
  )
}

