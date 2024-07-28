import { setupPage } from "../setupPage.js";

export function startDownloadPage() {
  const title = "Getting Started";
  const sub = "Download";
  const id = "toStartDownloadPage";
  const content = `
  <div class="card">
  <div class="card-header">
    <h3 class="card-title">Download</h3>
  </div>
  <div class="card-body fs-5">
    <div class="bd-content ps-lg-2">
      <h2 id="compiled-css-and-js">
        Compiled CSS and JS
        <a
          class="anchor-link"
          href="#compiled-css-and-js"
          aria-label="Link to this section: Compiled CSS and JS"
        ></a>
      </h2>
      <p>
        Download ready-to-use compiled code for
        <strong>Avee v1.0.0</strong> to easily drop into your
        project, which includes:
      </p>
      <ul>
        <li>
          Compiled and minified CSS bundles
        </li>
        <li>
          Compiled and minified JavaScript plugins
        </li>
      </ul>
      <p>
        This doesn’t include documentation, source files, or any
        optional JavaScript dependencies like Popper.
      </p>
      <p>
        <a
          href="https://github.com/zulldevv/ave/archive/refs/tags/cdn.zip"
          class="btn btn-primary"
          onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Avee');"
          >Download</a
        >
      </p>
      <h2 id="source-files">
        Source files
        <a
          class="anchor-link"
          href="#source-files"
          aria-label="Link to this section: Source files"
        ></a>
      </h2>
      <p>
        Compile Avee with your own asset pipeline by
        downloading our source Sass, JavaScript, and documentation
        files. This option requires some additional tooling:
      </p>
      <ul>
        <li>
          <a href="/docs/5.3/getting-started/contribute/#sass"
            >Sass compiler</a
          >
          for compiling Sass source files into CSS files
        </li>
        <li>
          <a href="https://github.com/postcss/autoprefixer"
            >Autoprefixer</a
          >
          for CSS vendor prefixing
        </li>
      </ul>
      <p>
        Should you require our full set of
        <a
          href="/docs/5.3/getting-started/contribute/#tooling-setup"  
          >build tools</a
        >, they are included for developing Avee and its docs,
        but they’re likely unsuitable for your own purposes.
      </p>
      <p>
        <a
          href="https://github.com/twbs/bootstrap/archive/v1.0.0.zip"
          class="btn btn-bd-primary"
          onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');"
          >Download source</a
        >
      </p>
      <h2 id="examples">
        Examples
        <a
          class="anchor-link"
          href="#examples"
          aria-label="Link to this section: Examples"
        ></a>
      </h2>
      <p>
        If you want to download and examine our
        <a href="/docs/5.3/examples/">examples</a>, you can grab the
        already built examples:
      </p>
      <p>
        <a
          href="https://github.com/twbs/bootstrap/releases/download/v1.0.0/bootstrap-1.0.0-examples.zip"
          class="btn btn-bd-primary"
          onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Examples');"
          >Download Examples</a
        >
      </p>
      <h2 id="cdn-via-jsdelivr">
        CDN via github pages
        <a
          class="anchor-link"
          href="#cdn-via-jsdelivr"
          aria-label="Link to this section: CDN via jsDelivr"
        ></a>
      </h2>
      <p>
        Skip the download with
        <a href="https://www.jsdelivr.com/">Github</a> to deliver
        cached version of Avee’s compiled CSS and JS to your
        project.
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
          ><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">link</span> <span class="na">href</span><span class="o">=</span><span class="s">"https://zulldevv.github.io/ave/dist/css/ave.css"</span> <span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">script</span> <span class="na">src</span><span class="o">=</span><span class="s">"https://zulldevv.github.io/ave/dist/js/ave.min.js"</span> <span class="p">&gt;&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
</span></span></code></pre>
        </div>
      </div>
      
      <h2 id="npm">
        Npm
        <a
          class="anchor-link"
          href="#npm"
          aria-label="Link to this section: npm"
        ></a>
      </h2>
      <p>
        Install Avee in your Node.js powered apps with
        <a href="https://www.npmjs.com/package/bootstrap"
          >the npm package</a
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
          ><code class="language-sh" data-lang="sh"><span class="line"><span class="cl">npm install @zulldevv/ave@1.0.0
</span></span></code></pre>
        </div>
      </div>
      <p>
        <code>const bootstrap = require('bootstrap')</code> or
        <code>import bootstrap from 'bootstrap'</code> will load all
        of Avee’s plugins onto a <code>bootstrap</code> object.
        The <code>bootstrap</code> module itself exports all of our
        plugins. You can manually load Avee’s plugins
        individually by loading the <code>/js/dist/*.js</code> files
        under the package’s top-level directory.
      </p>
      <p>
        Avee’s <code>package.json</code> contains some
        additional metadata under the following keys:
      </p>
      <ul>
        <li>
          <code>sass</code> - path to Avee’s main
          <a href="https://sass-lang.com/">Sass</a> source file
        </li>
        <li>
          <code>style</code> - path to Avee’s non-minified CSS
          that’s been compiled using the default settings (no
          customization)
        </li>
      </ul>
      <div class="bd-callout bd-callout-info">
        <strong
          >Get started with Avee via npm with our starter
          project!</strong
        >
        Head to the
        <a href="https://github.com/twbs/examples/tree/main/sass-js"
          >Sass &amp; JS example</a
        >
        template repository to see how to build and customize
        Avee in your own npm project. Includes Sass compiler,
        Autoprefixer, Stylelint, PurgeCSS, and Avee Icons.
      </div>

    </div>
  </div>
</div>
      `;
  setupPage(title, sub, content, id);
}
