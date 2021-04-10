import React, { useCallback, useState, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, selectProduct } from './productSlice'
import { fetchDetail } from './../detail/detailSlice'
import { useHistory } from 'react-router-dom'
import {
  Image,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Text,
} from 'grommet'

const Products = () => {
  let history = useHistory()

  const data = useSelector(selectProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const handleClick = (sku: string) => {
    dispatch(fetchDetail(sku))
    history.push('/detail')
  }

  const formatter = (val: string) =>
    'IDR ' + val.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')

  return (
    <Box gap={'large'} pad={'large'} margin={{ bottom: 'small' }}>
      <Grid gap='medium' columns={{ count: 'fit', size: 'small' }}>
        {data &&
          data.map((value) => {
            return (
              <Card
                border
                elevation={'none'}
                key={value.sku}
                onClick={() => {
                  handleClick(value.sku)
                }}>
                <CardHeader
                  pad={{ horizontal: 'small', vertical: 'small' }}
                  direction={'column'}
                  align={'start'}>
                  <Text style={{ fontWeight: 'bold' }}>{value.name}</Text>
                  <Text style={{ fontSize: 12 }}>
                    {formatter(
                      value.price_range.minimum_price.regular_price.value,
                    )}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Image fit='cover' src={value.small_image.url} />
                </CardBody>
                <CardFooter
                  justify={'center'}
                  pad={{ horizontal: 'medium', vertical: 'small' }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    See Details
                  </Text>
                </CardFooter>
              </Card>
            )
          })}
      </Grid>
    </Box>
  )
}

export default Products
