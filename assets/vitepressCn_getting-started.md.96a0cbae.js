import{_ as s,o as a,c as e,R as n}from"./chunks/framework.af956f17.js";const u=JSON.parse('{"title":"VitePress入门 - VitePress中文文档","description":"VitePress中文文档之VitePress入门","frontmatter":{"title":"VitePress入门 - VitePress中文文档","description":"VitePress中文文档之VitePress入门","tags":["VitePress中文文档,VitePress入门"],"head":[["meta",{"name":"keywords","content":"VitePress中文文档,VitePress入门"}]]},"headers":[],"relativePath":"vitepressCn/getting-started.md"}'),o={name:"vitepressCn/getting-started.md"},t=n(`<h1 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h1><details class="details custom-block"><summary>原文</summary><p>This section will help you build a basic VitePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>VitePress is currently in alpha status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.</p></div></details><p>本节将帮助你从头开始建立一个基本的VitePress文档网站。如果你已经有一个现有的项目，并希望在项目中保留文档，请从第2步开始。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>VitePress 目前处于 alpha 状态。它已经适合于开箱即用的文档站点使用，但配置和主题化的 API 仍可能在小版本之间发生变化。</p></div><h2 id="step-1-创建新项目" tabindex="-1">Step. 1: 创建新项目 <a class="header-anchor" href="#step-1-创建新项目" aria-label="Permalink to &quot;Step. 1: 创建新项目&quot;">​</a></h2><p>创建并进入新目录</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-starter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-starter</span></span></code></pre></div><p>然后初始化包管理器</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h2 id="step-2-安装-vitepress" tabindex="-1">Step. 2: 安装 VitePress <a class="header-anchor" href="#step-2-安装-vitepress" aria-label="Permalink to &quot;Step. 2: 安装 VitePress&quot;">​</a></h2><p>安装 VitePress 和 Vue 作为项目的开发依赖</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span></code></pre></div><details class="details custom-block"><summary>相关依赖缺失警告？</summary><p>@docsearch/js 如果看到相关依赖缺失引起的失败，你可以尝试使用以下解决方案:</p><p>On Yarn v2/v3, 将其添加到你的 rc 文件中 (.yarnrc.yml by default):</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">packageExtensions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@docsearch/react@*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">peerDependenciesMeta</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@types/react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">optional</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">optional</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">optional</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div><p>On PNPM, 添加到你的 package.json:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">peerDependencyRules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignoreMissing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@algolia/client-search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@types/react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details><p>创建第一个文档</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"># Hello VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/index.md</span></span></code></pre></div><h2 id="step-3-开启开发环境" tabindex="-1">Step. 3: 开启开发环境 <a class="header-anchor" href="#step-3-开启开发环境" aria-label="Permalink to &quot;Step. 3: 开启开发环境&quot;">​</a></h2><p>在 package.json 中添加脚本命令</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在本地开发环境开启服务器</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div><p>VitePress 将在 <code>http://localhost:3000</code>，启动热重载开发服务器。</p><h2 id="step-4-添加更多页面" tabindex="-1">Step. 4: 添加更多页面 <a class="header-anchor" href="#step-4-添加更多页面" aria-label="Permalink to &quot;Step. 4: 添加更多页面&quot;">​</a></h2><details class="details custom-block"><summary>原文</summary><p>Let&#39;s add another page to the site. Create a file name getting-started.md along with index.md you&#39;ve created in Step. 2. Now your directory structure should look like this.</p></details><p>让我们在网站上添加另一个页面。与你在步骤 2 中创建的 index.md 一样创建一个名为 getting-started.md 的文件。现在你的目录结构应该是这样的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ getting-started.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ package.json</span></span></code></pre></div><details class="details custom-block"><summary>原文</summary><p>Then, try to access <code>http://localhost:3000/getting-started</code> and you should see the content of getting-started is shown.</p><p>This is how VitePress works basically. The directory structure corresponds with the URL path. You add files, and just try to access it.</p></details><p>然后，尝试访问 <code>http://localhost:3000/getting-started</code> ，你应该看到显示的是 Getting-started 的内容。</p><p>这就是 VitePress 的基本工作方式。目录结构与 URL 路径相对应。你添加文件然后尝试访问它就可以了。</p><h2 id="下一步做什么" tabindex="-1">下一步做什么？ <a class="header-anchor" href="#下一步做什么" aria-label="Permalink to &quot;下一步做什么？&quot;">​</a></h2><details class="details custom-block"><summary>原文</summary><p>By now, you should have a basic but functional VitePress documentation site. But currently, the user has no way to navigate around the site because it&#39;s missing for example sidebar menu we have on this site.</p><p>To enable those navigations, we must add some configurations to the site. Head to <a href="https://vitepress.vuejs.org/guide/configuration.html" target="_blank" rel="noreferrer">configuration guide</a> to learn how to configure VitePress.</p><p>If you would like to know more about what you can do within the page, for example, writing markdown contents, or using Vue Component, check out the &quot;Writing&quot; section of the docs. <a href="https://vitepress.vuejs.org/guide/markdown.html" target="_blank" rel="noreferrer">Markdown guide</a> would be a great starting point.</p><p>If you want to know how to customize how the site looks (Theme), and find out the features VitePress&#39;s default theme provides, visit <a href="https://vitepress.vuejs.org/guide/theme-introduction.html" target="_blank" rel="noreferrer">Theme: Introduction</a>.</p><p>When your documentation site starts to take shape, be sure to read the <a href="https://vitepress.vuejs.org/guide/deploying.html" target="_blank" rel="noreferrer">deployment guide</a>.</p></details><p>现在，你应该有一个基础功能的 VitePress 文档网站。但目前用户没有办法在网站上进行导航，因为它缺少例如我们在这个网站上的侧边栏菜单。</p><p>要启用这些导航功能，我们必须在网站上添加一些配置。前往<a href="/vitepressCn/configuration.html">配置指南</a>，了解如何配置 VitePress。</p><p>如果你想了解更多关于你在页面内可以做的事情，例如，编写 markdown 内容，或使用 Vue 组件，请查看文档的 &quot;Markdown &quot;部分。<a href="/vitepressCn/markdown.html">Markdown 指南</a>将是一个很好的起点。</p><p>如果你想知道如何定制网站的外观（主题），并了解 VitePress 的默认主题提供的功能，请访问<a href="/vitepressCn/theme-introduction.html">主题介绍</a>。</p><p>当你的文档网站准备上线时，一定要阅读<a href="/vitepressCn/deploying.html">部署指南</a>。</p>`,35),l=[t];function p(r,c,i,y,D,d){return a(),e("div",null,l)}const C=s(o,[["render",p]]);export{u as __pageData,C as default};
