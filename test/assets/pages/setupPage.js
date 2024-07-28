export function setupPage(title, sub, contentHtml,id) {
  location.href = "#"
  const container = document.querySelector(".page-content");
  const breadcrumbTitle = document.querySelectorAll("#breadcrumbTitle");
  const breadcrumbSub = document.querySelector("#breadcrumbSub");
  const activeElements = document.querySelectorAll(".active");
  activeElements.forEach((e) => {
    e.classList.remove("active");
  });

  breadcrumbTitle.forEach((e) => {
    e.textContent = title;
  });

  document.title = `${title} ${sub}`;
  breadcrumbSub.textContent = sub;
  container.innerHTML = contentHtml;

  sessionStorage.setItem('currentPage', id)
  document.querySelector(`#${id}`).classList.add("active");
  document.querySelector(`#${id}`).parentElement.classList.add("active");
  document.querySelector(`#${id}`).parentElement.parentElement.classList.add("active");
}
