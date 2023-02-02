import { title } from 'process'
import React, { useEffect } from 'react'
import { getProducts } from '../../app/reducers/productSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { Card } from '../Cards/Card/Card'

export const List = () => {
    const dispatch = useAppDispatch()

    const {data, error, loading} = useAppSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    
  return (
    <div>
        <ul style={{ display:'flex', gap: '40px', flexWrap: 'wrap', maxWidth: '1200px', justifyContent:'center', margin: '60px auto'}}>
            {data && data.products.map((product, i) => <Card key={product.id} id={product.id} quantity={product.quantity} name={product.name} description={product.description} price={Number(product.price).toFixed(0)} photo={product.photo}/>)}
        </ul>
    </div>
  )
}
