export class catalogDetails {

    constructor(
        private id ="",
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
    getId(){
        return this.getId;
    }
   
}