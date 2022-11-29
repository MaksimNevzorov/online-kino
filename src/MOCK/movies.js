const generateMovies = (qty) => {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        title: `Movie ${index}`,
        rating: Math.ceil(Math.random(index) * 5),
        poster: `../../images/movie${index}.jpg`,
        coments: [
            {
                title: 'Coment 1',
                coment: 'Loren ipsun'
            }
        ]
    }))
}

export const MOVIES = generateMovies(18);
