import React from 'react'
import { CloseButtonStyled } from './CloseButton.styled'

interface ICloseButton {
  size: number
}

export const CloseButton = ({size}: ICloseButton) => {
  return (
    <CloseButtonStyled size={size}>
      <p>X</p>
    </CloseButtonStyled>
  )
}
