import api from "./services/api.services";

// To select the root div from index.html
const root = document.querySelector("#root");

api.index().then((data) => {
  console.log(data);
});

// Create a txt on the html.
root.innerHTML = `<p class= "text-center">Hello World!</p>`;
