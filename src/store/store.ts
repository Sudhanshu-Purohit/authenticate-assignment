import { create } from 'zustand'

type Movie = {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string
}

type Store = {
  watchlist: Array<Movie>;
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: string) => void;
}

const useStore = create<Store>()((set) => ({
  watchlist: [],
  addToWatchlist: (movie) => set((state) => {
    const movieExists = state.watchlist.some(w => w.imdbID === movie.imdbID);
    if (!movieExists) {
      return {...state, watchlist: [...state.watchlist, movie] };
    }
    return state;
  }),
  removeFromWatchlist: (id) => set((state) => ({ watchlist: state.watchlist.filter(movie => movie.imdbID !== id) }))
}))

export default useStore;
