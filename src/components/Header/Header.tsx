import React, { useState } from 'react'
import { CartButton } from '../Buttons/CartButton/CartButton'
import { Cart } from '../Cart/Cart'
import { CartButtonContainer, HeaderContainer, HeaderStyled, HeaderTitle } from './Header.styled'

export const Header = () => {

  const [shouldShowModal, setShouldShowModal] = useState(false)

  return (
   <HeaderContainer>
     <HeaderStyled>
      <HeaderTitle>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </HeaderTitle>
      <CartButtonContainer onClick={() => setShouldShowModal(!shouldShowModal)}>
        <CartButton />
      </CartButtonContainer>
      

    </HeaderStyled>
    <Cart shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)}/>
   </HeaderContainer>
  )
}
