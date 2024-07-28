document.addEventListener("DOMContentLoaded", function () {
  const linkCategories = {
    Components: [
      "Accordion",
      "Alert",
      "Badge",
      "Breadcrumb",
      "Button",
      "Card",
      "Carousel",
      "Collapse",
      "Dropdown",
      "List Group",
      "Modal",
      "Navs",
      "Pagination",
      "Placeholder",
      "Progress",
      "Spinner",
      "Toasts",
      "Tooltip",
    ],
    "Extra Components": [
      "Avatar",
      "Comment",
      "Divider",
      "Date Picker",
      "Flag",
      "Sweet Alert",
      "Toastify",
      "Rating",
    ],
    Layouting: [
      "Default Layout",
      "1 Column",
      "Vertical Navbar",
      "RTL Layout",
      "Horizontal Menu",
    ],
    "Form Elements": [
      "Input",
      "Input Group",
      "Select",
      "Radio",
      "Checkbox",
      "Textarea",
    ],
    "Form Editor": ["Quill", "CKEditor", "Summernote", "TinyMCE"],
    Datatables: ["Datatable", "Datatable jQuery"],
    Widgets: ["Chatbox", "Pricing", "To-do List"],
    Icons: ["Avee Icons", "Fontawesome", "Dripicons"],
    Charts: ["ChartJS", "Apexcharts"],
    Maps: ["Google Map", "JS Vector Map", "Leaflet Map", "OpenLayers Map"],
    Account: ["Profile", "Security"],
    "Docs Getting Started": ["Docs Introduction", "Docs Download"],
    // docs
    "Docs Layouts": [
      "Docs Breakpoints",
      "Docs Containers",
      "Docs Grid",
      "Docs Columns",
      "Docs Gutters",
      "Docs Layout Utilities",
      "Docs Layout Z-index",
      "Docs CSS Grid",
    ],
    "Docs Utilities": [
      "Docs Background",
      "Docs Borders",
      "Docs Colors",
      "Docs Display",
      "Docs Flex",
      "Docs Float",
      "Docs Interactions",
      "Docs Link",
      "Docs Object Fit",
      "Docs Opacity",
      "Docs Overflow",
      "Docs Position",
      "Docs Shadows",
      "Docs Sizing",
      "Docs Spacing",
      "Docs Text",
      "Docs Vertical Align",
      "Docs Visibility",
      "Docs Z-index",
      "Docs Turn",
    ],
    "Docs Content": [
      "Docs Reboot",
      "Docs Typography",
      "Docs Images",
      "Docs Tables",
      "Docs Figures",
    ],
    "Docs Customize": ["Docs Color", "Docs Color modes", "Docs CSS Variables"],
  };

  // Get the HTML title
  const pageTitle = document.title;

  // Find the element with the ID that matches the title
  const element = document.getElementById(pageTitle);

  // If such an element exists, add the 'active' class to it
  if (element) {
    element.classList.add("active");
  }

  // Check each category to see if the pageTitle is included
  for (const [category, links] of Object.entries(linkCategories)) {
    if (links.includes(pageTitle)) {
      document.getElementById(category).classList.add("active");
      break;
    }
  }
});
