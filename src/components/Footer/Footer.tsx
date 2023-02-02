import React from 'react'
import { FooterStyled } from './Footer.styled'

interface IFooter {
  text: string
}

export const Footer = ({text}: IFooter) => {
  return (
    <FooterStyled>
      <p>{text}</p>
    </FooterStyled>
  )
}
