import{_ as s,o as a,c as n,a as l}from"./app.e7cff7dd.js";var p="/images/web/pnpmtest.png";const d=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u521B\u5EFA test \u6587\u4EF6\u5939","slug":"\u521B\u5EFA-test-\u6587\u4EF6\u5939"},{"level":2,"title":"\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E","slug":"\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E"},{"level":2,"title":"\u6DFB\u52A0\u7F16\u8BD1\u6587\u4EF6","slug":"\u6DFB\u52A0\u7F16\u8BD1\u6587\u4EF6"},{"level":3,"title":"vite.config.ts \u5BFC\u5165\u914D\u7F6E","slug":"vite-config-ts-\u5BFC\u5165\u914D\u7F6E"},{"level":2,"title":"\u521B\u5EFAindex.spec.ts\u6587\u4EF6","slug":"\u521B\u5EFAindex-spec-ts\u6587\u4EF6"},{"level":2,"title":"\u914D\u7F6E package.json \u6DFB\u52A0 test \u547D\u4EE4","slug":"\u914D\u7F6E-package-json-\u6DFB\u52A0-test-\u547D\u4EE4"},{"level":2,"title":"\u8FD0\u884C\u6D4B\u8BD5","slug":"\u8FD0\u884C\u6D4B\u8BD5"},{"level":2,"title":"\u6D4B\u8BD5\u7ED3\u679C","slug":"\u6D4B\u8BD5\u7ED3\u679C"}],"relativePath":"vitest/study01.md"}'),o={name:"vitest/study01.md"},e=l(`<div class="info custom-block"><p class="custom-block-title">Vitest</p><p>\u662F\u4E00\u4E2A\u7531 vite \u63D0\u4F9B\u7684\u5FEB\u901F\u7684\u5355\u5143\u6D4B\u8BD5\u6846\u67B6</p><p>\u6CA1\u4E86~\u7B80\u6D01\u660E\u4E86\uFF5E <a href="https://cn.vitest.dev/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a></p></div><p>\u5355\u5143\u6D4B\u8BD5\u5728\u4EE3\u7801\u6539\u52A8\u65F6\uFF0C\u6709\u54EA\u4E9B\u597D\u5904\u5462\uFF1F</p><ol><li>\u4FDD\u8BC1\u4EE3\u7801\u8D28</li></ol><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i vitest </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA-test-\u6587\u4EF6\u5939" tabindex="-1">\u521B\u5EFA <code>test</code> \u6587\u4EF6\u5939 <a class="header-anchor" href="#\u521B\u5EFA-test-\u6587\u4EF6\u5939" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u4F1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>test</code> \u6587\u4EF6\u5939\uFF0C\u7528\u6765\u5B58\u653E\u6240\u6709\u7684\u6D4B\u8BD5\u6587\u4EF6\u3002</p><p><code>test</code> \u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u4E00\u822C\u4EE5 <code>.spec.ts</code> \u6216 <code>.test.ts</code> \u7ED3\u5C3E\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>vite</code> \u7684 <code>glob</code> \u529F\u80FD\u6765\u81EA\u52A8\u52A0\u8F7D\u6240\u6709\u7684\u6D4B\u8BD5\u6587\u4EF6\u3002</p><p>\u521B\u5EFA<code>viteConfig.ts</code>\u6587\u4EF6\uFF0C\u7528\u6765\u5C01\u88C5<code>vite</code>\u7684\u914D\u7F6E</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">vitest</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span><span style="color:#676E95;font-style:italic;"> </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UserConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitest/config</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vitestConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserConfig</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">lobals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u652F\u6301\u5168\u5C40\u5BFC\u5305</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u5728<code>tsconfig.json</code>\u4E2D\u6DFB\u52A0 <code>types</code></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest/globals</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DFB\u52A0\u7F16\u8BD1\u6587\u4EF6" tabindex="-1">\u6DFB\u52A0\u7F16\u8BD1\u6587\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0\u7F16\u8BD1\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u5728<code>tsconfig.node.json</code>\u4E2D\u6DFB\u52A0 &quot;vite.config.ts&quot;</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite.config.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitestConfig.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="vite-config-ts-\u5BFC\u5165\u914D\u7F6E" tabindex="-1"><code>vite.config.ts</code> \u5BFC\u5165\u914D\u7F6E <a class="header-anchor" href="#vite-config-ts-\u5BFC\u5165\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vitestConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vitestConfig</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">vitestConfig</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFAindex-spec-ts\u6587\u4EF6" tabindex="-1">\u521B\u5EFA<code>index.spec.ts</code>\u6587\u4EF6 <a class="header-anchor" href="#\u521B\u5EFAindex-spec-ts\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">expect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E00\u4E2A\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> loading </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/Loading/index.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B 1</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B 2</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B 3</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">loading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E-package-json-\u6DFB\u52A0-test-\u547D\u4EE4" tabindex="-1">\u914D\u7F6E <code>package.json</code> \u6DFB\u52A0 <code>test</code> \u547D\u4EE4 <a class="header-anchor" href="#\u914D\u7F6E-package-json-\u6DFB\u52A0-test-\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1">\u8FD0\u884C\u6D4B\u8BD5 <a class="header-anchor" href="#\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run test</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6D4B\u8BD5\u7ED3\u679C" tabindex="-1">\u6D4B\u8BD5\u7ED3\u679C <a class="header-anchor" href="#\u6D4B\u8BD5\u7ED3\u679C" aria-hidden="true">#</a></h2><p><img src="`+p+'" alt="run"></p><p>\u5728\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230 3 \u4E2A\u6D4B\u8BD5\u7528\u4F8B\u90FD\u7EFF\u8272\u901A\u8FC7\u4E86</p>',27),t=[e];function c(r,D,y,F,i,C){return a(),n("div",null,t)}var u=s(o,[["render",c]]);export{d as __pageData,u as default};
