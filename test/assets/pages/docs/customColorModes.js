import { setupPage } from "../setupPage.js";

export function customColorModesPage() {
  const title = "Customize";
  const sub = "Color modes"
  const id ="toCustomColorModesPage"
  const content = `
  <div class="card">
  <div class="card-body fs-5">
    <div class="bd-content ps-lg-2">
      <div class="bd-callout bd-callout-info">
        <strong>Try it yourself!</strong> Download the source code
        and working demo for using Avee with Stylelint, and the
        color modes from the
        <a
          href="https://github.com/twbs/examples/tree/main/color-modes"
          >twbs/examples repository</a
        >. You can also
        <a
          href="https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html"
          >open the example in StackBlitz</a
        >.
      </div>

      <h2 id="dark-mode">
        Dark mode
        <a
          class="anchor-link"
          href="#dark-mode"
          aria-label="Link to this section: Dark mode"
        ></a>
      </h2>
      <p>
        <strong
          >Avee now supports color modes, starting with dark
          mode!</strong
        >
        With v1.0.0 you can implement your own color mode toggler
        (see below for an example from Avee’s docs) and apply
        the different color modes as you see fit. We support a light
        mode (default) and now dark mode. Color modes can be toggled
        globally on the <code>&lt;html&gt;</code> element, or on
        specific components and elements, thanks to the
        <code>data-bs-theme</code> attribute.
      </p>
      <p>
        Alternatively, you can also switch to a media query
        implementation thanks to our color mode mixin—see
        <a href="#building-with-sass"
          >the usage section for details</a
        >. Heads up though—this eliminates your ability to change
        themes on a per-component basis as shown below.
      </p>
      <h2 id="example">
        Example
        <a
          class="anchor-link"
          href="#example"
          aria-label="Link to this section: Example"
        ></a>
      </h2>
      <p>
        For example, to change the color mode of a dropdown menu,
        add <code>data-bs-theme="light"</code> or
        <code>data-bs-theme="dark"</code> to the parent
        <code>.dropdown</code>. Now, no matter the global color
        mode, these dropdowns will display with the specified theme
        value.
      </p>
      <div class="bd-example-snippet bd-code-snippet">
        <div
          class="bd-example m-0 border-0 d-flex justify-content-between"
        >
          <div class="dropdown" data-bs-theme="light">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonLight"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Default dropdown
            </button>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButtonLight"
            >
              <li>
                <a class="dropdown-item active" href="#">Action</a>
              </li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Something else here</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>

          <div class="dropdown" data-bs-theme="dark">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonDark"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dark dropdown
            </button>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButtonDark"
            >
              <li>
                <a class="dropdown-item active" href="#">Action</a>
              </li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Something else here</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Separated link</a>
              </li>
            </ul>
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
          ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown"</span> <span class="na">data-bs-theme</span><span class="o">=</span><span class="s">"light"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">"btn btn-secondary dropdown-toggle"</span> <span class="na">type</span><span class="o">=</span><span class="s">"button"</span> <span class="na">id</span><span class="o">=</span><span class="s">"dropdownMenuButtonLight"</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">"dropdown"</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">"false"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Default dropdown
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-menu"</span> <span class="na">aria-labelledby</span><span class="o">=</span><span class="s">"dropdownMenuButtonLight"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item active"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-divider"</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown"</span> <span class="na">data-bs-theme</span><span class="o">=</span><span class="s">"dark"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">"btn btn-secondary dropdown-toggle"</span> <span class="na">type</span><span class="o">=</span><span class="s">"button"</span> <span class="na">id</span><span class="o">=</span><span class="s">"dropdownMenuButtonDark"</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">"dropdown"</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">"false"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dark dropdown
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-menu"</span> <span class="na">aria-labelledby</span><span class="o">=</span><span class="s">"dropdownMenuButtonDark"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item active"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-divider"</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">"dropdown-item"</span> <span class="na">href</span><span class="o">=</span><span class="s">"#"</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre>
        </div>
      </div>

      <h2 id="how-it-works">
        How it works
        <a
          class="anchor-link"
          href="#how-it-works"
          aria-label="Link to this section: How it works"
        ></a>
      </h2>
      <ul>
        <li>
          <p>
            As shown above, color mode styles are controlled by the
            <code>data-bs-theme</code> attribute. This attribute can
            be applied to the <code>&lt;html&gt;</code> element, or
            to any other element or Avee component. If applied
            to the <code>&lt;html&gt;</code> element, it will apply
            to everything. If applied to a component or element, it
            will be scoped to that specific component or element.
          </p>
        </li>
        <li>
          <p>
            For each color mode you wish to support, you’ll need to
            add new overrides for the shared global CSS variables.
            We do this already in our
            <code>_root.scss</code> stylesheet for dark mode, with
            light mode being the default values. In writing color
            mode specific styles, use the mixin:
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
              ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Color mode variables in _root.scss
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@include</span><span class="nd"> color-mode</span><span class="p">(</span><span class="ni">dark</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="c1">// CSS variable overrides here...
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="p">}</span>
</span></span></code></pre>
            </div>
          </div>
        </li>
        <li>
          <p>
            We use a custom <code>_variables-dark.scss</code> to
            power those shared global CSS variable overrides for
            dark mode. This file isn’t required for your own custom
            color modes, but it’s required for our dark mode for two
            reasons. First, it’s better to have a single place to
            reset global colors. Second, some Sass variables had to
            be overridden for background images embedded in our CSS
            for accordions, form components, and more.
          </p>
        </li>
      </ul>
      <h2 id="usage">
        Usage
        <a
          class="anchor-link"
          href="#usage"
          aria-label="Link to this section: Usage"
        ></a>
      </h2>
      <h3 id="enable-dark-mode">
        Enable dark mode
        <a
          class="anchor-link"
          href="#enable-dark-mode"
          aria-label="Link to this section: Enable dark mode"
        ></a>
      </h3>
      <p>
        Enable the built in dark color mode across your entire
        project by adding the
        <code>data-bs-theme="dark"</code> attribute to the
        <code>&lt;html&gt;</code> element. This will apply the dark
        color mode to all components and elements, other than those
        with a specific <code>data-bs-theme</code> attribute
        applied. Building on the
        <a
          href="/docs/5.3/getting-started/introduction/#quick-start"
          >quick start template</a
        >:
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
          ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="cp">&lt;!doctype html&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span> <span class="na">data-bs-theme</span><span class="o">=</span><span class="s">"dark"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"utf-8"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Avee demo<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@1.0.0/dist/css/bootstrap.min.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">h1</span><span class="p">&gt;</span>Hello, world!<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://cdn.jsdelivr.net/npm/bootstrap@1.0.0/dist/js/bootstrap.bundle.min.js"</span> <span class="na">integrity</span><span class="o">=</span><span class="s">"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"</span> <span class="na">crossorigin</span><span class="o">=</span><span class="s">"anonymous"</span><span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        Avee does not yet ship with a built-in color mode
        picker, but you can use the one from our own documentation
        if you like.
        <a href="#javascript"
          >Learn more in the JavaScript section.</a
        >
      </p>
      <h3 id="building-with-sass">
        Building with Sass
        <a
          class="anchor-link"
          href="#building-with-sass"
          aria-label="Link to this section: Building with Sass"
        ></a>
      </h3>
      <p>
        Our new dark mode option is available to use for all users
        of Avee, but it’s controlled via data attributes
        instead of media queries and does not automatically toggle
        your project’s color mode. You can disable our dark mode
        entirely via Sass by changing
        <code>$enable-dark-mode</code> to <code>false</code>.
      </p>
      <p>
        We use a custom Sass mixin, <code>color-mode()</code>, to
        help you control <em>how</em> color modes are applied. By
        default, we use a <code>data</code> attribute approach,
        allowing you to create more user-friendly experiences where
        your visitors can choose to have an automatic dark mode or
        control their preference (like in our own docs here). This
        is also an easy and scalable way to add different themes and
        more custom color modes beyond light and dark.
      </p>
      <p>
        In case you want to use media queries and only make color
        modes automatic, you can change the mixin’s default type via
        Sass variable. Consider the following snippet and its
        compiled CSS output.
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$color-mode-type</span><span class="o">:</span> <span class="n">data</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> color-mode</span><span class="p">(</span><span class="ni">dark</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nc">.element</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="na">color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-primary-text-emphasis</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">    <span class="na">background-color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-primary-bg-subtle</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>Outputs to:</p>
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
          ><code class="language-css" data-lang="css"><span class="line"><span class="cl"><span class="o">[</span><span class="nt">data-bs-theme</span><span class="o">=</span><span class="nt">dark</span><span class="o">]</span> <span class="p">.</span><span class="nc">element</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">color</span><span class="p">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs</span><span class="o">-</span><span class="n">primary</span><span class="o">-</span><span class="kc">text</span><span class="o">-</span><span class="n">emphasis</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="k">background-color</span><span class="p">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs</span><span class="o">-</span><span class="n">primary</span><span class="o">-</span><span class="n">bg</span><span class="o">-</span><span class="n">subtle</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>And when setting to <code>media-query</code>:</p>
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$color-mode-type</span><span class="o">:</span> <span class="n">media-query</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> color-mode</span><span class="p">(</span><span class="ni">dark</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nc">.element</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="na">color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-primary-text-emphasis</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">    <span class="na">background-color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-primary-bg-subtle</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>Outputs to:</p>
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
          ><code class="language-css" data-lang="css"><span class="line"><span class="cl"><span class="p">@</span><span class="k">media</span> <span class="o">(</span><span class="nt">prefers-color-scheme</span><span class="o">:</span> <span class="nt">dark</span><span class="o">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="p">.</span><span class="nc">element</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="k">color</span><span class="p">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs</span><span class="o">-</span><span class="n">primary</span><span class="o">-</span><span class="kc">text</span><span class="o">-</span><span class="n">emphasis</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">    <span class="k">background-color</span><span class="p">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs</span><span class="o">-</span><span class="n">primary</span><span class="o">-</span><span class="n">bg</span><span class="o">-</span><span class="n">subtle</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <h2 id="custom-color-modes">
        Custom color modes
        <a
          class="anchor-link"
          href="#custom-color-modes"
          aria-label="Link to this section: Custom color modes"
        ></a>
      </h2>
      <p>
        While the primary use case for color modes is light and dark
        mode, custom color modes are also possible. Create your own
        <code>data-bs-theme</code> selector with a custom value as
        the name of your color mode, then modify our Sass and CSS
        variables as needed. We opted to create a separate
        <code>_variables-dark.scss</code> stylesheet to house
        Avee’s dark mode specific Sass variables, but that’s
        not required for you.
      </p>
      <p>
        For example, you can create a “blue theme” with the selector
        <code>data-bs-theme="blue"</code>. In your custom Sass or
        CSS file, add the new selector and override any global or
        component CSS variables as needed. If you’re using Sass, you
        can also use Sass’s functions within your CSS variable
        overrides.
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/site/assets/scss/_content.scss"
            >site/assets/scss/_content.scss</a
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="o">[</span><span class="nt">data-bs-theme</span><span class="o">=</span><span class="s2">"blue"</span><span class="o">]</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-color</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-white</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$white</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-bg</span><span class="o">:</span> <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="n">bs-blue</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-body-bg-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$blue</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">--bs-tertiary-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$blue-600</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="nc">.dropdown-menu</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-dropdown-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nf">mix</span><span class="p">(</span><span class="nv">$blue-500</span><span class="o">,</span> <span class="nv">$blue-600</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-dropdown-link-active-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$blue-700</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="nc">.btn-secondary</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nf">mix</span><span class="p">(</span><span class="nv">$gray-600</span><span class="o">,</span> <span class="nv">$blue-400</span><span class="o">,</span> <span class="mf">.5</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.25</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-hover-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nf">darken</span><span class="p">(</span><span class="nf">mix</span><span class="p">(</span><span class="nv">$gray-600</span><span class="o">,</span> <span class="nv">$blue-400</span><span class="o">,</span> <span class="mf">.5</span><span class="p">)</span><span class="o">,</span> <span class="mi">5</span><span class="kt">%</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-hover-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.25</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-active-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nf">darken</span><span class="p">(</span><span class="nf">mix</span><span class="p">(</span><span class="nv">$gray-600</span><span class="o">,</span> <span class="nv">$blue-400</span><span class="o">,</span> <span class="mf">.5</span><span class="p">)</span><span class="o">,</span> <span class="mi">10</span><span class="kt">%</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-active-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.5</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-focus-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.5</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="na">--bs-btn-focus-box-shadow</span><span class="o">:</span> <span class="mi">0</span> <span class="mi">0</span> <span class="mi">0</span> <span class="mf">.25</span><span class="kt">rem</span> <span class="nf">rgba</span><span class="p">(</span><span class="mi">255</span><span class="o">,</span> <span class="mi">255</span><span class="o">,</span> <span class="mi">255</span><span class="o">,</span> <span class="mf">.2</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <div
        class="bd-example text-body bg-body"
        data-bs-theme="blue"
      >
        <div class="h4">Example blue theme</div>
        <p>
          Some paragraph text to show how the blue theme might look
          with written copy.
        </p>
        <hr class="my-4" />
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButtonCustom"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButtonCustom"
            style=""
          >
            <li>
              <a class="dropdown-item active" href="#">Action</a>
            </li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"
                >Something else here</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Separated link</a>
            </li>
          </ul>
        </div>
      </div>
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
          ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">data-bs-theme</span><span class="o">=</span><span class="s">"blue"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  ...
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre>
        </div>
      </div>
      <h2 id="javascript">
        JavaScript
        <a
          class="anchor-link"
          href="#javascript"
          aria-label="Link to this section: JavaScript"
        ></a>
      </h2>
      <p>
        To allow visitors or users to toggle color modes, you’ll
        need to create a toggle element to control the
        <code>data-bs-theme</code> attribute on the root element,
        <code>&lt;html&gt;</code>. We’ve built a toggler in our
        documentation that initially defers to a user’s current
        system color mode, but provides an option to override that
        and pick a specific color mode.
      </p>
      <p>
        Here’s a look at the JavaScript that powers it. Feel free to
        inspect our own documentation navbar to see how it’s
        implemented using HTML and CSS from our own components. It
        is suggested to include the JavaScript at the top of your
        page to reduce potential screen flickering during reloading
        of your site. Note that if you decide to use media queries
        for your color modes, your JavaScript may need to be
        modified or removed if you prefer an implicit control.
      </p>
      <div class="bd-example-snippet bd-code-snippet">
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-js" data-lang="js"><span class="line"><span class="cl"><span class="cm">/*!
</span></span></span><span class="line"><span class="cl"><span class="cm"> * Color mode toggler for Avee's docs (https://getbootstrap.com/)
</span></span></span><span class="line"><span class="cl"><span class="cm"> * Copyright 2011-2024 The Avee Authors
</span></span></span><span class="line"><span class="cl"><span class="cm"> * Licensed under the Creative Commons Attribution 3.0 Unported License.
</span></span></span><span class="line"><span class="cl"><span class="cm"> */</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">(()</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="s1">'use strict'</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="kr">const</span> <span class="nx">getStoredTheme</span> <span class="o">=</span> <span class="p">()</span> <span class="p">=&gt;</span> <span class="nx">localStorage</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="s1">'theme'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">  <span class="kr">const</span> <span class="nx">setStoredTheme</span> <span class="o">=</span> <span class="nx">theme</span> <span class="p">=&gt;</span> <span class="nx">localStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="s1">'theme'</span><span class="p">,</span> <span class="nx">theme</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="kr">const</span> <span class="nx">getPreferredTheme</span> <span class="o">=</span> <span class="p">()</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">storedTheme</span> <span class="o">=</span> <span class="nx">getStoredTheme</span><span class="p">()</span>
</span></span><span class="line"><span class="cl">    <span class="k">if</span> <span class="p">(</span><span class="nx">storedTheme</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="k">return</span> <span class="nx">storedTheme</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="k">return</span> <span class="nb">window</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span><span class="s1">'(prefers-color-scheme: dark)'</span><span class="p">).</span><span class="nx">matches</span> <span class="o">?</span> <span class="s1">'dark'</span> <span class="o">:</span> <span class="s1">'light'</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="kr">const</span> <span class="nx">setTheme</span> <span class="o">=</span> <span class="nx">theme</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="k">if</span> <span class="p">(</span><span class="nx">theme</span> <span class="o">===</span> <span class="s1">'auto'</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">'data-bs-theme'</span><span class="p">,</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span><span class="s1">'(prefers-color-scheme: dark)'</span><span class="p">).</span><span class="nx">matches</span> <span class="o">?</span> <span class="s1">'dark'</span> <span class="o">:</span> <span class="s1">'light'</span><span class="p">))</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">'data-bs-theme'</span><span class="p">,</span> <span class="nx">theme</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="nx">setTheme</span><span class="p">(</span><span class="nx">getPreferredTheme</span><span class="p">())</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="kr">const</span> <span class="nx">showActiveTheme</span> <span class="o">=</span> <span class="p">(</span><span class="nx">theme</span><span class="p">,</span> <span class="nx">focus</span> <span class="o">=</span> <span class="kc">false</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">themeSwitcher</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">'#bd-theme'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">themeSwitcher</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="k">return</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">themeSwitcherText</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">'#bd-theme-text'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">activeThemeIcon</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">'.theme-icon-active use'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">btnToActive</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="sb">[data-bs-theme-value="</span><span class="si">$ {</span><span class="nx">theme</span><span class="si">}</span><span class="sb">"]</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">svgOfActiveBtn</span> <span class="o">=</span> <span class="nx">btnToActive</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">'svg use'</span><span class="p">).</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">'href'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">'[data-bs-theme-value]'</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">element</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nx">element</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="s1">'active'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">      <span class="nx">element</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">'aria-pressed'</span><span class="p">,</span> <span class="s1">'false'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="p">})</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="nx">btnToActive</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">'active'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="nx">btnToActive</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">'aria-pressed'</span><span class="p">,</span> <span class="s1">'true'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="nx">activeThemeIcon</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">'href'</span><span class="p">,</span> <span class="nx">svgOfActiveBtn</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">themeSwitcherLabel</span> <span class="o">=</span> <span class="sb"></span><span class="si">$ {</span><span class="nx">themeSwitcherText</span><span class="p">.</span><span class="nx">textContent</span><span class="si">}</span><span class="sb"> (</span><span class="si">$ {</span><span class="nx">btnToActive</span><span class="p">.</span><span class="nx">dataset</span><span class="p">.</span><span class="nx">bsThemeValue</span><span class="si">}</span><span class="sb">)</span>
</span></span><span class="line"><span class="cl">    <span class="nx">themeSwitcher</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">'aria-label'</span><span class="p">,</span> <span class="nx">themeSwitcherLabel</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="k">if</span> <span class="p">(</span><span class="nx">focus</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nx">themeSwitcher</span><span class="p">.</span><span class="nx">focus</span><span class="p">()</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="nb">window</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span><span class="s1">'(prefers-color-scheme: dark)'</span><span class="p">).</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">'change'</span><span class="p">,</span> <span class="p">()</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="kr">const</span> <span class="nx">storedTheme</span> <span class="o">=</span> <span class="nx">getStoredTheme</span><span class="p">()</span>
</span></span><span class="line"><span class="cl">    <span class="k">if</span> <span class="p">(</span><span class="nx">storedTheme</span> <span class="o">!==</span> <span class="s1">'light'</span> <span class="o">&amp;&amp;</span> <span class="nx">storedTheme</span> <span class="o">!==</span> <span class="s1">'dark'</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nx">setTheme</span><span class="p">(</span><span class="nx">getPreferredTheme</span><span class="p">())</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">})</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">'DOMContentLoaded'</span><span class="p">,</span> <span class="p">()</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nx">showActiveTheme</span><span class="p">(</span><span class="nx">getPreferredTheme</span><span class="p">())</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">'[data-bs-theme-value]'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">      <span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">toggle</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="nx">toggle</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">'click'</span><span class="p">,</span> <span class="p">()</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">          <span class="kr">const</span> <span class="nx">theme</span> <span class="o">=</span> <span class="nx">toggle</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">'data-bs-theme-value'</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">          <span class="nx">setStoredTheme</span><span class="p">(</span><span class="nx">theme</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">          <span class="nx">setTheme</span><span class="p">(</span><span class="nx">theme</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">          <span class="nx">showActiveTheme</span><span class="p">(</span><span class="nx">theme</span><span class="p">,</span> <span class="kc">true</span><span class="p">)</span>
</span></span><span class="line"><span class="cl">        <span class="p">})</span>
</span></span><span class="line"><span class="cl">      <span class="p">})</span>
</span></span><span class="line"><span class="cl">  <span class="p">})</span>
</span></span><span class="line"><span class="cl"><span class="p">})()</span></span></span></code></pre>
        </div>
      </div>

      <h2 id="adding-theme-colors">
        Adding theme colors
        <a
          class="anchor-link"
          href="#adding-theme-colors"
          aria-label="Link to this section: Adding theme colors"
        ></a>
      </h2>
      <p>
        Adding a new color in <code>$theme-colors</code> is not
        enough for some of our components like
        <a href="/docs/5.3/components/alerts/">alerts</a> and
        <a href="/docs/5.3/components/list-group/">list groups</a>.
        New colors must also be defined in
        <code>$theme-colors-text</code>,
        <code>$theme-colors-bg-subtle</code>, and
        <code>$theme-colors-border-subtle</code> for light theme;
        but also in <code>$theme-colors-text-dark</code>,
        <code>$theme-colors-bg-subtle-dark</code>, and
        <code>$theme-colors-border-subtle-dark</code> for dark
        theme.
      </p>
      <p>
        This is a manual process because Sass cannot generate its
        own Sass variables from an existing variable or map. In
        future versions of Avee, we’ll revisit this setup to
        reduce the duplication.
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Required
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@import</span> <span class="s2">"functions"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"variables"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"variables-dark"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Add a custom color to $theme-colors
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$custom-colors</span><span class="o">:</span> <span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#712cf9</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors</span><span class="o">,</span> <span class="nv">$custom-colors</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"maps"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"mixins"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"utilities"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Add a custom color to new theme maps
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="c1">// Light mode
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$custom-colors-text</span><span class="o">:</span> <span class="p">(</span><span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#712cf9</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$custom-colors-bg-subtle</span><span class="o">:</span> <span class="p">(</span><span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#e1d2fe</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$custom-colors-border-subtle</span><span class="o">:</span> <span class="p">(</span><span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#bfa1fc</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors-text</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors-text</span><span class="o">,</span> <span class="nv">$custom-colors-text</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors-bg-subtle</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors-bg-subtle</span><span class="o">,</span> <span class="nv">$custom-colors-bg-subtle</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors-border-subtle</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors-border-subtle</span><span class="o">,</span> <span class="nv">$custom-colors-border-subtle</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Dark mode
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$custom-colors-text-dark</span><span class="o">:</span> <span class="p">(</span><span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#e1d2f2</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$custom-colors-bg-subtle-dark</span><span class="o">:</span> <span class="p">(</span><span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#8951fa</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$custom-colors-border-subtle-dark</span><span class="o">:</span> <span class="p">(</span><span class="s2">"custom-color"</span><span class="o">:</span> <span class="mh">#e1d2f2</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors-text-dark</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors-text-dark</span><span class="o">,</span> <span class="nv">$custom-colors-text-dark</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors-bg-subtle-dark</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors-bg-subtle-dark</span><span class="o">,</span> <span class="nv">$custom-colors-bg-subtle-dark</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$theme-colors-border-subtle-dark</span><span class="o">:</span> <span class="nf">map-merge</span><span class="p">(</span><span class="nv">$theme-colors-border-subtle-dark</span><span class="o">,</span> <span class="nv">$custom-colors-border-subtle-dark</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Remainder of Avee imports
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@import</span> <span class="s2">"root"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@import</span> <span class="s2">"reboot"</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="c1">// etc
</span></span></span></code></pre>
        </div>
      </div>
      <h2 id="css">
        CSS
        <a
          class="anchor-link"
          href="#css"
          aria-label="Link to this section: CSS"
        ></a>
      </h2>
      <h3 id="variables">
        Variables
        <a
          class="anchor-link"
          href="#variables"
          aria-label="Link to this section: Variables"
        ></a>
      </h3>
      <p>
        Dozens of root level CSS variables are repeated as overrides
        for dark mode. These are scoped to the color mode selector,
        which defaults to <code>data-bs-theme</code> but
        <a href="#building-with-sass">can be configured</a> to use a
        <code>prefers-color-scheme</code> media query. Use these
        variables as a guideline for generating your own new color
        modes.
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_root.scss"
            >scss/_root.scss</a
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="na">--#{$prefix}body-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}body-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-color-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}body-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-bg-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}body-bg-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-bg-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}emphasis-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-emphasis-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}emphasis-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-emphasis-color-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}secondary-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-secondary-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}secondary-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-secondary-color-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}secondary-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-secondary-bg-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}secondary-bg-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-secondary-bg-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}tertiary-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-tertiary-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}tertiary-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-tertiary-color-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}tertiary-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$body-tertiary-bg-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}tertiary-bg-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$body-tertiary-bg-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@each</span> <span class="nv">$color</span><span class="o">,</span> <span class="nv">$value</span> <span class="ow">in</span> <span class="nv">$theme-colors-text-dark</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">--#{$prefix}#{$color}-text-emphasis</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$value</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@each</span> <span class="nv">$color</span><span class="o">,</span> <span class="nv">$value</span> <span class="ow">in</span> <span class="nv">$theme-colors-bg-subtle-dark</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">--#{$prefix}#{$color}-bg-subtle</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$value</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@each</span> <span class="nv">$color</span><span class="o">,</span> <span class="nv">$value</span> <span class="ow">in</span> <span class="nv">$theme-colors-border-subtle-dark</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">--#{$prefix}#{$color}-border-subtle</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$value</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}heading-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$headings-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}link-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$link-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}link-hover-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$link-hover-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}link-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$link-color-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}link-hover-color-rgb</span><span class="o">:</span> <span class="si">#{</span><span class="nf">to-rgb</span><span class="p">(</span><span class="nv">$link-hover-color-dark</span><span class="p">)</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}code-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$code-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}highlight-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$mark-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}highlight-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$mark-bg-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$border-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}border-color-translucent</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$border-color-translucent-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}form-valid-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$form-valid-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}form-valid-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$form-valid-border-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}form-invalid-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$form-invalid-color-dark</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}form-invalid-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$form-invalid-border-color-dark</span><span class="si">}</span><span class="p">;</span></span></span></code></pre>
        </div>
      </div>
      <h3 id="sass-variables">
        Sass variables
        <a
          class="anchor-link"
          href="#sass-variables"
          aria-label="Link to this section: Sass variables"
        ></a>
      </h3>
      <p>
        CSS variables for our dark color mode are partially
        generated from dark mode specific Sass variables in
        <code>_variables-dark.scss</code>. This also includes some
        custom overrides for changing the colors of embedded SVGs
        used throughout our components.
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_variables-dark.scss"
            >scss/_variables-dark.scss</a
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$primary-text-emphasis-dark</span><span class="o">:</span>        <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$primary</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$secondary-text-emphasis-dark</span><span class="o">:</span>      <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$secondary</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$success-text-emphasis-dark</span><span class="o">:</span>        <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$success</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$info-text-emphasis-dark</span><span class="o">:</span>           <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$info</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$warning-text-emphasis-dark</span><span class="o">:</span>        <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$warning</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$danger-text-emphasis-dark</span><span class="o">:</span>         <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$danger</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$light-text-emphasis-dark</span><span class="o">:</span>          <span class="nv">$gray-100</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dark-text-emphasis-dark</span><span class="o">:</span>           <span class="nv">$gray-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$primary-bg-subtle-dark</span><span class="o">:</span>            <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$primary</span><span class="o">,</span> <span class="mi">80</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$secondary-bg-subtle-dark</span><span class="o">:</span>          <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$secondary</span><span class="o">,</span> <span class="mi">80</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$success-bg-subtle-dark</span><span class="o">:</span>            <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$success</span><span class="o">,</span> <span class="mi">80</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$info-bg-subtle-dark</span><span class="o">:</span>               <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$info</span><span class="o">,</span> <span class="mi">80</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$warning-bg-subtle-dark</span><span class="o">:</span>            <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$warning</span><span class="o">,</span> <span class="mi">80</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$danger-bg-subtle-dark</span><span class="o">:</span>             <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$danger</span><span class="o">,</span> <span class="mi">80</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$light-bg-subtle-dark</span><span class="o">:</span>              <span class="nv">$gray-800</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dark-bg-subtle-dark</span><span class="o">:</span>               <span class="nf">mix</span><span class="p">(</span><span class="nv">$gray-800</span><span class="o">,</span> <span class="nv">$black</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$primary-border-subtle-dark</span><span class="o">:</span>        <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$primary</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$secondary-border-subtle-dark</span><span class="o">:</span>      <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$secondary</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$success-border-subtle-dark</span><span class="o">:</span>        <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$success</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$info-border-subtle-dark</span><span class="o">:</span>           <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$info</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$warning-border-subtle-dark</span><span class="o">:</span>        <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$warning</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$danger-border-subtle-dark</span><span class="o">:</span>         <span class="nf">shade-color</span><span class="p">(</span><span class="nv">$danger</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$light-border-subtle-dark</span><span class="o">:</span>          <span class="nv">$gray-700</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dark-border-subtle-dark</span><span class="o">:</span>           <span class="nv">$gray-800</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$body-color-dark</span><span class="o">:</span>                   <span class="nv">$gray-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$body-bg-dark</span><span class="o">:</span>                      <span class="nv">$gray-900</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$body-secondary-color-dark</span><span class="o">:</span>         <span class="nf">rgba</span><span class="p">(</span><span class="nv">$body-color-dark</span><span class="o">,</span> <span class="mf">.75</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$body-secondary-bg-dark</span><span class="o">:</span>            <span class="nv">$gray-800</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$body-tertiary-color-dark</span><span class="o">:</span>          <span class="nf">rgba</span><span class="p">(</span><span class="nv">$body-color-dark</span><span class="o">,</span> <span class="mf">.5</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$body-tertiary-bg-dark</span><span class="o">:</span>             <span class="nf">mix</span><span class="p">(</span><span class="nv">$gray-800</span><span class="o">,</span> <span class="nv">$gray-900</span><span class="o">,</span> <span class="mi">50</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$body-emphasis-color-dark</span><span class="o">:</span>          <span class="nv">$white</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$border-color-dark</span><span class="o">:</span>                 <span class="nv">$gray-700</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$border-color-translucent-dark</span><span class="o">:</span>     <span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.15</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$headings-color-dark</span><span class="o">:</span>               <span class="ni">inherit</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$link-color-dark</span><span class="o">:</span>                   <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$primary</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$link-hover-color-dark</span><span class="o">:</span>             <span class="nf">shift-color</span><span class="p">(</span><span class="nv">$link-color-dark</span><span class="o">,</span> <span class="o">-</span><span class="nv">$link-shade-percentage</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$code-color-dark</span><span class="o">:</span>                   <span class="nf">tint-color</span><span class="p">(</span><span class="nv">$code-color</span><span class="o">,</span> <span class="mi">40</span><span class="kt">%</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$mark-color-dark</span><span class="o">:</span>                   <span class="nv">$body-color-dark</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$mark-bg-dark</span><span class="o">:</span>                      <span class="nv">$yellow-800</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">//
</span></span></span><span class="line"><span class="cl"><span class="c1">// Forms
</span></span></span><span class="line"><span class="cl"><span class="c1">//
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="nv">$form-select-indicator-color-dark</span><span class="o">:</span>  <span class="nv">$body-color-dark</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$form-select-indicator-dark</span><span class="o">:</span>        <span class="sx">url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'&gt;&lt;path fill='none' stroke='</span><span class="si">#{</span><span class="nv">$form-select-indicator-color-dark</span><span class="si">}</span><span class="sx">' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/&gt;&lt;/svg&gt;")</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$form-switch-color-dark</span><span class="o">:</span>            <span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.25</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$form-switch-bg-image-dark</span><span class="o">:</span>         <span class="sx">url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'&gt;&lt;circle r='3' fill='</span><span class="si">#{</span><span class="nv">$form-switch-color-dark</span><span class="si">}</span><span class="sx">'/&gt;&lt;/svg&gt;")</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$form-valid-color-dark</span><span class="o">:</span>             <span class="nv">$green-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$form-valid-border-color-dark</span><span class="o">:</span>      <span class="nv">$green-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$form-invalid-color-dark</span><span class="o">:</span>           <span class="nv">$red-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$form-invalid-border-color-dark</span><span class="o">:</span>    <span class="nv">$red-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">//
</span></span></span><span class="line"><span class="cl"><span class="c1">// Accordion
</span></span></span><span class="line"><span class="cl"><span class="c1">//
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>
</span></span><span class="line"><span class="cl"><span class="nv">$accordion-icon-color-dark</span><span class="o">:</span>         <span class="nv">$primary-text-emphasis-dark</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$accordion-icon-active-color-dark</span><span class="o">:</span>  <span class="nv">$primary-text-emphasis-dark</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$accordion-button-icon-dark</span><span class="o">:</span>         <span class="sx">url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='</span><span class="si">#{</span><span class="nv">$accordion-icon-color-dark</span><span class="si">}</span><span class="sx">'&gt;&lt;path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/&gt;&lt;/svg&gt;")</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$accordion-button-active-icon-dark</span><span class="o">:</span>  <span class="sx">url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='</span><span class="si">#{</span><span class="nv">$accordion-icon-active-color-dark</span><span class="si">}</span><span class="sx">'&gt;&lt;path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/&gt;&lt;/svg&gt;")</span><span class="p">;</span>
</span></span></code></pre>
        </div>
      </div>
      <h3 id="sass-mixins">
        Sass mixins
        <a
          class="anchor-link"
          href="#sass-mixins"
          aria-label="Link to this section: Sass mixins"
        ></a>
      </h3>
      <p>
        Styles for dark mode, and any custom color modes you create,
        can be scoped appropriately to the
        <code>data-bs-theme</code> attribute selector or media query
        with the customizable <code>color-mode()</code> mixin. See
        the <a href="#building-with-sass">Sass usage section</a> for
        more details.
      </p>
      <div class="bd-example-snippet bd-code-snippet bd-file-ref">
        <div
          class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom"
        >
          <a
            class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
            href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/mixins/_color-mode.scss"
            >scss/mixins/_color-mode.scss</a
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
          ><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@mixin</span><span class="nf"> color-mode</span><span class="p">(</span><span class="nv">$mode</span><span class="o">:</span> <span class="ni">light</span><span class="o">,</span> <span class="nv">$root</span><span class="o">:</span> <span class="n">false</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">@if</span> <span class="nv">$color-mode-type</span> <span class="o">==</span> <span class="s2">"media-query"</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="k">@if</span> <span class="nv">$root</span> <span class="o">==</span> <span class="n">true</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="k">@media</span> <span class="p">(</span><span class="n">prefers-color-scheme</span><span class="o">:</span> <span class="nv">$mode</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="nd">:root</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">          <span class="k">@content</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">        <span class="p">}</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span> <span class="k">@else</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="k">@media</span> <span class="p">(</span><span class="n">prefers-color-scheme</span><span class="o">:</span> <span class="nv">$mode</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="k">@content</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span> <span class="k">@else</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="o">[</span><span class="nt">data-bs-theme</span><span class="o">=</span><span class="s2">"</span><span class="si">#{</span><span class="nv">$mode</span><span class="si">}</span><span class="s2">"</span><span class="o">]</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="k">@content</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  setupPage(title, sub, content, id);
}