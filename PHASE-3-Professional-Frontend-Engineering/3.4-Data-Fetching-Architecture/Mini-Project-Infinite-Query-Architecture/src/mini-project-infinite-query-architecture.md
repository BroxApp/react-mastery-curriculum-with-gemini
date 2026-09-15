🎯 Phase 3.4 Mini-Project: Infinite Query Architecture (useInfiniteQuery)
🧠 مبانی مفهومی کلیدی (بدون حاشیه):
ساختار دیتای خروجی:
خروجی useInfiniteQuery برخلاف useQuery یک آبجکت تکی نیست، بلکه آرایه‌ای از صفحات است: data.pages. برای رندر باید از یک حلقه تو در تو (Nested Map) استفاده کنیم:

Apply
data.pages.map((group) => group.products.map((product) => ...))
پارامتر pageParam در Fetcher:
تابع واکشی پارامتر صفحه را مستقیم دریافت می‌کند: fetchProducts({ pageParam = 0 }).
متد حیاتی getNextPageParam:
مشخص می‌کند آیا صفحه بعدی وجود دارد یا خیر. اگر وجود داشته باشد، مقدار pageParam بعدی را برمی‌گرداند؛ در غیر این صورت undefined.
متد fetchNextPage و فلگ isFetchingNextPage:
برای بارگذاری صفحه بعد و نمایش وضعیت لودینگ اختصاصی همان دکمه بدون اینکه کل صفحه وارد لودینگ شود.
📂 ساختار پیشنهادی پروژه:

Apply
PHASE-3-Professional-Frontend-Engineering/3.4-Data-Fetching-Architecture/mini-project-infinite-query/
├── src/
│ ├── components/
│ │ └── InfiniteProductList.jsx
│ ├── App.jsx
│ └── main.jsx
🛠️ الزامات پیاده‌سازی (Minimal & Focused):
پیکربندی main.jsx:

اتصال QueryClientProvider و ReactQueryDevtools.
تابع واکشی (fetchProducts):

واکشی داده بر اساس limit و skip:

Apply
const LIMIT = 6
const fetchProducts = async ({ pageParam = 0 }) => {
const res = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${pageParam}`)
if (!res.ok) throw new Error('Failed to fetch')
return res.json()
}
پیاده‌سازی InfiniteProductList.jsx:

استفاده از useInfiniteQuery:

Apply
const {
data,
fetchNextPage,
hasNextPage,
isFetchingNextPage,
isLoading,
isError,
error
} = useInfiniteQuery({
queryKey: ['infinite-products'],
queryFn: fetchProducts,
initialPageParam: 0,
getNextPageParam: (lastPage, allPages) => {
const nextSkip = allPages.length _ LIMIT
return nextSkip < lastPage.total ? nextSkip : undefined
},
staleTime: 1000 _ 60 \* 2,
})
هندل کردن وضعیت‌های اولیه isLoading و isError.
رندر لیست محصولات (title و price).
دکمه ساده «Load More»:
کلیک: فراخوانی fetchNextPage().
غیرفعال (disabled): زمانی که !hasNextPage یا isFetchingNextPage باشد.
متن دکمه: isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'.
