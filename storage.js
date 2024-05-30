class Storage{
    static addFilmToStorage(newFilm) {
        let films = this.getFilmToStorage();
    
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    };
    
    static getFilmToStorage(){
        let films;
    
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films;
    };
    static clearAllFilmsFromStorage() {
        
        localStorage.removeItem("films");
    
    };

}

