import { setupPage } from "../setupPage.js";

export function LayoutContainersPage() {
  const title = "Layout";
  const sub = "Containers";
  const id = "toLayoutContainersPage";
  const content = `
  <div class="card">
  <div class="card-header">
    <h3 class="card-title">Quick start</h3>
  </div>
  <div class="card-body px-5 fs-5">
    <div class="bd-content ps-lg-2">


      <h2 id="how-they-work">How they work <a class="anchor-link" href="#how-they-work" aria-label="Link to this section: How they work"></a></h2>
<p>Containers are the most basic layout element in Avee and are <strong>required when using our default grid system</strong>. Containers are used to contain, pad, and (sometimes) center the content within them. While containers <em>can</em> be nested, most layouts do not require a nested container.</p>
<p>Avee comes with three different containers:</p>
<ul>
<li><code>.container</code>, which sets a <code>max-width</code> at each responsive breakpoint</li>
<li><code>.container-{breakpoint}</code>, which is <code>width: 100%</code> until the specified breakpoint</li>
<li><code>.container-fluid</code>, which is <code>width: 100%</code> at all breakpoints</li>
</ul>
<p>The table below illustrates how each container’s <code>max-width</code> compares to the original <code>.container</code> and <code>.container-fluid</code> across each breakpoint.</p>
<p>See them in action and compare them in our <a href="/docs/5.3/examples/grid/#containers">Grid example</a>.</p>
<div class="table-responsive"><table class="table">
<thead>
<tr>
<th></th>
<th>Extra small<div class="fw-normal">&lt;576px</div></th>
<th>Small<div class="fw-normal">≥576px</div></th>
<th>Medium<div class="fw-normal">≥768px</div></th>
<th>Large<div class="fw-normal">≥992px</div></th>
<th>X-Large<div class="fw-normal">≥1200px</div></th>
<th>XX-Large<div class="fw-normal">≥1400px</div></th>
<th>2X-Large<div class="fw-normal">≥2000px</div></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.container</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td>540px</td>
<td>720px</td>
<td>960px</td>
<td>1140px</td>
<td>1320px</td>
<td>1960px</td>
</tr>
<tr>
<td><code>.container-sm</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td>540px</td>
<td>720px</td>
<td>960px</td>
<td>1140px</td>
<td>1320px</td>
<td>1960px</td>
</tr>
<tr>
<td><code>.container-md</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td>720px</td>
<td>960px</td>
<td>1140px</td>
<td>1320px</td>
<td>1960px</td>
</tr>
<tr>
<td><code>.container-lg</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td>960px</td>
<td>1140px</td>
<td>1320px</td>
<td>1960px</td>
</tr>
<tr>
<td><code>.container-xl</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td>1140px</td>
<td>1320px</td>
<td>1960px</td>
</tr>
<tr>
<td><code>.container-xxl</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td>1320px</td>
<td>1960px</td>
</tr>
<tr>
<td><code>.container-fluid</code></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>
<td><span class="text-body-secondary">100%</span></td>

</tr>
</tbody>
</table></div>

<h2 id="default-container">Default container <a class="anchor-link" href="#default-container" aria-label="Link to this section: Default container"></a></h2>
<p>Our default <code>.container</code> class is a responsive, fixed-width container, meaning its <code>max-width</code> changes at each breakpoint.</p>
<div class="bd-code-snippet">  <div class="bd-clipboard">    <button type="button" class="btn-clipboard">      <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"></use></svg>    </button>  </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="c">&lt;!-- Content here --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div></div><h2 id="responsive-containers">Responsive containers <a class="anchor-link" href="#responsive-containers" aria-label="Link to this section: Responsive containers"></a></h2>
<p>Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply <code>max-width</code>s for each of the higher breakpoints. For example, <code>.container-sm</code> is 100% wide to start until the <code>sm</code> breakpoint is reached, where it will scale up with <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.</p>
<div class="bd-code-snippet">  <div class="bd-clipboard">    <button type="button" class="btn-clipboard">      <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"></use></svg>    </button>  </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container-sm"</span><span class="p">&gt;</span>100% wide until small breakpoint<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container-md"</span><span class="p">&gt;</span>100% wide until medium breakpoint<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container-lg"</span><span class="p">&gt;</span>100% wide until large breakpoint<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container-xl"</span><span class="p">&gt;</span>100% wide until extra large breakpoint<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container-xxl"</span><span class="p">&gt;</span>100% wide until extra extra large breakpoint<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div></div><h2 id="fluid-containers">Fluid containers <a class="anchor-link" href="#fluid-containers" aria-label="Link to this section: Fluid containers"></a></h2>
<p>Use <code>.container-fluid</code> for a full width container, spanning the entire width of the viewport.</p>
<div class="bd-code-snippet">  <div class="bd-clipboard">    <button type="button" class="btn-clipboard">      <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"></use></svg>    </button>  </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container-fluid"</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  ...
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div></div><h2 id="css">CSS <a class="anchor-link" href="#css" aria-label="Link to this section: CSS"></a></h2>
<h3 id="sass-variables">Sass variables <a class="anchor-link" href="#sass-variables" aria-label="Link to this section: Sass variables"></a></h3>
<p>As shown above, Avee generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in <code>_variables.scss</code>) that powers them:</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
  <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
    <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v1.0.0/scss/_variables.scss">scss/_variables.scss</a>
    <div class="d-flex ms-auto">
      <button type="button" class="btn-clipboard mt-0 me-0" aria-label="Copy to clipboard" data-bs-original-title="Copy to clipboard">
        <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"></use></svg>
      </button>
    </div>
  </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$container-max-widths</span><span class="o">:</span> <span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="na">sm</span><span class="o">:</span> <span class="mi">540</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">md</span><span class="o">:</span> <span class="mi">720</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">lg</span><span class="o">:</span> <span class="mi">960</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">xl</span><span class="o">:</span> <span class="mi">1140</span><span class="kt">px</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="na">xxl</span><span class="o">:</span> <span class="mi">1320</span><span class="kt">px</span>
</span></span><span class="line"><span class="cl"><span class="p">);</span>
</span></span></code></pre></div></div>
<p>For more information and examples on how to modify our Sass maps and variables, please refer to <a href="/docs/5.3/layout/grid/#css">the Sass section of the Grid documentation</a>.</p>
<h3 id="sass-mixins">Sass mixins <a class="anchor-link" href="#sass-mixins" aria-label="Link to this section: Sass mixins"></a></h3>
<p>In addition to customizing the Sass, you can also create your own containers with our Sass mixin.</p>
<div class="bd-code-snippet">  <div class="bd-clipboard">    <button type="button" class="btn-clipboard">      <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"></use></svg>    </button>  </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="c1">// Source mixin
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="k">@mixin</span><span class="nf"> make-container</span><span class="p">(</span><span class="nv">$padding-x</span><span class="o">:</span> <span class="nv">$container-padding-x</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">width</span><span class="o">:</span> <span class="mi">100</span><span class="kt">%</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">padding-right</span><span class="o">:</span> <span class="nv">$padding-x</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">padding-left</span><span class="o">:</span> <span class="nv">$padding-x</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">margin-right</span><span class="o">:</span> <span class="ni">auto</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">margin-left</span><span class="o">:</span> <span class="ni">auto</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c1">// Usage
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nc">.custom-container</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">@include</span><span class="nd"> make-container</span><span class="p">();</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div></div>
    </div>
  </div>
</div>
  `;
  setupPage(title, sub, content, id);
}
