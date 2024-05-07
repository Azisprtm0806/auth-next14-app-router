import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPage = { params: { slug: string } };

export default async function DetailProductPage(props: ProductPage) {
  const { params } = props;

  const products = await getData("http://localhost:3000/api/product");

  return (
    <div className="grid grid-cols-3 mt-5 place-items-center">
      {products.data.length > 0 &&
        products.data.map((product: any) => {
          return (
            <Link
              href={`/product/detail/${product.id}`}
              className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2"
              key={product.id}
            >
              <Image
                className="p-8 rounded-t-lg object-cover h-96 w-96"
                src={product.image}
                alt="product image"
                width={500}
                height={500}
              />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.name}
                </h5>
                <button
                  type="button"
                  className="flex items-center justify-between mt-3"
                >
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    Rp. {product.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </button>
              </div>
            </Link>
          );
        })}
      ;
      {params.slug && (
        <>
          <ul>
            <li>slug 1: {params.slug[0]}</li>
            <li>slug 2: {params.slug[1]}</li>
            <li>slug 3: {params.slug[2]}</li>
          </ul>
        </>
      )}
    </div>
  );
}
