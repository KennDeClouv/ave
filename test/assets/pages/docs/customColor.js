import { setupPage } from "../setupPage.js";

export function customColorPage() {
  const title = "Customize";
  const sub = "Color"
  const id = "toCustomColorPage"
  const content = `
  <div class="card">
  <div class="card-body">
    <div class="bd-content ps-lg-2 fs-5">
      <h2 id="colors">
        Colors
        <a
          class="anchor-link"
          href="#colors"
          aria-label="Link to this section: Colors"
        ></a>
      </h2>
      <small
        class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"
        >Added in v1.0.0</small
      >

      <p>
        Avee’s color palette has continued to expand and become
        more nuanced in v1.0.0. We’ve added new variables for
        <code>secondary</code> and <code>tertiary</code> text and
        background colors, plus <code>{color}-bg-subtle</code>,
        <code>{color}-border-subtle</code>, and
        <code>{color}-text-emphasis</code> for our theme colors.
        These new colors are available through Sass and CSS
        variables (but not our color maps or utility classes) with
        the express goal of making it easier to customize across
        multiple colors modes like light and dark. These new
        variables are globally set on <code>:root</code> and are
        adapted for our new dark color mode while our original theme
        colors remain unchanged.
      </p>
      <p>
        Colors ending in <code>-rgb</code> provide the
        <code>red, green, blue</code> values for use in
        <code>rgb()</code> and <code>rgba()</code> color modes. For
        example, <code>rgba(var(--bs-secondary-bg-rgb), .5)</code>.
      </p>
      <div class="bd-callout bd-callout-warning">
        <strong>Heads up!</strong> There’s some potential confusion
        with our new secondary and tertiary colors, and our existing
        secondary theme color, as well as our light and dark theme
        colors. Expect this to be ironed out in v6.
      </div>

      <div class="table-responsive">
        <table class="table table-swatches">
          <thead>
            <tr>
              <th style="width: 340px">Description</th>
              <th style="width: 200px" class="ps-0">Swatch</th>
              <th>Variables</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">
                <strong>Body —</strong> Default foreground (color)
                and background, including components.
              </td>
              <td class="ps-0">
                <div
                  class="p-3 rounded-2"
                  style="background-color: var(--bs-body-color)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-body-color</code><br /><code
                  >--bs-body-color-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2 border"
                  style="background-color: var(--bs-body-bg)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-body-bg</code><br /><code
                  >--bs-body-bg-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <strong>Secondary —</strong> Use the
                <code>color</code> option for lighter text. Use the
                <code>bg</code> option for dividers and to indicate
                disabled component states.
              </td>
              <td class="ps-0">
                <div
                  class="p-3 rounded-2"
                  style="
                    background-color: var(--bs-secondary-color);
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-secondary-color</code><br /><code
                  >--bs-secondary-color-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2 border"
                  style="background-color: var(--bs-secondary-bg)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-secondary-bg</code><br /><code
                  >--bs-secondary-bg-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <strong>Tertiary —</strong> Use the
                <code>color</code> option for even lighter text. Use
                the <code>bg</code> option to style backgrounds for
                hover states, accents, and wells.
              </td>
              <td class="ps-0">
                <div
                  class="p-3 rounded-2"
                  style="background-color: var(--bs-tertiary-color)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-tertiary-color</code><br /><code
                  >--bs-tertiary-color-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2 border"
                  style="background-color: var(--bs-tertiary-bg)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-tertiary-bg</code><br /><code
                  >--bs-tertiary-bg-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <strong>Emphasis —</strong> For higher contrast
                text. Not applicable for backgrounds.
              </td>
              <td class="ps-0">
                <div
                  class="p-3 rounded-2"
                  style="background-color: var(--bs-emphasis-color)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-emphasis-color</code><br /><code
                  >--bs-emphasis-color-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <strong>Border —</strong> For component borders,
                dividers, and rules. Use
                <code>--bs-border-color-translucent</code> to blend
                with backgrounds with an <code>rgba()</code> value.
              </td>
              <td class="ps-0">
                <div
                  class="p-3 rounded-2"
                  style="background-color: var(--bs-border-color)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-border-color</code><br /><code
                  >--bs-border-color-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Primary —</strong> Main theme color, used
                for hyperlinks, focus styles, and component and form
                active states.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-primary">&nbsp;</div>
              </td>
              <td>
                <code>--bs-primary</code><br /><code
                  >--bs-primary-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    background-color: var(--bs-primary-bg-subtle);
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-primary-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-primary-border-subtle)
                      solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-primary-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-primary-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-primary-text-emphasis</code>
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Success —</strong> Theme color used for
                positive or successful actions and information.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-success">&nbsp;</div>
              </td>
              <td>
                <code>--bs-success</code><br /><code
                  >--bs-success-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    background-color: var(--bs-success-bg-subtle);
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-success-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-success-border-subtle)
                      solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-success-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-success-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-success-text-emphasis</code>
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Danger —</strong> Theme color used for
                errors and dangerous actions.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-danger">&nbsp;</div>
              </td>
              <td>
                <code>--bs-danger</code><br /><code
                  >--bs-danger-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    background-color: var(--bs-danger-bg-subtle);
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-danger-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-danger-border-subtle) solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-danger-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-danger-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-danger-text-emphasis</code>
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Warning —</strong> Theme color used for
                non-destructive warning messages.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-warning">&nbsp;</div>
              </td>
              <td>
                <code>--bs-warning</code><br /><code
                  >--bs-warning-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    background-color: var(--bs-warning-bg-subtle);
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-warning-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-warning-border-subtle)
                      solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-warning-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-warning-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-warning-text-emphasis</code>
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Info —</strong> Theme color used for neutral
                and informative content.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-info">&nbsp;</div>
              </td>
              <td>
                <code>--bs-info</code><br /><code
                  >--bs-info-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="background-color: var(--bs-info-bg-subtle)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-info-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-info-border-subtle) solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-info-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-info-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-info-text-emphasis</code>
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Light —</strong> Additional theme option for
                less contrasting colors.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-light">&nbsp;</div>
              </td>
              <td>
                <code>--bs-light</code><br /><code
                  >--bs-light-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    background-color: var(--bs-light-bg-subtle);
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-light-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-light-border-subtle) solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-light-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-light-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-light-text-emphasis</code>
              </td>
            </tr>
            <tr>
              <td rowspan="4">
                <strong>Dark —</strong> Additional theme option for
                higher contrasting colors.
              </td>
              <td class="ps-0">
                <div class="p-3 rounded-2 bg-dark">&nbsp;</div>
              </td>
              <td>
                <code>--bs-dark</code><br /><code
                  >--bs-dark-rgb</code
                >
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="background-color: var(--bs-dark-bg-subtle)"
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-dark-bg-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="p-3 rounded-2"
                  style="
                    border: 5px var(--bs-dark-border-subtle) solid;
                  "
                >
                  &nbsp;
                </div>
              </td>
              <td>
                <code>--bs-dark-border-subtle</code>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="py-3 fw-bold h5"
                  style="color: var(--bs-dark-text-emphasis)"
                >
                  Text
                </div>
              </td>
              <td>
                <code>--bs-dark-text-emphasis</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="using-the-new-colors">
        Using the new colors
        <a
          class="anchor-link"
          href="#using-the-new-colors"
          aria-label="Link to this section: Using the new colors"
        ></a>
      </h3>
      <p>
        These new colors are accessible via CSS variables and
        utility classes—like <code>--bs-primary-bg-subtle</code> and
        <code>.bg-primary-subtle</code>—allowing you to compose your
        own CSS rules with the variables, or to quickly apply styles
        via classes. The utilities are built with the color’s
        associated CSS variables, and since we customize those CSS
        variables for dark mode, they are also adaptive to color
        mode by default.
      </p>
      <div class="bd-example-snippet bd-code-snippet">
        <div class="bd-example m-0 border-0">
          <div
            class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"
          >
            Example element with utilities
          </div>
        </div>
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom"
        >
          <small
            class="font-monospace text-body-secondary text-uppercase"
            >html</small
          >
          <div class="d-flex ms-auto">
            <button
              type="button"
              class="btn-edit text-nowrap"
              aria-label="Try it on StackBlitz"
              data-bs-original-title="Try it on StackBlitz"
            >
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#lightning-charge-fill"></use>
              </svg>
            </button>
            <button
              type="button"
              class="btn-clipboard mt-0 me-0"
              aria-label="Copy to clipboard"
              data-bs-original-title="Copy to clipboard"
            >
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#clipboard"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  Example element with utilities
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre>
        </div>
      </div>

      <h3 id="theme-colors">
        Theme colors
        <a
          class="anchor-link"
          href="#theme-colors"
          aria-label="Link to this section: Theme colors"
        ></a>
      </h3>
      <p>
        We use a subset of all colors to create a smaller color
        palette for generating color schemes, also available as Sass
        variables and a Sass map in Avee’s
        <code>scss/_variables.scss</code> file.
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-primary rounded-3">
            Primary
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-secondary rounded-3">
            Secondary
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-success rounded-3">
            Success
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-danger rounded-3">
            Danger
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-warning rounded-3">
            Warning
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-info rounded-3">Info</div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-light rounded-3">Light</div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 text-bg-dark rounded-3">Dark</div>
        </div>
      </div>
      <p>
        All these colors are available as a Sass map,
        <code>$theme-colors</code>.
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_variables.scss"
            >scss/_variables.scss</a
          >
          <div class="d-flex ms-auto">
            <button
              type="button"
              class="btn-clipboard mt-0 me-0"
              aria-label="Copy to clipboard"
              data-bs-original-title="Copy to clipboard"
            >
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#clipboard"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$theme-colors</span><span class="o">:</span> <span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"primary"</span><span class="o">:</span>    <span class="nv">$primary</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"secondary"</span><span class="o">:</span>  <span class="nv">$secondary</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"success"</span><span class="o">:</span>    <span class="nv">$success</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"info"</span><span class="o">:</span>       <span class="nv">$info</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"warning"</span><span class="o">:</span>    <span class="nv">$warning</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"danger"</span><span class="o">:</span>     <span class="nv">$danger</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"light"</span><span class="o">:</span>      <span class="nv">$light</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"dark"</span><span class="o">:</span>       <span class="nv">$dark</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        Check out
        <a href="/docs/5.3/customize/sass/#maps-and-loops"
          >our Sass maps and loops docs</a
        >
        for how to modify these colors.
      </p>
      <h3 id="all-colors">
        All colors
        <a
          class="anchor-link"
          href="#all-colors"
          aria-label="Link to this section: All colors"
        ></a>
      </h3>
      <p>
        All Avee colors are available as Sass variables and a
        Sass map in <code>scss/_variables.scss</code> file. To avoid
        increased file sizes, we don’t create text or background
        color classes for each of these variables. Instead, we
        choose a subset of these colors for a
        <a href="#theme-colors">theme palette</a>.
      </p>
      <p>
        Be sure to monitor contrast ratios as you customize colors.
        As shown below, we’ve added three contrast ratios to each of
        the main colors—one for the swatch’s current colors, one for
        against white, and one for against black.
      </p>
      <div class="row font-monospace">
        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-blue">
            <strong class="d-block">$blue</strong>
            #0d6efd
          </div>

          <div class="p-3 bd-blue-100">$blue-100</div>

          <div class="p-3 bd-blue-200">$blue-200</div>

          <div class="p-3 bd-blue-300">$blue-300</div>

          <div class="p-3 bd-blue-400">$blue-400</div>

          <div class="p-3 bd-blue-500">$blue-500</div>

          <div class="p-3 bd-blue-600">$blue-600</div>

          <div class="p-3 bd-blue-700">$blue-700</div>

          <div class="p-3 bd-blue-800">$blue-800</div>

          <div class="p-3 bd-blue-900">$blue-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-indigo">
            <strong class="d-block">$indigo</strong>
            #6610f2
          </div>

          <div class="p-3 bd-indigo-100">$indigo-100</div>

          <div class="p-3 bd-indigo-200">$indigo-200</div>

          <div class="p-3 bd-indigo-300">$indigo-300</div>

          <div class="p-3 bd-indigo-400">$indigo-400</div>

          <div class="p-3 bd-indigo-500">$indigo-500</div>

          <div class="p-3 bd-indigo-600">$indigo-600</div>

          <div class="p-3 bd-indigo-700">$indigo-700</div>

          <div class="p-3 bd-indigo-800">$indigo-800</div>

          <div class="p-3 bd-indigo-900">$indigo-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-purple">
            <strong class="d-block">$purple</strong>
            #6f42c1
          </div>

          <div class="p-3 bd-purple-100">$purple-100</div>

          <div class="p-3 bd-purple-200">$purple-200</div>

          <div class="p-3 bd-purple-300">$purple-300</div>

          <div class="p-3 bd-purple-400">$purple-400</div>

          <div class="p-3 bd-purple-500">$purple-500</div>

          <div class="p-3 bd-purple-600">$purple-600</div>

          <div class="p-3 bd-purple-700">$purple-700</div>

          <div class="p-3 bd-purple-800">$purple-800</div>

          <div class="p-3 bd-purple-900">$purple-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-pink">
            <strong class="d-block">$pink</strong>
            #d63384
          </div>

          <div class="p-3 bd-pink-100">$pink-100</div>

          <div class="p-3 bd-pink-200">$pink-200</div>

          <div class="p-3 bd-pink-300">$pink-300</div>

          <div class="p-3 bd-pink-400">$pink-400</div>

          <div class="p-3 bd-pink-500">$pink-500</div>

          <div class="p-3 bd-pink-600">$pink-600</div>

          <div class="p-3 bd-pink-700">$pink-700</div>

          <div class="p-3 bd-pink-800">$pink-800</div>

          <div class="p-3 bd-pink-900">$pink-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-red">
            <strong class="d-block">$red</strong>
            #dc3545
          </div>

          <div class="p-3 bd-red-100">$red-100</div>

          <div class="p-3 bd-red-200">$red-200</div>

          <div class="p-3 bd-red-300">$red-300</div>

          <div class="p-3 bd-red-400">$red-400</div>

          <div class="p-3 bd-red-500">$red-500</div>

          <div class="p-3 bd-red-600">$red-600</div>

          <div class="p-3 bd-red-700">$red-700</div>

          <div class="p-3 bd-red-800">$red-800</div>

          <div class="p-3 bd-red-900">$red-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-orange">
            <strong class="d-block">$orange</strong>
            #fd7e14
          </div>

          <div class="p-3 bd-orange-100">$orange-100</div>

          <div class="p-3 bd-orange-200">$orange-200</div>

          <div class="p-3 bd-orange-300">$orange-300</div>

          <div class="p-3 bd-orange-400">$orange-400</div>

          <div class="p-3 bd-orange-500">$orange-500</div>

          <div class="p-3 bd-orange-600">$orange-600</div>

          <div class="p-3 bd-orange-700">$orange-700</div>

          <div class="p-3 bd-orange-800">$orange-800</div>

          <div class="p-3 bd-orange-900">$orange-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-yellow">
            <strong class="d-block">$yellow</strong>
            #ffc107
          </div>

          <div class="p-3 bd-yellow-100">$yellow-100</div>

          <div class="p-3 bd-yellow-200">$yellow-200</div>

          <div class="p-3 bd-yellow-300">$yellow-300</div>

          <div class="p-3 bd-yellow-400">$yellow-400</div>

          <div class="p-3 bd-yellow-500">$yellow-500</div>

          <div class="p-3 bd-yellow-600">$yellow-600</div>

          <div class="p-3 bd-yellow-700">$yellow-700</div>

          <div class="p-3 bd-yellow-800">$yellow-800</div>

          <div class="p-3 bd-yellow-900">$yellow-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-green">
            <strong class="d-block">$green</strong>
            #198754
          </div>

          <div class="p-3 bd-green-100">$green-100</div>

          <div class="p-3 bd-green-200">$green-200</div>

          <div class="p-3 bd-green-300">$green-300</div>

          <div class="p-3 bd-green-400">$green-400</div>

          <div class="p-3 bd-green-500">$green-500</div>

          <div class="p-3 bd-green-600">$green-600</div>

          <div class="p-3 bd-green-700">$green-700</div>

          <div class="p-3 bd-green-800">$green-800</div>

          <div class="p-3 bd-green-900">$green-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-teal">
            <strong class="d-block">$teal</strong>
            #20c997
          </div>

          <div class="p-3 bd-teal-100">$teal-100</div>

          <div class="p-3 bd-teal-200">$teal-200</div>

          <div class="p-3 bd-teal-300">$teal-300</div>

          <div class="p-3 bd-teal-400">$teal-400</div>

          <div class="p-3 bd-teal-500">$teal-500</div>

          <div class="p-3 bd-teal-600">$teal-600</div>

          <div class="p-3 bd-teal-700">$teal-700</div>

          <div class="p-3 bd-teal-800">$teal-800</div>

          <div class="p-3 bd-teal-900">$teal-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-cyan">
            <strong class="d-block">$cyan</strong>
            #0dcaf0
          </div>

          <div class="p-3 bd-cyan-100">$cyan-100</div>

          <div class="p-3 bd-cyan-200">$cyan-200</div>

          <div class="p-3 bd-cyan-300">$cyan-300</div>

          <div class="p-3 bd-cyan-400">$cyan-400</div>

          <div class="p-3 bd-cyan-500">$cyan-500</div>

          <div class="p-3 bd-cyan-600">$cyan-600</div>

          <div class="p-3 bd-cyan-700">$cyan-700</div>

          <div class="p-3 bd-cyan-800">$cyan-800</div>

          <div class="p-3 bd-cyan-900">$cyan-900</div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 position-relative swatch-gray-500">
            <strong class="d-block">$gray-500</strong>
            #adb5bd
          </div>
          <div class="p-3 bd-gray-100">$gray-100</div>

          <div class="p-3 bd-gray-200">$gray-200</div>

          <div class="p-3 bd-gray-300">$gray-300</div>

          <div class="p-3 bd-gray-400">$gray-400</div>

          <div class="p-3 bd-gray-500">$gray-500</div>

          <div class="p-3 bd-gray-600">$gray-600</div>

          <div class="p-3 bd-gray-700">$gray-700</div>

          <div class="p-3 bd-gray-800">$gray-800</div>

          <div class="p-3 bd-gray-900">$gray-900</div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="p-3 mb-2 bd-black text-white">
            <strong class="d-block">$black</strong>
            #000
          </div>
          <div class="p-3 mb-2 bd-white border">
            <strong class="d-block">$white</strong>
            #fff
          </div>
        </div>
      </div>
      <h3 id="notes-on-sass">
        Notes on Sass
        <a
          class="anchor-link"
          href="#notes-on-sass"
          aria-label="Link to this section: Notes on Sass"
        ></a>
      </h3>
      <p>
        Sass cannot programmatically generate variables, so we
        manually created variables for every tint and shade
        ourselves. We specify the midpoint value (e.g.,
        <code>$blue-500</code>) and use custom color functions to
        tint (lighten) or shade (darken) our colors via Sass’s
        <code>mix()</code> color function.
      </p>
      <p>
        Using <code>mix()</code> is not the same as
        <code>lighten()</code> and <code>darken()</code>—the former
        blends the specified color with white or black, while the
        latter only adjusts the lightness value of each color. The
        result is a much more complete suite of colors, as
        <a href="https://codepen.io/emdeoh/pen/zYOQOPB"
          >shown in this CodePen demo</a
        >.
      </p>
      <p>
        Our <code>tint-color()</code> and
        <code>shade-color()</code> functions use
        <code>mix()</code> alongside our
        <code>$theme-color-interval</code> variable, which specifies
        a stepped percentage value for each mixed color we produce.
        See the <code>scss/_functions.scss</code> and
        <code>scss/_variables.scss</code> files for the full source
        code.
      </p>
      <h2 id="color-sass-maps">
        Color Sass maps
        <a
          class="anchor-link"
          href="#color-sass-maps"
          aria-label="Link to this section: Color Sass maps"
        ></a>
      </h2>
      <p>
        Avee’s source Sass files include three maps to help you
        quickly and easily loop over a list of colors and their hex
        values.
      </p>
      <ul>
        <li>
          <code>$colors</code> lists all our available base
          (<code>500</code>) colors
        </li>
        <li>
          <code>$theme-colors</code> lists all semantically named
          theme colors (shown below)
        </li>
        <li>
          <code>$grays</code> lists all tints and shades of gray
        </li>
      </ul>
      <p>
        Within <code>scss/_variables.scss</code>, you’ll find
        Avee’s color variables and Sass map. Here’s an example
        of the <code>$colors</code> Sass map:
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_variables.scss"
            >scss/_variables.scss</a
          >
          <div class="d-flex ms-auto">
            <button
              type="button"
              class="btn-clipboard mt-0 me-0"
              aria-label="Copy to clipboard"
              data-bs-original-title="Copy to clipboard"
            >
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#clipboard"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$colors</span><span class="o">:</span> <span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"blue"</span><span class="o">:</span>       <span class="nv">$blue</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"indigo"</span><span class="o">:</span>     <span class="nv">$indigo</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"purple"</span><span class="o">:</span>     <span class="nv">$purple</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"pink"</span><span class="o">:</span>       <span class="nv">$pink</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"red"</span><span class="o">:</span>        <span class="nv">$red</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"orange"</span><span class="o">:</span>     <span class="nv">$orange</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"yellow"</span><span class="o">:</span>     <span class="nv">$yellow</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"green"</span><span class="o">:</span>      <span class="nv">$green</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"teal"</span><span class="o">:</span>       <span class="nv">$teal</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"cyan"</span><span class="o">:</span>       <span class="nv">$cyan</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"black"</span><span class="o">:</span>      <span class="nv">$black</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"white"</span><span class="o">:</span>      <span class="nv">$white</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"gray"</span><span class="o">:</span>       <span class="nv">$gray-600</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"gray-dark"</span><span class="o">:</span>  <span class="nv">$gray-800</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        Add, remove, or modify values within the map to update how
        they’re used in many other components. Unfortunately at this
        time, not <em>every</em> component utilizes this Sass map.
        Future updates will strive to improve upon this. Until then,
        plan on making use of the variables
        and this Sass map.
      </p>
      <h3 id="example">
        Example
        <a
          class="anchor-link"
          href="#example"
          aria-label="Link to this section: Example"
        ></a>
      </h3>
      <p>Here’s how you can use these in your Sass:</p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
          <button type="button" class="btn-clipboard">
            <svg class="bi" role="img" aria-label="Copy">
              <use xlink:href="#clipboard"></use>
            </svg>
          </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nc">.alpha</span> <span class="p">{</span> <span class="na">color</span><span class="o">:</span> <span class="nv">$purple</span><span class="p">;</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="nc">.beta</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">color</span><span class="o">:</span> <span class="nv">$yellow-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">background-color</span><span class="o">:</span> <span class="nv">$indigo-900</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        <a href="/docs/5.3/utilities/colors/">Color</a> and
        <a href="/docs/5.3/utilities/background/">background</a>
        utility classes are also available for setting
        <code>color</code> and <code>background-color</code> using
        the <code>500</code> color values.
      </p>
      <h2 id="generating-utilities">
        Generating utilities
        <a
          class="anchor-link"
          href="#generating-utilities"
          aria-label="Link to this section: Generating utilities"
        ></a>
      </h2>
      <small
        class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"
        >Added in v5.1.0</small
      >

      <p>
        Avee doesn’t include <code>color</code> and
        <code>background-color</code> utilities for every color
        variable, but you can generate these yourself with our
        <a href="/docs/5.3/utilities/api/">utility API</a> and our
        extended Sass maps added in v5.1.0.
      </p>
      <ol>
        <li>
          To start, make sure you’ve imported our functions,
          variables, mixins, and utilities.
        </li>
        <li>
          Use our <code>map-merge-multiple()</code> function to
          quickly merge multiple Sass maps together in a new map.
        </li>
        <li>
          Merge this new combined map to extend any utility with a
          <code>{color}-{level}</code> class name.
        </li>
      </ol>
      <p>
        Here’s an example that generates text color utilities (e.g.,
        <code>.text-purple-500</code>) using the above steps.
      </p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
          <button type="button" class="btn-clipboard">
            <svg class="bi" role="img" aria-label="Copy">
              <use xlink:href="#clipboard"></use>
            </svg>
          </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/functions"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/variables"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/variables-dark"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/maps"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/mixins"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/utilities"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$all-colors</span><span class="o">:</span> <span class="nf">map-merge-multiple</span><span class="p">(</span><span class="nv">$blues</span><span class="o">,</span> <span class="nv">$indigos</span><span class="o">,</span> <span class="nv">$purples</span><span class="o">,</span> <span class="nv">$pinks</span><span class="o">,</span> <span class="nv">$reds</span><span class="o">,</span> <span class="nv">$oranges</span><span class="o">,</span> <span class="nv">$yellows</span><span class="o">,</span> <span class="nv">$greens</span><span class="o">,</span> <span class="nv">$teals</span><span class="o">,</span> <span class="nv">$cyans</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$utilities</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="nv">$utilities</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="p">(</span>
</span></span><span class="line"><span class="cl">    <span class="s2">"color"</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span>
</span></span><span class="line"><span class="cl">      <span class="nf">map-get</span><span class="p">(</span><span class="nv">$utilities</span><span class="o">,</span> <span class="s2">"color"</span><span class="p">)</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">      <span class="p">(</span>
</span></span><span class="line"><span class="cl">        <span class="na">values</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span>
</span></span><span class="line"><span class="cl">          <span class="nf">map-get</span><span class="p">(</span><span class="nf">map-get</span><span class="p">(</span><span class="nv">$utilities</span><span class="o">,</span> <span class="s2">"color"</span><span class="p">)</span><span class="o">,</span> <span class="s2">"values"</span><span class="p">)</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">          <span class="p">(</span>
</span></span><span class="line"><span class="cl">            <span class="nv">$all-colors</span>
</span></span><span class="line"><span class="cl">          <span class="p">)</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">        <span class="p">)</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">      <span class="p">)</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">    <span class="p">)</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="p">)</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"bootstrap/scss/utilities/api"</span><span class="p">;</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        This will generate new
        <code>.text-{color}-{level}</code> utilities for every color
        and level. You can do the same for any other utility and
        property as well.
      </p>
    </div>
  </div>
</div>
      `;
  setupPage(title, sub, content,id);
}
