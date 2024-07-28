function figuresPage() {
  const container = document.querySelector(".page-content");
  const breadcrumbTitle = document.querySelectorAll("#breadcrumbTitle");
  const breadcrumbSub = document.querySelector("#breadcrumbSub");
  const title = "Content";
  const sub = "Figures";

  breadcrumbTitle.forEach((e) => {
    e.textContent = `${title}`;
  });

  document.title = `${title} ${sub}`; 
  breadcrumbSub.textContent = `${sub}`;
  container.innerHTML = `
  <div class="card-body px-5 fs-5">

  </div>
    `;
}

function mainPage() {
  const container = document.querySelector(".page-content");
  const breadcrumbTitle = document.querySelectorAll("#breadcrumbTitle");
  const breadcrumbSub = document.querySelector("#breadcrumbSub");
  const title = "Main";
  const sub = "Page";

  breadcrumbTitle.forEach((e) => {
    e.textContent = `${title}`;
  });

  document.title = `${title} ${sub}`; 
  breadcrumbSub.textContent = `${sub}`;
  container.innerHTML = `
  <div class="card-body px-5 fs-5">
    <div class="card-content"></div>
  </div>
    `;
}

