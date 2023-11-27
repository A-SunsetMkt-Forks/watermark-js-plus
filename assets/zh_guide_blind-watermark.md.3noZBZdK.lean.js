import{V as e}from"./chunks/theme.OusBniEz.js";import{w as A,p as D}from"./chunks/index.gFF-hrYj.js";import{u as $,B as b}from"./chunks/app.fJWdPnIV.js";import"./chunks/global.Qo6jmeRt.js";import{d as K,u as M,k as v,m as O,F as n,g as H,K as s,p as a,b as i,e as l,R as h,o as m,f as y,a as w,j as x,a3 as J}from"./chunks/framework.qtAzD2ty.js";import"./chunks/pinia.GC3HMCls.js";const U=a("h1",{id:"暗水印",tabindex:"-1"},[l("暗水印 "),a("a",{class:"header-anchor",href:"#暗水印","aria-label":'Permalink to "暗水印"'},"​")],-1),G=a("h2",{id:"文本暗水印",tabindex:"-1"},[l("文本暗水印 "),a("a",{class:"header-anchor",href:"#文本暗水印","aria-label":'Permalink to "文本暗水印"'},"​")],-1),Q={class:"text-blind-watermark"},X=h(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入水印插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello my watermark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加水印</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除水印</span></span></code></pre></div><p>👉 深色背景请添加参数：<code>fontColor: &#39;#fff&#39;</code></p>`,2),Y=a("h2",{id:"多行文本暗水印",tabindex:"-1"},[l("多行文本暗水印 "),a("a",{class:"header-anchor",href:"#多行文本暗水印","aria-label":'Permalink to "多行文本暗水印"'},"​")],-1),Z={class:"multiline-text-blind-watermark"},ss=h(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入水印插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contentType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multi-line-text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello my watermark watermark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fontSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加水印</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除水印</span></span></code></pre></div><p>👉 深色背景请添加参数：<code>fontColor: &#39;#fff&#39;</code></p>`,2),is=a("h2",{id:"图片暗水印",tabindex:"-1"},[l("图片暗水印 "),a("a",{class:"header-anchor",href:"#图片暗水印","aria-label":'Permalink to "图片暗水印"'},"​")],-1),as={class:"image-blind-watermark"},ns=h(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入水印插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contentType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imageWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 图片宽度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // imageHeight: 20, // 图片高度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加水印</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除水印</span></span></code></pre></div>`,1),ts=a("h2",{id:"富文本水印",tabindex:"-1"},[l("富文本水印 "),a("a",{class:"header-anchor",href:"#富文本水印","aria-label":'Permalink to "富文本水印"'},"​")],-1),es={class:"rich-text-blind-watermark"},ls=h(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入水印插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contentType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rich-text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;div style=&quot;background: #ccc;&quot;&gt;富文本暗水印 &lt;span style=&quot;color: #f00&quot;&gt;good&lt;/span&gt;&lt;/div&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加水印</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除水印</span></span></code></pre></div>`,1),hs=h(`<h2 id="解析暗水印" tabindex="-1">解析暗水印 <a class="header-anchor" href="#解析暗水印" aria-label="Permalink to &quot;解析暗水印&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入水印插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BlindWatermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url: uploadFile.url, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要解析暗水印图片的URL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">imageBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 解析成功后的回调事件，返回的是解析后图片的base64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,2),ys=JSON.parse('{"title":"暗水印","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/guide/blind-watermark.md","filePath":"zh/guide/blind-watermark.md"}'),ps={name:"zh/guide/blind-watermark.md"},ms=K({...ps,setup(ks){const t=$(),{isDark:u}=M(),p=J(),k=v(""),r=v("");O(()=>{});const W=()=>{t.createWatermark({content:"hello my watermark",fontColor:u.value?"#fff":"#000",width:200,height:200,onSuccess:()=>{p.appContext.config.globalProperties.$message({appendTo:"#app",message:"文本暗水印添加成功！",type:"success"})}},"blind")},S=()=>{t.removeWatermark()},j=()=>{t.createWatermark({contentType:"multi-line-text",content:"hello my multiline blind watermark",fontColor:u.value?"#fff":"#000",fontSize:30,width:200,height:200,onSuccess:()=>{p.appContext.config.globalProperties.$message({appendTo:"#app",message:"多行文本暗水印添加成功！",type:"success"})}},"blind")},T=()=>{t.removeWatermark()},P=()=>{t.createWatermark({contentType:"image",image:"https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",imageWidth:200,width:300,height:300,onSuccess:()=>{p.appContext.config.globalProperties.$message({appendTo:"#app",message:"图片暗水印添加成功！",type:"success"})}},"blind")},R=()=>{t.removeWatermark()},z=()=>{t.createWatermark({contentType:"rich-text",content:'<div style="background: #ccc;">富文本暗水印 <span style="color: #f00">good</span></div>',width:300,height:300,onSuccess:()=>{p.appContext.config.globalProperties.$message({appendTo:"#app",message:"富文本暗水印添加成功！",type:"success"})}},"blind")},V=()=>{t.removeWatermark()},q=d=>{b.decode({url:d.url,onSuccess:c=>{k.value=c}})},N=d=>{b.decode({compositeOperation:"overlay",fillColor:"#fff",url:d.url,onSuccess:c=>{r.value=c}})};return(d,c)=>{const I=n("el-backtop"),o=n("el-space"),E=n("el-affix"),g=n("el-icon"),F=n("el-link"),f=n("el-tooltip"),_=n("el-upload"),C=n("el-image"),B=n("el-col"),L=n("el-row");return m(),H("div",null,[U,s(I),G,a("div",Q,[X,s(E,{target:".text-blind-watermark",position:"bottom",offset:0},{default:i(()=>[s(o,{class:"block-operation"},{default:i(()=>[s(e,{text:"添加文本暗水印",onClick:W}),s(e,{text:"删除文本暗水印",onClick:S})]),_:1})]),_:1})]),Y,a("div",Z,[ss,s(E,{target:".multiline-text-blind-watermark",position:"bottom",offset:0},{default:i(()=>[s(o,{class:"block-operation"},{default:i(()=>[s(e,{text:"添加多行文本暗水印",onClick:j}),s(e,{text:"删除多行文本暗水印",onClick:T})]),_:1})]),_:1})]),is,a("div",as,[ns,s(E,{target:".image-blind-watermark",position:"bottom",offset:0},{default:i(()=>[s(o,{class:"block-operation"},{default:i(()=>[s(e,{text:"添加图片暗水印",onClick:P}),s(e,{text:"删除图片暗水印",onClick:R})]),_:1})]),_:1})]),ts,a("div",es,[ls,s(E,{target:".rich-text-blind-watermark",position:"bottom",offset:0},{default:i(()=>[s(o,{class:"block-operation"},{default:i(()=>[s(e,{text:"添加富文本暗水印",onClick:z}),s(e,{text:"删除富文本暗水印",onClick:V})]),_:1})]),_:1})]),hs,s(L,{gutter:20},{default:i(()=>[s(B,{span:12},{default:i(()=>[s(f,{content:"淡色背景图片时使用",placement:"right"},{default:i(()=>[s(F,{underline:!1},{default:i(()=>[l(" 淡色背景"),s(g,{class:"el-icon--right"},{default:i(()=>[s(y(A))]),_:1})]),_:1})]),_:1}),a("div",null,[s(_,{"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":q},{default:i(()=>[s(g,null,{default:i(()=>[s(y(D))]),_:1})]),_:1}),k.value?(m(),w(C,{key:0,style:{width:"400px",height:"400px","margin-top":"20px"},src:k.value,"preview-src-list":[k.value],fit:"cover"},null,8,["src","preview-src-list"])):x("",!0)])]),_:1}),s(B,{span:12},{default:i(()=>[s(f,{content:"深色背景图片时使用",placement:"right"},{default:i(()=>[s(F,{underline:!1},{default:i(()=>[l(" 深色背景"),s(g,{class:"el-icon--right"},{default:i(()=>[s(y(A))]),_:1})]),_:1})]),_:1}),a("div",null,[s(_,{"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":N},{default:i(()=>[s(g,null,{default:i(()=>[s(y(D))]),_:1})]),_:1}),r.value?(m(),w(C,{key:0,style:{width:"400px",height:"400px","margin-top":"20px"},src:r.value,"preview-src-list":[r.value],fit:"cover"},null,8,["src","preview-src-list"])):x("",!0)])]),_:1})]),_:1})])}}});export{ys as __pageData,ms as default};
