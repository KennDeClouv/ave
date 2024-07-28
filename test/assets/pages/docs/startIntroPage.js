import {setupPage} from "../setupPage.js";

export function startIntroPage() {
  const title = "Getting Started";
  const sub = "Introduction";
  const id = "toStartIntroPage"
  const content = `
  <div class="card">
  <div class="card-header">
    <h3 class="card-title">Quick start</h3>
  </div>
  <div class="card-body fs-5">
    <div class="bd-content ps-lg-2">
      <p>
        Get started by including Avee’s production-ready CSS
        and JavaScript via CDN without the need for any build steps.
        See it in practice with this.
      </p>
      <br />
      <ol>
        <li>
          <p>
            <strong
              >Create a new <code>index.html</code> file in your
              project root.</strong
            >
            Include the
            <code>&lt;meta name="viewport"&gt;</code> tag as well
            for
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"
              >proper responsive behavior</a
            >
            in mobile devices.
          </p>
          <div class="bd-code-snippet">
            <div class="bd-clipboard">
              <button type="button" class="btn-clipboard" id="intro-1">
                <i class="bi bi-copy"></i>
              </button>
            </div>
            <div class="highlight">
              <pre
                tabindex="0"
                class="chroma"
              ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="cp">&lt;!doctype html&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"utf-8"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Avee demo<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">h1</span><span class="p">&gt;</span>Hello, world!<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</span></span></code></pre>
            </div>
          </div>
        </li>
        <li>
          <p>
            <strong>Include Avee’s CSS and JS.</strong> Place
            the <code>&lt;link&gt;</code> tag in the
            <code>&lt;head&gt;</code> for our CSS, and the
            <code>&lt;script&gt;</code> tag for our JavaScript
            bundle (including Popper for positioning dropdowns,
            poppers, and tooltips) before the closing
            <code>&lt;/body&gt;</code>. Learn more about our
            <a href="#cdn-links">CDN links</a>.
          </p>
          <div class="bd-code-snippet">
            <div class="bd-clipboard">
              <button type="button" class="btn-clipboard" id="intro-1">
                <i class="bi bi-copy"></i>
              </button>
            </div>
            <div class="highlight">
              <pre
                tabindex="0"
                class="chroma"
              ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="cp">&lt;!doctype html&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"utf-8"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Avee demo<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://zulldevv.github.io/ave/dist/css/ave.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">head</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">body</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">h1</span><span class="p">&gt;</span>Hello, world!<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://zulldevv.github.io/ave/dist/js/ave.min.js"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">body</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</span></span></code></pre>
            </div>
          </div>
        </li>
        <li>
          <p>
            <strong>Hello, world!</strong> Open the page in your
            browser of choice to see your Aveeped page. Now you
            can start building with Avee by creating your own
            <a href="/docs/5.3/layout/grid/">layout</a>, adding
            dozens of
            <a href="/docs/5.3/components/buttons/">components</a>,
            and utilizing
            <a href="/docs/5.3/examples/">our official examples</a>.
          </p>
        </li>
      </ol>
      <h2 id="cdn-links">
        CDN links
        <a
          class="anchor-link"
          href="#cdn-links"
          aria-label="Link to this section: CDN links"
        ></a>
      </h2>
      <p>As reference, here are our primary CDN links.</p>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSS</td>
              <td>
                <code
                  >https://zulldevv.github.io/ave/dist/css/ave.css</code
                >
              </td>
            </tr>
            <tr>
              <td>JS</td>
              <td>
                <code
                  >https://zulldevv.github.io/ave/dist/js/ave.min.js</code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        You can also use the CDN to fetch any of our
        <a href="/docs/5.3/getting-started/contents/"
          >additional builds listed in the Contents page</a
        >.
      </p>
      <h2 id="next-steps">
        Next steps
        <a
          class="anchor-link"
          href="#next-steps"
          aria-label="Link to this section: Next steps"
        ></a>
      </h2>
      <ul>
        <li>
          Read a bit more about some
          <a href="#important-globals"
            >important global environment settings</a
          >
          that Avee utilizes.
        </li>
        <li>
          Read about what’s included in Avee in our
          <a href="/docs/5.3/getting-started/contents/"
            >contents section</a
          >
          and the list of
          <a href="#js-components"
            >components that require JavaScript</a
          >
          below.
        </li>
        <li>
          Need a little more power? Consider building with Avee
          by
          <a
            href="/docs/5.3/getting-started/download/#package-managers"
            >including the source files via package manager</a
          >.
        </li>
      </ul>
      <h2 id="js-components">
        JS components
        <a
          class="anchor-link"
          href="#js-components"
          aria-label="Link to this section: JS components"
        ></a>
      </h2>
      <p>
        Curious which components explicitly require our JavaScript
        and Popper? If you’re at all unsure about the general page
        structure, keep reading for an example page template.
      </p>
      <ul>
        <li>Alerts for dismissing</li>
        <li>
          Buttons for toggling states and checkbox/radio
          functionality
        </li>
        <li>
          Carousel for all slide behaviors, controls, and indicators
        </li>
        <li>Collapse for toggling visibility of content</li>
        <li>
          Dropdowns for displaying and positioning (also requires
          <a href="https://popper.js.org/">Popper</a>)
        </li>
        <li>
          Modals for displaying, positioning, and scroll behavior
        </li>
        <li>
          Navbar for extending our Collapse and Offcanvas plugins to
          implement responsive behaviors
        </li>
        <li>Navs with the Tab plugin for toggling content panes</li>
        <li>
          Offcanvases for displaying, positioning, and scroll
          behavior
        </li>
        <li>
          Scrollspy for scroll behavior and navigation updates
        </li>
        <li>Toasts for displaying and dismissing</li>
        <li>
          Tooltips and popovers for displaying and positioning (also
          requires <a href="https://popper.js.org/">Popper</a>)
        </li>
      </ul>
      <h2 id="important-globals">
        Important globals
        <a
          class="anchor-link"
          href="#important-globals"
          aria-label="Link to this section: Important globals"
        ></a>
      </h2>
      <p>
        Avee employs a handful of important global styles and
        settings, all of which are almost exclusively geared towards
        the <em>normalization</em> of cross browser styles. Let’s
        dive in.
      </p>
      <h3 id="html5-doctype">
        HTML5 doctype
        <a
          class="anchor-link"
          href="#html5-doctype"
          aria-label="Link to this section: HTML5 doctype"
        ></a>
      </h3>
      <p>
        Avee requires the use of the HTML5 doctype. Without it,
        you’ll see some funky and incomplete styling.
      </p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
              <button type="button" class="btn-clipboard" id="intro-1">
                <i class="bi bi-copy"></i>
              </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="cp">&lt;!doctype html&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"en"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  ...
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</span></span></code></pre>
        </div>
      </div>
      <h3 id="viewport-meta">
        Viewport meta
        <a
          class="anchor-link"
          href="#viewport-meta"
          aria-label="Link to this section: Viewport meta"
        ></a>
      </h3>
      <p>
        Avee is developed <em>mobile first</em>, a strategy in
        which we optimize code for mobile devices first and then
        scale up components as necessary using CSS media queries. To
        ensure proper rendering and touch zooming for all devices,
        add the responsive viewport meta tag to your
        <code>&lt;head&gt;</code>.
      </p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
              <button type="button" class="btn-clipboard" id="intro-1">
                <i class="bi bi-copy"></i>
              </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">meta</span> <span class="na">name</span><span class="o">=</span><span class="s">"viewport"</span> <span class="na">content</span><span class="o">=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="p">&gt;</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        You can see an example of this in action in the
        <a href="#quick-start">quick start</a>.
      </p>
      <h3 id="box-sizing">
        Box-sizing
        <a
          class="anchor-link"
          href="#box-sizing"
          aria-label="Link to this section: Box-sizing"
        ></a>
      </h3>
      <p>
        For more straightforward sizing in CSS, we switch the global
        <code>box-sizing</code> value from
        <code>content-box</code> to <code>border-box</code>. This
        ensures <code>padding</code> does not affect the final
        computed width of an element, but it can cause problems with
        some third-party software like Google Maps and Google Custom
        Search Engine.
      </p>
      <p>
        On the rare occasion you need to override it, use something
        like the following:
      </p>
      <div class="bd-code-snippet">
        <div class="bd-clipboard">
              <button type="button" class="btn-clipboard" id="intro-1">
                <i class="bi bi-copy"></i>
              </button>
        </div>
        <div class="highlight">
          <pre
            tabindex="0"
            class="chroma"
          ><code class="language-css" data-lang="css"><span class="line"><span class="cl"><span class="p">.</span><span class="nc">selector-for-some-widget</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">box-sizing</span><span class="p">:</span> <span class="kc">content-box</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre>
        </div>
      </div>
      <p>
        With the above snippet, nested elements—including generated
        content via <code>::before</code> and
        <code>::after</code>—will all inherit the specified
        <code>box-sizing</code> for that
        <code>.selector-for-some-widget</code>.
      </p>
      <p>
        Learn more about
        <a href="https://css-tricks.com/box-sizing/"
          >box model and sizing at CSS Tricks</a
        >.
      </p>
      <h3 id="reboot">
        Reboot
        <a
          class="anchor-link"
          href="#reboot"
          aria-label="Link to this section: Reboot"
        ></a>
      </h3>
      <p>
        For improved cross-browser rendering, we use
        <a href="/docs/5.3/content/reboot/">Reboot</a> to correct
        inconsistencies across browsers and devices while providing
        slightly more opinionated resets to common HTML elements.
      </p>

      <p class="mt-5">
        You can follow
        <a href="https://x.com/ryhaabf"
          >@getbootstrap on Twitter</a
        >
        for the latest gossip and awesome music videos.
      </p>
    </div>
  </div>
</div>
  `;
  setupPage(title, sub, content, id);
}
