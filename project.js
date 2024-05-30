const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url")
const clear = document.getElementById("clear-films");


eventListeners();

function eventListeners() {
  form.addEventListener("submit",addFilm);
  document.addEventListener("click",deleteFilm);
  clear.addEventListener("click",clearAllFilms);
};

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        UI.displayMesaages("Please fill in all inputs...","danger");
    }
    else{
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        UI.displayMesaages("Successful...","success");
        Storage.addFilmToStorage(newFilm);
    }
    UI.clearInputs(titleElement,directorElement,urlElement);
    


    e.preventDefault();
};
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        UI.displayMesaages("Successfully deleted...","success");
}};
function clearAllFilms() {
    if (confirm("Are you sure?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
    
}