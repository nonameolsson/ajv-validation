import { getPersons, loadData } from "./getData";
import "./style.css";

loadData();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="getData" type="button">Get data</button>
    </div>
    <ul id="response" />
  </div>
`;

getPersons(
  document.querySelector<HTMLElement>("#getData"),
  document.querySelector<HTMLElement>("#response")
);
