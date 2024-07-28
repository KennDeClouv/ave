const title = document.title;
const home = title === "Main Page" ? "#" : "../";
const docs = title.includes("Docs") ? "" : "../docs/";
const demo = title === "Main Page" ? "demo/" : title.includes("Docs") ? "../demo/" : "";
const sidebar = document.querySelector("#sidebar");

sidebar.innerHTML = `
  <div class="sidebar-wrapper active">
    <div class="sidebar-header position-relative">
      <div class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="${home}">AVEE</a>
        </div>
        <div class="theme-toggle d-flex gap-2 align-items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--system-uicons" width="20" height="20" preserveaspectratio="xMidYMid meet" viewbox="0 0 21 21">
            <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></path>
              <g transform="translate(-210 -1)">
                <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                <circle cx="220.5" cy="11.5" r="4"></circle>
                <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
              </g>
            </g>
          </svg>
          <div class="form-check form-switch fs-6">
            <input class="form-check-input me-0" type="checkbox" id="toggle-dark" style="cursor: pointer" />
            <label class="form-check-label"></label>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" preserveaspectratio="xMidYMid meet" viewbox="0 0 24 24">
            <path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"></path>
          </svg>
        </div>
        <div class="sidebar-toggler x">
          <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
        </div>
      </div>
    </div>

    <div class="sidebar-menu">
      <ul class="menu">
        <li class="sidebar-title">Menu</li>
        <li class="sidebar-item" id="Main Page">
          <a href="${home}" class="sidebar-link">
            <i class="bi bi-tv-fill"></i>
            <span>Main Page</span>
          </a>
        </li>
        <li class="sidebar-item" id="Docs Dashboard">
          <a href="${docs}dashboard.html" class="sidebar-link">
            <i class="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="sidebar-item has-sub" id="Docs Getting Started">
          <a href="#" class="sidebar-link">
            <i class="bi bi-book-half"></i>
            <span>Getting Started</span>
          </a>
          <ul class="submenu">
            <li class="submenu-item" id="Docs Introduction">
              <a href="${docs}start-introduction.html" class="submenu-link">Introduction</a>
            </li>
            <li class="submenu-item" id="Docs Download">
              <a href="${docs}start-download.html" class="submenu-link">Download</a>
            </li>
          </ul>
        </li>

        <li class="sidebar-title">Docs</li>

        <li class="sidebar-item has-sub" id="Docs Customize">
          <a href="#" class="sidebar-link">
            <i class="bi bi-palette2"></i>
            <span>Customize</span>
          </a>
          <ul class="submenu">
            <li class="submenu-item" id="Docs Color">
              <a href="${docs}custom-color.html" class="submenu-link">Color</a>
            </li>
            <li class="submenu-item" id="Docs Color modes">
              <a href="${docs}custom-color-modes.html" class="submenu-link">Color modes</a>
            </li>
            <li class="submenu-item" id="Docs CSS Variables">
              <a href="${docs}custom-css-variables.html" class="submenu-link">CSS Variables</a>
            </li>
          </ul>
        </li>

        <li class="sidebar-item has-sub" id="Docs Layouts">
          <a href="#" class="sidebar-link">
            <i class="bi bi-grid-fill"></i>
            <span>Layouts</span>
          </a>
          <ul class="submenu">
            <li class="submenu-item" id="Docs Breakpoints">
              <a href="${docs}layout-breakpoints.html" class="submenu-link">Breakpoints</a>
            </li>
            <li class="submenu-item" id="Docs Containers">
              <a href="${docs}layout-containers.html" class="submenu-link">Containers</a>
            </li>
            <li class="submenu-item" id="Docs Grid">
              <a href="${docs}layout-grid.html" class="submenu-link">Grid</a>
            </li>
            <li class="submenu-item" id="Docs Columns">
              <a href="${docs}layout-columns.html" class="submenu-link">Columns</a>
            </li>
            <li class="submenu-item" id="Docs Gutters">
              <a href="${docs}layout-gutters.html" class="submenu-link">Gutters</a>
            </li>
            <li class="submenu-item" id="Docs Layout Utilities">
              <a href="${docs}layout-utilities.html" class="submenu-link">Layout Utilities</a>
            </li>
            <li class="submenu-item" id="Docs Layout Z-index">
              <a href="${docs}layout-z-index.html" class="submenu-link">Layout Z-index</a>
            </li>
            <li class="submenu-item" id="Docs CSS Grid">
              <a href="${docs}layout-css-grid.html" class="submenu-link">CSS Grid</a>
            </li>
          </ul>
        </li>

        <li class="sidebar-item has-sub" id="Docs Utilities">
          <a href="#" class="sidebar-link">
            <i class="bi bi-tools"></i>
            <span>Utilities</span>
          </a>
          <ul class="submenu">
            <li class="submenu-item" id="Docs Background">
              <a href="${docs}utilities-background.html" class="submenu-link">Background</a>
            </li>
            <li class="submenu-item" id="Docs Borders">
              <a href="${docs}utilities-borders.html" class="submenu-link">Borders</a>
            </li>
            <li class="submenu-item" id="Docs Colors">
              <a href="${docs}utilities-colors.html" class="submenu-link">Colors</a>
            </li>
            <li class="submenu-item" id="Docs Display">
              <a href="${docs}utilities-display.html" class="submenu-link">Display</a>
            </li>
            <li class="submenu-item" id="Docs Flex">
              <a href="${docs}utilities-flex.html" class="submenu-link">Flex</a>
            </li>
            <li class="submenu-item" id="Docs Float">
              <a href="${docs}utilities-float.html" class="submenu-link">Float</a>
            </li>
            <li class="submenu-item" id="Docs Interactions">
              <a href="${docs}utilities-interactions.html" class="submenu-link">Interactions</a>
            </li>
            <li class="submenu-item" id="Docs Link">
              <a href="${docs}utilities-link.html" class="submenu-link">Link</a>
            </li>
            <li class="submenu-item" id="Docs Object Fit">
              <a href="${docs}utilities-object-fit.html" class="submenu-link">Object fit</a>
            </li>
            <li class="submenu-item" id="Docs Opacity">
              <a href="${docs}utilities-opacity.html" class="submenu-link">Opacity</a>
            </li>
            <li class="submenu-item" id="Docs Overflow">
              <a href="${docs}utilities-overflow.html" class="submenu-link">Overflow</a>
            </li>
            <li class="submenu-item" id="Docs Position">
              <a href="${docs}utilities-position.html" class="submenu-link">Position</a>
            </li>
            <li class="submenu-item" id="Docs Shadows">
              <a href="${docs}utilities-shadows.html" class="submenu-link">Shadows</a>
            </li>
            <li class="submenu-item" id="Docs Sizing">
              <a href="${docs}utilities-sizing.html" class="submenu-link">Sizing</a>
            </li>
            <li class="submenu-item" id="Docs Spacing">
              <a href="${docs}utilities-spacing.html" class="submenu-link">Spacing</a>
            </li>
            <li class="submenu-item" id="Docs Text">
              <a href="${docs}utilities-text.html" class="submenu-link">Text</a>
            </li>
            <li class="submenu-item" id="Docs Vertical Align">
              <a href="${docs}utilities-vertical-align.html" class="submenu-link">Vertical Align</a>
            </li>
            <li class="submenu-item" id="Docs Visibility">
              <a href="${docs}utilities-visibility.html" class="submenu-link">Visibility</a>
            </li>
            <li class="submenu-item" id="Docs Z-index">
              <a href="${docs}utilities-z-index.html" class="submenu-link">Z-index</a>
            </li>
            <li class="submenu-item" id="Docs Turn">
              <a href="${docs}utilities-turn.html" class="submenu-link">Turn</a>
            </li>
          </ul>
        </li>

        <li class="sidebar-item has-sub" id="Docs Content">
          <a href="#" class="sidebar-link">
            <i class="bi bi-body-text"></i>
            <span>Content</span>
          </a>
          <ul class="submenu">
            <li class="submenu-item" id="Docs Reboot">
              <a href="${docs}content-reboot.html" class="submenu-link">Reboot</a>
            </li>
            <li class="submenu-item" id="Docs Typography">
              <a href="${docs}content-typography.html" class="submenu-link">Typography</a>
            </li>
            <li class="submenu-item" id="Docs Images">
              <a href="${docs}content-images.html" class="submenu-link">Images</a>
            </li>
            <li class="submenu-item" id="Docs Tables">
              <a href="${docs}content-tables.html" class="submenu-link">Tables</a>
            </li>
            <li class="submenu-item" id="Docs Figures">
              <a href="${docs}content-figures.html" class="submenu-link">Figures</a>
            </li>
          </ul>
        </li>
        

        <li class="sidebar-title">Demonstration</li>
        <li class="sidebar-item has-sub" id="Layouting">
          <a href="#" class="sidebar-link">
            <i class="bi bi-grid-1x2-fill"></i>
            <span>Layouting</span>
          </a>
          <ul class="submenu" id="Layouting">
            <li class="submenu-item" id="Default Layout">
              <a href="${demo}layout-default.html" class="submenu-link">Default Layout</a>
            </li>
            <li class="submenu-item" id="1 Column">
              <a href="${demo}layout-vertical-1-column.html" class="submenu-link">1 Column</a>
            </li>
            <li class="submenu-item" id="Vertical Navbar">
              <a href="${demo}layout-vertical-navbar.html" class="submenu-link">Vertical Navbar</a>
            </li>
            <li class="submenu-item" id="RTL Layout">
              <a href="${demo}layout-rtl.html" class="submenu-link">RTL Layout</a>
            </li>
            <li class="submenu-item" id="Horizontal Menu">
              <a href="${demo}layout-horizontal.html" class="submenu-link">Horizontal Menu</a>
            </li>
          </ul>
        </li>
        <li class="sidebar-item has-sub" id="Components">
          <a href="#" class="sidebar-link">
            <i class="bi bi-stack"></i>
            <span>Components</span>
          </a>
          <ul class="submenu" id="Components">
            <li class="submenu-item" id="Accordion">
              <a href="${demo}component-accordion.html" class="submenu-link">Accordion</a>
            </li>
            <li class="submenu-item" id="Alert">
              <a href="${demo}component-alert.html" class="submenu-link">Alert</a>
            </li>
            <li class="submenu-item" id="Badge">
              <a href="${demo}component-badge.html" class="submenu-link">Badge</a>
            </li>
            <li class="submenu-item" id="Breadcrumb">
              <a href="${demo}component-breadcrumb.html" class="submenu-link">Breadcrumb</a>
            </li>
            <li class="submenu-item" id="Button">
              <a href="${demo}component-button.html" class="submenu-link">Button</a>
            </li>
            <li class="submenu-item" id="Card">
              <a href="${demo}component-card.html" class="submenu-link">Card</a>
            </li>
            <li class="submenu-item" id="Carousel">
              <a href="${demo}component-carousel.html" class="submenu-link">Carousel</a>
            </li>
            <li class="submenu-item" id="Collapse">
              <a href="${demo}component-collapse.html" class="submenu-link">Collapse</a>
            </li>
            <li class="submenu-item" id="Dropdown">
              <a href="${demo}component-dropdown.html" class="submenu-link">Dropdown</a>
            </li>
            <li class="submenu-item" id="List Group">
              <a href="${demo}component-list-group.html" class="submenu-link">List Group</a>
            </li>
            <li class="submenu-item" id="Modal">
              <a href="${demo}component-modal.html" class="submenu-link">Modal</a>
            </li>
            <li class="submenu-item" id="Navs">
              <a href="${demo}component-navs.html" class="submenu-link">Navs</a>
            </li>
            <li class="submenu-item" id="Pagination">
              <a href="${demo}component-pagination.html" class="submenu-link">Pagination</a>
            </li>
            <li class="submenu-item" id="Placeholder">
              <a href="${demo}component-placeholder.html" class="submenu-link">Placeholder</a>
            </li>
            <li class="submenu-item" id="Progress">
              <a href="${demo}component-progress.html" class="submenu-link">Progress</a>
            </li>
            <li class="submenu-item" id="Spinner">
              <a href="${demo}component-spinner.html" class="submenu-link">Spinner</a>
            </li>
            <li class="submenu-item" id="Toasts">
              <a href="${demo}component-toasts.html" class="submenu-link">Toasts</a>
            </li>
            <li class="submenu-item" id="Tooltip">
              <a href="${demo}component-tooltip.html" class="submenu-link">Tooltip</a>
            </li>
          </ul>
        </li>
        <li class="sidebar-item has-sub" id="Extra Components">
          <a href="#" class="sidebar-link">
            <i class="bi bi-collection-fill"></i>
            <span>Extra Components</span>
          </a>
          <ul class="submenu">
            <li class="submenu-item" id="Avatar">
              <a href="${demo}extra-component-avatar.html" class="submenu-link">Avatar</a>
              </li>
              <li class="submenu-item" id="Comment">
                <a href="${demo}extra-component-comment.html" class="submenu-link">Comment</a>
              </li>
              <li class="submenu-item" id="Divider">
                <a href="${demo}extra-component-divider.html" class="submenu-link">Divider</a>
              </li>
              <li class="submenu-item" id="Date Picker">
                <a href="${demo}extra-component-date-picker.html" class="submenu-link">Date Picker</a>
              </li>
              <li class="submenu-item" id="Flag">
                <a href="${demo}extra-component-flag.html" class="submenu-link">Flag</a>
              </li>
              <li class="submenu-item" id="Sweet Alert">
                <a href="${demo}extra-component-sweetalert.html" class="submenu-link">Sweet Alert</a>
              </li>
              <li class="submenu-item" id="Toastify">
                <a href="${demo}extra-component-toastify.html" class="submenu-link">Toastify</a>
              </li>
              <li class="submenu-item" id="Rating">
                <a href="${demo}extra-component-rating.html" class="submenu-link">Rating</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-title">Forms & Tables</li>
          <li class="sidebar-item has-sub" id="Form Elements">
            <a href="#" class="sidebar-link">
              <i class="bi bi-hexagon-fill"></i>
              <span>Form Elements</span>
            </a>
            <ul class="submenu" id="Form Elements">
              <li class="submenu-item" id="Input">
                <a href="${demo}form-element-input.html" class="submenu-link">Input</a>
              </li>
              <li class="submenu-item" id="Input Group">
                <a href="${demo}form-element-input-group.html" class="submenu-link">Input Group</a>
              </li>
              <li class="submenu-item" id="Select">
                <a href="${demo}form-element-select.html" class="submenu-link">Select</a>
              </li>
              <li class="submenu-item" id="Radio">
                <a href="${demo}form-element-radio.html" class="submenu-link">Radio</a>
              </li>
              <li class="submenu-item" id="Checkbox">
                <a href="${demo}form-element-checkbox.html" class="submenu-link">Checkbox</a>
              </li>
              <li class="submenu-item" id="Textarea">
                <a href="${demo}form-element-textarea.html" class="submenu-link">Textarea</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item" id="Form Layout">
            <a href="${demo}form-layout.html" class="sidebar-link">
              <i class="bi bi-file-earmark-medical-fill"></i>
              <span>Form Layout</span>
            </a>
          </li>
          <li class="sidebar-item has-sub" id="Form Validation">
            <a href="#" class="sidebar-link">
              <i class="bi bi-journal-check"></i>
              <span>Form Validation</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Form Validation">
                <a href="${demo}form-validation-parsley.html" class="submenu-link">Parsley</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item has-sub" id="Form Editor">
            <a href="#" class="sidebar-link">
              <i class="bi bi-pen-fill"></i>
              <span>Form Editor</span>
            </a>
            <ul class="submenu" id="Form Editor">
              <li class="submenu-item" id="Quill">
                <a href="${demo}form-editor-quill.html" class="submenu-link">Quill</a>
              </li>
              <li class="submenu-item" id="CKEditor">
                <a href="${demo}form-editor-ckeditor.html" class="submenu-link">CKEditor</a>
              </li>
              <li class="submenu-item" id="Summernote">
                <a href="${demo}form-editor-summernote.html" class="submenu-link">Summernote</a>
              </li>
              <li class="submenu-item" id="TinyMCE">
                <a href="${demo}form-editor-tinymce.html" class="submenu-link">TinyMCE</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item" id="Table">
            <a href="${demo}table.html" class="sidebar-link">
              <i class="bi bi-grid-1x2-fill"></i>
              <span>Table</span>
            </a>
          </li>
          <li class="sidebar-item has-sub" id="Datatables">
            <a href="#" class="sidebar-link">
              <i class="bi bi-file-earmark-spreadsheet-fill"></i>
              <span>Datatables</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Datatable">
                <a href="${demo}table-datatable.html" class="submenu-link">Datatable</a>
              </li>
              <li class="submenu-item" id="Datatable jQuery">
                <a href="${demo}table-datatable-jquery.html" class="submenu-link">Datatable jQuery</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-title">Extra UI</li>
          <li class="sidebar-item has-sub" id="Widgets">
            <a href="#" class="sidebar-link">
              <i class="bi bi-pentagon-fill"></i>
              <span>Widgets</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Chatbox">
                <a href="${demo}ui-widgets-chatbox.html" class="submenu-link">Chatbox</a>
              </li>
              <li class="submenu-item" id="Pricing">
                <a href="${demo}ui-widgets-pricing.html" class="submenu-link">Pricing</a>
              </li>
              <li class="submenu-item" id="To-do List">
                <a href="${demo}ui-widgets-todolist.html" class="submenu-link">To-do List</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item has-sub" id="Icons">
            <a href="#" class="sidebar-link">
              <i class="bi bi-egg-fill"></i>
              <span>Icons</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Avee Icons">
                <a href="${demo}ui-icons-bootstrap-icons.html" class="submenu-link">Avee Icons</a>
              </li>
              <li class="submenu-item" id="Fontawesome">
                <a href="${demo}ui-icons-fontawesome.html" class="submenu-link">Fontawesome</a>
              </li>
              <li class="submenu-item" id="Dripicons">
                <a href="${demo}ui-icons-dripicons.html" class="submenu-link">Dripicons</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item has-sub" id="Charts">
            <a href="#" class="sidebar-link">
              <i class="bi bi-bar-chart-fill"></i>
              <span>Charts</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="ChartJS">
                <a href="${demo}ui-chart-chartjs.html" class="submenu-link">ChartJS</a>
              </li>
              <li class="submenu-item" id="Apexcharts">
                <a href="${demo}ui-chart-apexcharts.html" class="submenu-link">Apexcharts</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item" id="File Uploader">
            <a href="${demo}ui-file-uploader.html" class="sidebar-link">
              <i class="bi bi-cloud-arrow-up-fill"></i>
              <span>File Uploader</span>
            </a>
          </li>
          <li class="sidebar-item has-sub" id="Maps">
            <a href="#" class="sidebar-link">
              <i class="bi bi-map-fill"></i>
              <span>Maps</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Google Map">
                <a href="${demo}ui-map-google-map.html" class="submenu-link">Google Map</a>
              </li>
              <li class="submenu-item" id="JS Vector Map">
                <a href="${demo}ui-map-jsvectormap.html" class="submenu-link">JS Vector Map</a>
              </li>
              <li class="submenu-item" id="Leaflet Map">
                <a href="${demo}ui-map-leaflet.html" class="submenu-link">Leaflet Map</a>
              </li>
              <li class="submenu-item" id="OpenLayers Map">
                <a href="${demo}ui-map-openlayers.html" class="submenu-link">OpenLayers Map</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item has-sub" id="Multi-level Menu">
            <a href="#" class="sidebar-link">
              <i class="bi bi-three-dots"></i>
              <span>Multi-level Menu</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item has-sub" id="First Level">
                <a href="#" class="submenu-link">First Level</a>
                <ul class="submenu submenu-level-2">
                  <li class="submenu-item" id="Second Level">
                    <a href="${demo}ui-multi-level-menu.html" class="submenu-link">Second Level</a>
                  </li>
                  <li class="submenu-item" id="Second Level Menu">
                    <a href="#" class="submenu-link">Second Level Menu</a>
                  </li>
                </ul>
              </li>
              <li class="submenu-item has-sub" id="Another Menu">
                <a href="#" class="submenu-link">Another Menu</a>
                <ul class="submenu submenu-level-2">
                  <li class="submenu-item" id="Second Level Menu">
                    <a href="#" class="submenu-link">Second Level Menu</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="sidebar-title">Pages</li>
          <li class="sidebar-item" id="Email Application">
            <a href="${demo}application-email.html" class="sidebar-link">
              <i class="bi bi-envelope-fill"></i>
              <span>Email Application</span>
            </a>
          </li>
          <li class="sidebar-item" id="Chat Application">
            <a href="${demo}application-chat.html" class="sidebar-link">
              <i class="bi bi-chat-dots-fill"></i>
              <span>Chat Application</span>
            </a>
          </li>
          <li class="sidebar-item" id="Photo Gallery">
            <a href="${demo}application-gallery.html" class="sidebar-link">
              <i class="bi bi-image-fill"></i>
              <span>Photo Gallery</span>
            </a>
          </li>
          <li class="sidebar-item" id="Checkout Page">
            <a href="${demo}application-checkout.html" class="sidebar-link">
              <i class="bi bi-basket-fill"></i>
              <span>Checkout Page</span>
            </a>
          </li>
          <li class="sidebar-item has-sub" id="Account">
            <a href="#" class="sidebar-link">
              <i class="bi bi-person-circle"></i>
              <span>Account</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Profile">
                <a href="${demo}account-profile.html" class="submenu-link">Profile</a>
              </li>
              <li class="submenu-item" id="Security">
                <a href="${demo}account-security.html" class="submenu-link">Security</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item has-sub" id="Authentication">
            <a href="#" class="sidebar-link">
              <i class="bi bi-person-badge-fill"></i>
              <span>Authentication</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="Login">
                <a href="${demo}auth-login.html" class="submenu-link">Login</a>
              </li>
              <li class="submenu-item" id="Register">
                <a href="${demo}auth-register.html" class="submenu-link">Register</a>
              </li>
              <li class="submenu-item" id="Forgot Password">
                <a href="${demo}auth-forgot-password.html" class="submenu-link">Forgot Password</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item has-sub" id="Errors">
            <a href="#" class="sidebar-link">
              <i class="bi bi-x-octagon-fill"></i>
              <span>Errors</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="403">
                <a href="${demo}error-403.html" class="submenu-link">403</a>
              </li>
              <li class="submenu-item" id="404">
                <a href="${demo}error-404.html" class="submenu-link">404</a>
              </li>
              <li class="submenu-item" id="500">
                <a href="${demo}error-500.html" class="submenu-link">500</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-title">Raise Support</li>
          <li class="sidebar-item" id="Documentation">
            <a href="../docs" class="sidebar-link">
              <i class="bi bi-life-preserver"></i>
              <span>Documentation</span>
            </a>
          </li>
          <li class="sidebar-item" id="Contribute">
            <a href="https://github.com/zulldevv/ave/blob/main/CONTRIBUTING.md" class="sidebar-link">
              <i class="bi bi-puzzle"></i>
              <span>Contribute</span>
            </a>
          </li>
          <li class="sidebar-item" id="Donate">
            <a href="https://github.com/zulldevv/ave#donation" class="sidebar-link">
              <i class="bi bi-cash"></i>
              <span>Donate</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `;
