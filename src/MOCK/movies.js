const generateMovies = (qty) => {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        title: `Movie ${index}`,
        rating: Math.ceil(Math.random(index) * 5),
        poster: `movie${index + 1}.jpg`,
        coments: [
            {
                title: 'Coment 1',
                coment: 'Loren ipsun'
            }
        ]
    }))
}

export const MOVIES = generateMovies(18);
