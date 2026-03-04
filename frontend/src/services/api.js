const API_KEY = import.meta.env.VITE_TMDB_API_KEY?.trim();
const BASE_URL = "https://api.themoviedb.org/3";

const buildTmdbUrl = (path, params = "") => {
  if (!API_KEY) {
    throw new Error("Missing VITE_TMDB_API_KEY environment variable.");
  }

  return `${BASE_URL}${path}?api_key=${API_KEY}${params}`;
};

const requestTmdb = async (path, params = "") => {
  const response = await fetch(buildTmdbUrl(path, params));

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status}).`);
  }

  const data = await response.json();
  return data.results ?? [];
};

export const getPopularMovies = async () => requestTmdb("/movie/popular");

export const searchMovies = async (query) =>
  requestTmdb("/search/movie", `&query=${encodeURIComponent(query)}`);
