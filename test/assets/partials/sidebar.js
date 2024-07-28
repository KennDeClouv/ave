sidebar.innerHTML = `
  <div class="sidebar-wrapper active">
    <div class="sidebar-header position-relative">
      <div class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="javascript:void(0)" id="toMainPage">AVEE</a>
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

        <li class="sidebar-item">
          <a href="javascript:void(0)" class="sidebar-link">
            <i class="bi bi-tv-fill"></i>
            <span>Main Page</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a href="javascript:void(0)" class="sidebar-link" id="toDashboardPage">
            <i class="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li class="sidebar-item has-sub">
          <a href="javascript:void(0)" class="sidebar-link">
            <i class="bi bi-book-half"></i>
            <span>Getting Started</span>
          </a>

          <ul class="submenu">
            <li class="submenu-item" id="toStartIntroPage">
              <a href="javascript:void(0)"  class="submenu-link">Introduction</a>
            </li>
            <li class="submenu-item" id="toStartDownloadPage">
              <a href="javascript:void(0)" class="submenu-link">Download</a>
            </li>
          </ul>
        </li>

        <li class="sidebar-title">Docs</li>

          <li class="sidebar-item has-sub">
            <a href="javascript:void(0)" class="sidebar-link">
              <i class="bi bi-palette2"></i>
              <span>Customize</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="toCustomColorPage">
                <a href="javascript:void(0)"  class="submenu-link">Color</a>
              </li>
              <li class="submenu-item" id="toCustomColorModesPage">
                <a href="javascript:void(0)" class="submenu-link">Color modes</a>
              </li>
              <li class="submenu-item" id="toCustomCSSVariablesPage">
                <a href="javascript:void(0)" class="submenu-link">CSS Variables</a>
              </li>
            </ul>
          </li>

          <li class="sidebar-item has-sub">
            <a href="javascript:void(0)" class="sidebar-link">
              <i class="bi bi-grid"></i>
              <span>Layouts</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="toLayoutBreakpointsPage">
                <a href="javascript:void(0)"  class="submenu-link">Breakpoints</a>
              </li>
              <li class="submenu-item" id="toLayoutContainersPage">
              <a href="javascript:void(0)" class="submenu-link">Containers</a>
              </li>
              <li class="submenu-item" id="toLayoutGridPage">
                <a href="javascript:void(0)" class="submenu-link">Grid</a>
              </li>
              <li class="submenu-item" id="toLayoutColumnsPage">
                <a href="javascript:void(0)" class="submenu-link">Columns</a>
              </li>
              <li class="submenu-item" id="toLayoutGuttersPage">
                <a href="javascript:void(0)" class="submenu-link">Gutters</a>
              </li>
              <li class="submenu-item" id="toLayoutUtilitiesPage">
                <a href="javascript:void(0)" class="submenu-link">Layout Utilities</a>
              </li>
              <li class="submenu-item" id="toLayoutZIndexPage">
                <a href="javascript:void(0)" class="submenu-link">Layout Z-index</a>
              </li>
              <li class="submenu-item" id="toLayoutCSSGridPage">
                <a href="javascript:void(0)" class="submenu-link">CSS Grid</a>
              </li>
            </ul>
          </li>

          <li class="sidebar-item has-sub">
            <a href="javascript:void(0)" class="sidebar-link">
              <i class="bi bi-tools"></i>
              <span>Utilities</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="toUtilitiesBackgroundPage">
                <a href="javascript:void(0)"  class="submenu-link">Background</a>
              </li>
              <li class="submenu-item" id="toUtilitiesBordersPage">
                <a href="javascript:void(0)" class="submenu-link">Borders</a>
              </li>
              <li class="submenu-item" id="toUtilitiesColorsPage">
                <a href="javascript:void(0)" class="submenu-link">Colors</a>
              </li>
              <li class="submenu-item" id="toUtilitiesDisplayPage">
                <a href="javascript:void(0)" class="submenu-link">Display</a>
              </li>
              <li class="submenu-item" id="toUtilitiesFlexPage">
                <a href="javascript:void(0)" class="submenu-link">Flex</a>
              </li>
              <li class="submenu-item" id="toUtilitiesFloatPage">
                <a href="javascript:void(0)" class="submenu-link">Float</a>
              </li>
              <li class="submenu-item" id="toUtilitiesInteractionsPage">
                <a href="javascript:void(0)" class="submenu-link">Interactions</a>
              </li>
              <li class="submenu-item" id="toUtilitiesLinkPage">
                <a href="javascript:void(0)" class="submenu-link">Link</a>
              </li>
              <li class="submenu-item" id="toUtilitiesObjectFitPage">
                <a href="javascript:void(0)" class="submenu-link">Object fit</a>
              </li>
              <li class="submenu-item" id="toUtilitiesOpacityPage">
                <a href="javascript:void(0)" class="submenu-link">Opacity</a>
              </li>
              <li class="submenu-item" id="toUtilitiesOverflowPage">
                <a href="javascript:void(0)" class="submenu-link">Overflow</a>
              </li>
              <li class="submenu-item" id="toUtilitiesPositionPage">
                <a href="javascript:void(0)" class="submenu-link">Position</a>
              </li>
              <li class="submenu-item" id="toUtilitiesShadowsPage">
                <a href="javascript:void(0)" class="submenu-link">Shadows</a>
              </li>
              <li class="submenu-item" id="toUtilitiesSizingPage">
                <a href="javascript:void(0)" class="submenu-link">Sizing</a>
              </li>
              <li class="submenu-item" id="toUtilitiesSpacingPage">
                <a href="javascript:void(0)" class="submenu-link">Spacing</a>
              </li>
              <li class="submenu-item" id="toUtilitiesTextPage">
                <a href="javascript:void(0)" class="submenu-link">Text</a>
              </li>
              <li class="submenu-item" id="toUtilitiesVerticalAlignPage">
                <a href="javascript:void(0)" class="submenu-link">Vertical Align</a>
              </li>
              <li class="submenu-item" id="toUtilitiesVisibilityPage">
                <a href="javascript:void(0)" class="submenu-link">Visibility</a>
              </li>
              <li class="submenu-item" id="toUtilitiesZIndexPage">
                <a href="javascript:void(0)" class="submenu-link">Z-index</a>
              </li>
              <li class="submenu-item" id="toUtilitiesTurnPage">
                <a href="javascript:void(0)" class="submenu-link">Turn</a>
              </li>
            </ul>
          </li>

          <li class="sidebar-item has-sub">
            <a href="javascript:void(0)" class="sidebar-link">
              <i class="bi bi-body-text"></i>
              <span>Content</span>
            </a>
            <ul class="submenu">
              <li class="submenu-item" id="toContentRebootPage">
                <a href="javascript:void(0)"  class="submenu-link">Reboot</a>
              </li>
              <li class="submenu-item" id="toContentTypographyPage">
                <a href="javascript:void(0)" class="submenu-link">Typography</a>
              </li>
              <li class="submenu-item" id="toContentImagesPage">
                <a href="javascript:void(0)" class="submenu-link">Images</a>
              </li>
              <li class="submenu-item" id="toContentTablesPage">
                <a href="javascript:void(0)" class="submenu-link">Tables</a>
              </li>
              <li class="submenu-item" id="toContentFiguresPage">
                <a href="javascript:void(0)" class="submenu-link">Figures</a>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  `;

