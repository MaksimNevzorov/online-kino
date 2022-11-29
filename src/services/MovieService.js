import { MOVIES } from "../MOCK/movies";

class MovieService {

    getAllMovies() {
        return Promise.resolve({ data: MOVIES})
    }
}

export const moviesService = new MovieService();