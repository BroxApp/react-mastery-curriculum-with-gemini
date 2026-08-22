import { useFavoritesStore } from './useFavoritesStore'
import './App.css'

function App() {
  const favorites = useFavoritesStore((state)=>state.favorites);

  return (
    <div>
      <h1>Favorites Store</h1>
      <p>تعداد علاقه‌مندی‌ها: {favorites.length}</p>
    </div>
  )

}
export default App;
