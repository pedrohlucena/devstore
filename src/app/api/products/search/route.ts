import { z } from 'zod'

import { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const lowerCaseQuery = query.toLocaleLowerCase()

  const products = data.products.filter((product) => {
    const lowerCaseProduct = product.title.toLocaleLowerCase()

    return lowerCaseProduct.includes(lowerCaseQuery)
  })

  return Response.json(products)
}
