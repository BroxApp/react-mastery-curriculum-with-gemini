import { useInfiniteQuery } from "@tanstack/react-query"

const LIMIT = 6

const fetchProducts = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${pageParam}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json()
}

export function InfiniteProductList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["infinite-products"],
    queryFn: fetchProducts,
    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      const nextSkip = allPages.length * LIMIT

      return nextSkip < lastPage.total
        ? nextSkip
        : undefined
    },

    staleTime: 1000 * 60 * 2,
  })

  if (isLoading) {
    return <p>Loading products...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      {data.pages.map((group, pageIndex) => (
        <div key={pageIndex}>
          {group.products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  )
}