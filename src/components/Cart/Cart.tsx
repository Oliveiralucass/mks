import React from 'react'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { CloseButton } from '../Buttons/CloseButton/CloseButton'
import { CartCard } from '../Cards/CartCard/CartCard'
import { CartContainer, CartContent, CartFinish, CartHeader, CartPrice, CartStyled, CloseButtonContainer } from './Cart.styled'

export const Cart = ({ shouldShow, onRequestClose}: any) => {

  const {items, precoTotal} = useAppSelector(state => state.cart)


  return shouldShow ? (
    <CartContainer onClick={onRequestClose}>
        <CartStyled onClick={e => e.stopPropagation()}>
          <div>
            <CartHeader>
              <h1>Carrinho de compras</h1>
              <CloseButtonContainer onClick={onRequestClose}>
                <CloseButton size={38} />
              </CloseButtonContainer>
            </CartHeader>

            <CartContent>
              {items && items.map(product => <CartCard key={product.id} name={product.name} price={Number(product.price).toFixed(0)} image={product.photo} quantity={product.quantity} id={product.id}/>)}
            </CartContent>

            <CartPrice>
              <p>Resumo da compra</p>
              <h1>total: {precoTotal}</h1>
            </CartPrice>
          </div>
          <CartFinish>
            Finalizar Pedido
          </CartFinish>
        </CartStyled>
    </CartContainer>
  ) : null;
}
