import {create} from "zustand";

const useFavoritesStore = create((set)=>({
    favorites:[],
    
    toggleFavorite: (product)=>
        set((state)=>{
            const isFavorite = state.favorites.some(
                (item)=>item.id === product.id
            );
            if(isFavorite){
                return{
                    favorites: state.favorites.filter(
                        (item)=>item.id !== product.id
                    ),
                };
            }
            return{
                favorites:[...state.favorites, product],
            };
        }),
}));

export default useFavoritesStore;