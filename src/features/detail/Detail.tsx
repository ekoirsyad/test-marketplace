import React from 'react'
import { useSelector } from 'react-redux'
import { selectedDetail } from './detailSlice'
import { Button, Image, Box, Card, Text, Footer } from 'grommet'

const Detail = () => {
  const data = useSelector(selectedDetail)

  const formatter = (val: string) =>
    'IDR ' + val.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')

  return (
    <Box>
      <Box gap={'large'} pad={'large'} margin={{ bottom: 'small' }}>
        {data && data.length > 0 ? (
          <Box>
            <Card border elevation={'none'}>
              <Image fit='cover' src={data[0].image.url} />
            </Card>
            <Box
              pad={'medium'}
              direction={'row'}
              align={'center'}
              justify={'between'}>
              <Text size={'xxlarge'}>{data[0].name}</Text>
            </Box>
            <Footer round background='brand' pad='medium'>
              <Text>
                {formatter(
                  data[0].price_range.minimum_price.regular_price.value,
                )}
              </Text>
              <Button label={'Buy'} />
            </Footer>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default Detail
