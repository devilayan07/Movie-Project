function getImageUrl(name){
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href


}

// URl object returns base url and file url 

export {getImageUrl}