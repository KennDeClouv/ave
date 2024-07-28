import { setupPage } from "../setupPage.js";

export function layoutBreakpointsPage() {
  const title = "Layout";
  const sub = "Breakpoints";
  const id = "toLayoutBreakpointsPage";
  const content = `
  <div class="card">
  <div class="card-body px-5 fs-5">
    <div class="bd-content ps-lg-2">
      <h2 id="core-concepts" class="mb-4">
        Core concepts
        <a
          class="anchor-link"
          href="#core-concepts"
          aria-label="Link to this section: Core concepts"
        ></a>
      </h2>
      <ul>
        <li>
          <p>
            <strong
              >Breakpoints are the building blocks of responsive
              design.</strong
            >
            Use them to control when your layout can be adapted at a
            particular viewport or device size.
          </p>
        </li>
        <li>
          <p>
            <strong
              >Use media queries to architect your CSS by
              breakpoint.</strong
            >
            Media queries are a feature of CSS that allow you to
            conditionally apply styles based on a set of browser and
            operating system parameters. We most commonly use
            <code>min-width</code> in our media queries.
          </p>
        </li>
        <li>
          <p>
            <strong
              >Mobile first, responsive design is the goal.</strong
            >
            Avee’s CSS aims to apply the bare minimum of styles
            to make a layout work at the smallest breakpoint, and
            then layers on styles to adjust that design for larger
            devices. This optimizes your CSS, improves rendering
            time, and provides a great experience for your visitors.
          </p>
        </li>
      </ul>
      <h2 id="available-breakpoints">
        Available breakpoints
        <a
          class="anchor-link"
          href="#available-breakpoints"
          aria-label="Link to this section: Available breakpoints"
        ></a>
      </h2>
      <p>
        Avee includes six default breakpoints, sometimes
        referred to as <em>grid tiers</em>, for building
        responsively. These breakpoints can be customized if you’re
        using our source Sass files.
      </p>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Class infix</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extra small</td>
              <td><em>None</em></td>
              <td>&lt;576px</td>
            </tr>
            <tr>
              <td>Small</td>
              <td><code>sm</code></td>
              <td>≥576px</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td><code>md</code></td>
              <td>≥768px</td>
            </tr>
            <tr>
              <td>Large</td>
              <td><code>lg</code></td>
              <td>≥992px</td>
            </tr>
            <tr>
              <td>Extra large</td>
              <td><code>xl</code></td>
              <td>≥1200px</td>
            </tr>
            <tr>
              <td>Extra extra large</td>
              <td><code>xxl</code></td>
              <td>≥1400px</td>
            </tr>
            <tr>
              <td>Double extra extra large</td>
              <td><code>2xl</code></td>
              <td>≥2000px</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Each breakpoint was chosen to comfortably hold containers
        whose widths are multiples of 12. Breakpoints are also
        representative of a subset of common device sizes and
        viewport dimensions—they don’t specifically target every use
        case or device. Instead, the ranges provide a strong and
        consistent foundation to build on for nearly any device.
      </p>
      <p>
        These breakpoints are customizable via Sass—you’ll find them
        in a Sass map in our
        <code>_variables.scss</code> stylesheet.
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$grid-breakpoints</span><span class="o">:</span> <span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="na">xs</span><span class="o">:</span> <span class="mi">0</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">sm</span><span class="o">:</span> <span class="mi">576</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">md</span><span class="o">:</span> <span class="mi">768</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">lg</span><span class="o">:</span> <span class="mi">992</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">xl</span><span class="o">:</span> <span class="mi">1200</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">xxl</span><span class="o">:</span> <span class="mi">1400</span><span class="kt">px</span>
</span></span><span class="line"><span class="cl">  <span class="na">2xl</span><span class="o">:</span> <span class="mi">2000</span><span class="kt">px</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        For more information and examples on how to modify our Sass
        maps and variables, please refer to
        <a href="/docs/5.3/layout/grid/#css"
          >the CSS section of the Grid documentation</a
        >.
      </p>
      <h2 id="media-queries">
        Media queries
        <a
          class="anchor-link"
          href="#media-queries"
          aria-label="Link to this section: Media queries"
        ></a>
      </h2>
      <p>
        Since Avee is developed to be mobile first, we use a
        handful of
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
          >media queries</a
        >
        to create sensible breakpoints for our layouts and
        interfaces. These breakpoints are mostly based on minimum
        viewport widths and allow us to scale up elements as the
        viewport changes.
      </p>
      <h3 id="min-width">
        Min-width
        <a
          class="anchor-link"
          href="#min-width"
          aria-label="Link to this section: Min-width"
        ></a>
      </h3>
      <p>
        Avee primarily uses the following media query ranges—or
        breakpoints—in our source Sass files for our layout, grid
        system, and components.
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Source mixins
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="c1">// No media query necessary for xs breakpoint as it's effectively @media (min-width: 0) { ... }
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">sm</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">md</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">lg</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">xxl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">2xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Usage
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="c1">// Example: Hide starting at min-width: 0, and then show at the sm breakpoint
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nc">.custom-class</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">display</span><span class="o">:</span> <span class="ni">none</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-up</span><span class="p">(</span><span class="n">sm</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nc">.custom-class</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="na">display</span><span class="o">:</span> <span class="ni">block</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        These Sass mixins translate in our compiled CSS using the
        values declared in our Sass variables. For example:
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// X-Small devices (portrait phones, less than 576px)
</span></span></span><span class="line"><span class="cl"><span class="c1">// No media query for xs since this is the default in Avee
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="c1">// Small devices (landscape phones, 576px and up)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">576</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Medium devices (tablets, 768px and up)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">768</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Large devices (desktops, 992px and up)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">992</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// X-Large devices (large desktops, 1200px and up)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">1200</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// XX-Large devices (larger desktops, 1400px and up)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">1400</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// 2X-Large devices (larger desktops, 2000px and up)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">2000</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <h3 id="max-width">
        Max-width
        <a
          class="anchor-link"
          href="#max-width"
          aria-label="Link to this section: Max-width"
        ></a>
      </h3>
      <p>
        We occasionally use media queries that go in the other
        direction (the given screen size <em>or smaller</em>):
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// No media query necessary for xs breakpoint as it's effectively @media (max-width: 0) { ... }
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">sm</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">md</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">lg</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">xxl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">2xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Example: Style from medium breakpoint and down
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@include</span><span class="nd"> media-breakpoint-down</span><span class="p">(</span><span class="n">md</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nc">.custom-class</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="na">display</span><span class="o">:</span> <span class="ni">block</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        These mixins take those declared breakpoints, subtract
        <code>.02px</code> from them, and use them as our
        <code>max-width</code> values. For example:
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// xs returns only a ruleset and no media query
</span></span></span><span class="line"><span class="cl"><span class="c1">// ... { ... }
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="c1">// sm applies to x-small devices (portrait phones, less than 576px)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">575</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// md applies to small devices (landscape phones, less than 768px)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">767</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// lg applies to medium devices (tablets, less than 992px)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">991</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// xl applies to large devices (desktops, less than 1200px)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">1199</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// xxl applies to x-large devices (large desktops, less than 1400px)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">1399</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// 2xl applies to x-large devices (large desktops, less than 2000px)
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">1999</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <div class="bd-callout bd-callout-warning">
        <strong>Why subtract .02px?</strong> Browsers don’t
        currently support
        <a
          href="https://www.w3.org/TR/mediaqueries-4/#range-context"
          >range context queries</a
        >, so we work around the limitations of
        <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"
          ><code>min-</code> and <code>max-</code> prefixes</a
        >
        and viewports with fractional widths (which can occur under
        certain conditions on high-dpi devices, for instance) by
        using values with higher precision.
      </div>

      <h3 id="single-breakpoint">
        Single breakpoint
        <a
          class="anchor-link"
          href="#single-breakpoint"
          aria-label="Link to this section: Single breakpoint"
        ></a>
      </h3>
      <p>
        There are also media queries and mixins for targeting a
        single segment of screen sizes using the minimum and maximum
        breakpoint widths.
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">xs</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">sm</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">md</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">lg</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">xxl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-only</span><span class="p">(</span><span class="n">2xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        For example the
        <code>@include media-breakpoint-only(md) { ... }</code> will
        result in :
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">768</span><span class="kt">px</span><span class="p">)</span> <span class="ow">and</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">991</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <h3 id="between-breakpoints">
        Between breakpoints
        <a
          class="anchor-link"
          href="#between-breakpoints"
          aria-label="Link to this section: Between breakpoints"
        ></a>
      </h3>
      <p>
        Similarly, media queries may span multiple breakpoint
        widths:
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> media-breakpoint-between</span><span class="p">(</span><span class="n">md</span><span class="o">,</span> <span class="n">xl</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>Which results in:</p>
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Example
</span></span></span><span class="line"><span class="cl"><span class="c1">// Apply styles starting from medium devices and up to extra large devices
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@media</span> <span class="p">(</span><span class="na">min-width</span><span class="o">:</span> <span class="mi">768</span><span class="kt">px</span><span class="p">)</span> <span class="ow">and</span> <span class="p">(</span><span class="na">max-width</span><span class="o">:</span> <span class="mi">1199</span><span class="mf">.98</span><span class="kt">px</span><span class="p">)</span> <span class="p">{</span> <span class="nc">...</span> <span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  setupPage(title, sub, content, id);
}
