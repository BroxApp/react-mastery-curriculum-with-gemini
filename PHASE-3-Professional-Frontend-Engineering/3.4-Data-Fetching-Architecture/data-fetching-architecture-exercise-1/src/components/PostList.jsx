import { useQuery } from "@tanstack/react-query"

const fetchPosts = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=8'
  )

  if (!res.ok) {
    throw new Error('خطا در دریافت پست‌ها')
  }

  return res.json()
}

export function PostList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) {
    return <p>در حال بارگذاری پست‌ها...</p>
  }

  if (isError) {
    return <p>خطا: {error.message}</p>
  }

  return (
    <div>
      <h2>لیست پست‌ها</h2>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}