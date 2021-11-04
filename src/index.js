import Forms from "./componets/Forms";
import List from "./componets/List";
import api from "./services/api.services";

// To select the root div from index.html
const root = document.querySelector("#root");

api.index().then((products) => {
  root.innerHTML = products.map((product) => `<p>${product.name}</p>`).join("");
});

api.indx().then((products) => {
  root.innerHTML = `
  <main class="container mx-auto flex flex-col items-center">
    ${Forms}
    ${List(products)}
  </main>
`;
});

// Create a txt on the html.
// root.innerHTML =
//   <main class="container mx-auto flex flex-col items-center">
//     ${Forms}
//     ${List(products)}
//   </main>
// `;
