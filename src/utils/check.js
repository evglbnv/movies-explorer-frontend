function findCurrentUserMovies(movies, currentUserId) {
    let currentUserMovies = [];

    movies.forEach((movie) => {
        if (movie.owner._id === currentUserId) {
            currentUserMovies.push(movie);
        }
    })

    return currentUserMovies;
}


function handleLike(movie) {
    mainApi.saveMovie(movie)
        .then(() => {
            mainApi.getSavedMovies()
                .then((res) => {
                    const curentUsersMovies = findCurrentUserMovies(res.data, currentUser._id);
                    setSavedMovies(curentUsersMovies);
                    setFilteredSavedMovies(curentUsersMovies);
                })
                .catch((err) => {
                    console.log(err);
                    showErrorPopup();
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

function handleLikedMovies(currentMovieId) {

    let isLiked = false;
    savedMovies.forEach((movie) => {
        if (movie.movieId === currentMovieId) {
            isLiked = true;
        }
    })

    return isLiked;
}