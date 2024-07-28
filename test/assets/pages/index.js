import {
  startDownloadPage,
  startIntroPage,
  mainPage,
  dashboardPage,
  customColorPage,
  customColorModesPage,
  customCSSVariablesPage,
  layoutBreakpointsPage,
  // layoutContainersPage,
  // layoutGridPage,
  // layoutColumnsPage,
  // layoutGuttersPage,
  // layoutUtilitiesPage,
  // layoutZIndexPage,
  // layoutCSSGridPage,
} from "./pages.js";

// Function to add event listeners
function addClickListener(selector, handler) {
  document.querySelectorAll(selector).forEach((e) => {
    e.addEventListener("click", handler);
  });
}

// Add event listeners
const pageHandlers = {
  "#toMainPage": mainPage,
  "#toStartDownloadPage": startDownloadPage,
  "#toStartIntroPage": startIntroPage,
  "#toDashboardPage": dashboardPage,
  "#toCustomColorPage": customColorPage,
  "#toCustomColorModesPage": customColorModesPage,
  "#toCustomCSSVariablesPage": customCSSVariablesPage,
  // layout pages
  "#toLayoutBreakpointsPage": layoutBreakpointsPage,
  // "#toLayoutContainersPage": layoutContainersPage,
  // "#toLayoutGridPage": layoutGridPage,
  // "#toLayoutColumnsPage": layoutColumnsPage,
  // "#toLayoutGuttersPage": layoutGuttersPage,
  // "#toLayoutUtilitiesPage": layoutUtilitiesPage,
  // "#toLayoutZIndexPage": layoutZIndexPage,
  // "#toLayoutCSSGridPage": layoutCSSGridPage,
};

Object.keys(pageHandlers).forEach((selector) => {
  addClickListener(selector, pageHandlers[selector]);
});

// Check the saved page and load it if necessary
const savedPage = sessionStorage.getItem("currentPage");

if (savedPage && pageHandlers[`#${savedPage}`]) {
  pageHandlers[`#${savedPage}`]();
}