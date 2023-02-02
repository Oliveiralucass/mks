import React from 'react'
import { Cart } from '../../components/Cart/Cart'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'
import { HomeStyled } from './Home.styled'

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <List />
      <Cart />
      <Footer text={'MKS Sistemas © Todos os direitos reservados'}/>
    </HomeStyled>
  )
}
