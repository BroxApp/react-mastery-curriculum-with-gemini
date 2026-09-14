import { useState } from "react";
import {
  useQuery,
  keepPreviousData,
} from "@tanstack/react-query";

const fetchProducts = async (page) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=5&skip=${(page - 1) * 5}`
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات");
  }

  return response.json();
};

export function PaginatedProducts() {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });

  if (isLoading) {
    return <p>در حال بارگذاری محصولات...</p>;
  }

  if (isError) {
    return <p>خطا: {error.message}</p>;
  }

  const isNextDisabled =
    isPlaceholderData || !data?.products?.length;

  return (
    <div>
      <h1>Dynamic Query Keys & Pagination</h1>

      {data.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}

      <button
        onClick={() => setPage((oldPage) => oldPage - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      <span> صفحه {page} </span>

      <button
        onClick={() => setPage((oldPage) => oldPage + 1)}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
}