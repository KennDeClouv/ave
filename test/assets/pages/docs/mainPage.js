import { setupPage } from "../setupPage.js";

export function mainPage() {
  const title = "Welcome";
  const sub = "";
  const id = "toMainPage";
  const content = `
    <div class="card">
        <div class="card-content">

        </div>
    </div>
      `;
  setupPage(title, sub, content, id);
}
