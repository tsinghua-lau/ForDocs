import{_ as s,o as a,c as n,R as e}from"./chunks/framework.af956f17.js";const F=JSON.parse('{"title":"Frontmatter - VitePress中文文档","description":"VitePress中文文档之Frontmatter","frontmatter":{"title":"Frontmatter - VitePress中文文档","description":"VitePress中文文档之Frontmatter","tags":["VitePress中文文档,Frontmatter"],"head":[["meta",{"name":"keywords","content":"VitePress中文文档,Frontmatter"}]]},"headers":[],"relativePath":"vitepressCn/Frontmatter.md"}'),t={name:"vitepressCn/Frontmatter.md"},l=e(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h1><details class="details custom-block"><summary>原文</summary><p>Any Markdown file that contains a YAML frontmatter block will be processed by <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div><p>Between the triple-dashed lines, you can set <a href="https://vitepress.vuejs.org/config/frontmatter-configs.html" target="_blank" rel="noreferrer">predefined variables</a>, or even create custom ones of your own. These variables can be used via the special $frontmatter variable.</p><p>Here’s an example of how you could use it in your Markdown file:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">{{ $frontmatter.title }}</span></span>
<span class="line"><span style="color:#A6ACCD;">Guide content</span></span></code></pre></div></details><p>任何包含 YAML 前言块的 Markdown 文件都将被<a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>处理。Frontmatter 的内容必须是在 Markdown 文件的顶部，并且必须采取有效的 YAML 形式，设置在三段虚线之间。</p><p>如：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div><p>在三条虚线之间，你可以设置<a href="/vitepressCn/config-frontmatter.html">预定义的变量</a>，甚至可以创建你自己的自定义变量。这些变量可以通过特殊的<code>$frontmatter</code>变量使用。</p><p>下面是一个例子，说明你如何在你的 Markdown 文件中使用它：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">{{ $frontmatter.title }}</span></span>
<span class="line"><span style="color:#A6ACCD;">Guide content</span></span></code></pre></div><h2 id="frontmatter-语法-json-格式" tabindex="-1">Frontmatter 语法 JSON 格式 <a class="header-anchor" href="#frontmatter-语法-json-格式" aria-label="Permalink to &quot;Frontmatter 语法 JSON 格式&quot;">​</a></h2><p>VitePress 还支持<code>JSON</code>格式的 Frontmatter 语法，以大括号({})开始和结束：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Blogging Like a Hacker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editLink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div>`,11),o=[l];function p(r,c,i,y,d,C){return a(),n("div",null,o)}const m=s(t,[["render",p]]);export{F as __pageData,m as default};
