import { retrieveData, retrieveDataById } from "@/libs/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "SAMBA OG SHOES",
    price: 2400000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/ffbe5d912e2813a20bb27461a01c1e7c/i/g/ig1357_1_footwear_photography_side_lateral_view_grey.jpg"
  },
  {
    id: 2,
    title: "GAZZLE INDOOR SHOES",
    price: 2500000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/ffbe5d912e2813a20bb27461a01c1e7c/i/d/id3518_2_footwear_photography_side_lateral_view_grey.jpg"
  },
  {
    id: 3,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/f/if6562_2_footwear_photography_side20lateral20view_grey.jpg"
  },
  {
    id: 4,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie5896_2_footwear_photography_side20lateral20view_grey.jpg"
  },
  {
    id: 5,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie5896_2_footwear_photography_side20lateral20view_grey.jpg"
  },
  {
    id: 6,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie5896_2_footwear_photography_side20lateral20view_grey.jpg"
  },
  {
    id: 7,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie5896_2_footwear_photography_side20lateral20view_grey.jpg"
  },
  {
    id: 8,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie5896_2_footwear_photography_side20lateral20view_grey.jpg"
  },
  {
    id: 9,
    title: "HANDBALL SPEZIAL SHOES",
    price: 1700000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie5896_2_footwear_photography_side20lateral20view_grey.jpg"
  }
]

export async function GET(request: NextRequest){
  const {searchParams} = new URL(request.url);
  const id = searchParams.get("id");

  if(id){

    const detail = await retrieveDataById("products", id);
    if(detail){
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detail
      })
    }

    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {}
    })
  }

  const products = await retrieveData("products");

  return NextResponse.json({
    status: 200,
    message: "success",
    data: products
  })
}