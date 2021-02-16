let addMoiveButton = document.getElementById('add-movie-button');
let moviesForm = document.getElementById('movies-form');
addMoiveButton.onclick = function (){
    moviesForm.style.display = "block";
}
let cancelButton = document.getElementById('cancel-button');
cancelButton.onclick = function(){
    moviesForm.style.display = "none";
}