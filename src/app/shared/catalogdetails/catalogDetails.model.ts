export class catalogDetails {
    /*
adult
: 
false
backdrop_path
: 
"/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg"
genre_ids
: 
(3) [28, 878, 27]
id
: 
615656
original_language
: 
"en"
original_title
: 
"Meg 2: The Trench"
overview
: 
"An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
popularity
: 
8763.998
poster_path
: 
"/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
release_date
: 
"2023-08-02"
title
: 
"Meg 2: The Trench"
video
: 
false
vote_average
: 
7.1
vote_count
: 
1314
    */
    constructor(
        private language = "English",
        private  title = "",
        private  vote_average = "",
        private  vote_count = "",
        private  overview = "",
        private  imageUrl = "",
        private release_date =""
    ) { }


    getLanguage() {
        return this.language;
    }
    getTitle() {
        return this.title;
    }
    getVoteAvergare() {
        return this.vote_average;
    }
    getVoteCount() {
        return this.vote_count;
    }
    getOverview() {
        return this.overview;
    }
    getImageURL() {
        return this.imageUrl;
    }
    getDate() {
        return this.release_date;
    }
   
}