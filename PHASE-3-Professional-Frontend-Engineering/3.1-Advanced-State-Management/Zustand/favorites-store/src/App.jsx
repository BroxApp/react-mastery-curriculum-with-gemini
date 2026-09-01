import { useFavoritesStore } from './useFavoritesStore'
import './App.css'

const products = [
{ id: 1, name: 'Laptop' },
{ id: 2, name: 'Phone' },
{ id: 3, name: 'Mouse' },
]

function App() {
  const favorites = useFavoritesStore((state)=>state.favorites);
  const addFavorite = useFavoritesStore((state)=>state.addFavorite);
  const removeFavorite = useFavoritesStore((state)=>state.removeFavorite);
  const isFavorite = useFavoritesStore((state)=>state.isFavorite);

  return (
    <div>
      <h1>Favorites Store</h1>
      <p>تعداد علاقه‌مندی‌ها: {favorites.length}</p>

      <h2>Products</h2>
      {products.map((product) => {
      const favorite = isFavorite(product.id);

      return (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() =>favorite? removeFavorite(product.id): addFavorite(product.id)}>
            {favorite ? '❤️' : '🤍'}
          </button>
        </div>
      );
      })}
    
    </div>

  )

}
export default App;
