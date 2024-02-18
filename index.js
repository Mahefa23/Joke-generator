//https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");
const more = document.getElementById("more");

function getJoke(){

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res2) => {
        const data = res2.data.content;
        console.log(res2)
        header.textContent = data.text_head;
        content.textContent = data.text !== "" ? data.text : data.text_hidden; 
    });
}
getJoke();

more.addEventListener("click", getJoke);
