import{_ as n,o as a,c as s,a as e}from"./app-85654d57.js";const i="/assets/bu1-edb656b8.png",l="/assets/bu2-5c66caf7.png",t="/assets/bu3-3c4726dc.png",d={},r=e(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><h2 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置" aria-hidden="true">#</a> 服务器配置</h2><p>最小配置</p><table><thead><tr><th>资源名称</th><th>配置</th></tr></thead><tbody><tr><td>应用服务器</td><td>1核2G，系统盘20G，数据盘20G，CentOS 7.6/ubuntu 1804</td></tr></tbody></table><p>推荐配置</p><table><thead><tr><th>资源名称</th><th>配置</th></tr></thead><tbody><tr><td>应用服务器</td><td>4核8G，系统盘40G，数据盘100G，CentOS 7.6/ubuntu 1804</td></tr></tbody></table><h2 id="中间件-环境配置" tabindex="-1"><a class="header-anchor" href="#中间件-环境配置" aria-hidden="true">#</a> 中间件&amp;环境配置</h2><table><thead><tr><th>软件名称</th><th>开发版本号</th><th>推荐版本号</th></tr></thead><tbody><tr><td>Mysql</td><td>8.0</td><td>5.7+</td></tr><tr><td>Redis</td><td>5.0</td><td></td></tr><tr><td>Nginx</td><td>1.22.1</td><td></td></tr><tr><td>JDK</td><td>17</td><td>1.8+</td></tr><tr><td>node</td><td>20.8.1</td><td>16+</td></tr></tbody></table><h2 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h2><p>本软件采用B/S架构，需依赖浏览器运行，建议使用chrome112.x以上版本，不支持IE浏览器！项目使用webpack进行包管理，打包使用npm run build，打包完后将打包好的文件放到服务器中间件如nginx\\tomcat，使用浏览器打开配置的路径即可访问。</p><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><p>商业版提供完整jar包和前端dist包，用户可在协作平台--&gt;项目--&gt;选择进入项目--&gt;文档管理--&gt;文件网盘 选择版本号自行下载</p><p>购买源码用户若需自行打包需注意切换分支，master分支为稳定分支（建议使用，更新频率 &gt; 1个月），dev为开发分支（更新频率较高）。</p><p>打包方式：切换到代码目录执行一下命令：</p><p>前端打包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后端打包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean pakage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="部署-1" tabindex="-1"><a class="header-anchor" href="#部署-1" aria-hidden="true">#</a> 部署</h2><p>本软件使用前后端分离技术，静态资源与接口可由Nginx代理，下面介绍使用Nginx部署的具体步骤：</p><ol><li>安装中间件并配置环境，导入数据库</li><li>下载安装包到服务器任意目录，将application-prod.yml放置与jar包同级目录</li><li>修改application-prod.yml配置文件，yml配置项如下：</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> cola<span class="token punctuation">-</span>designer<span class="token punctuation">-</span>pro
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/cloud_view
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;123456&#39;</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> 

<span class="token key atrule">upload</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&#39;/opt/upload/file/&#39;</span> <span class="token comment">#文件上传目录</span>

<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.cola.colaboot.module</span><span class="token punctuation">:</span> debug <span class="token comment">#日志级别</span>
  <span class="token comment">#file:</span>
    <span class="token comment">#name: log-cloud-view.log</span>

<span class="token comment">#邮件服务器配置，需要执行邮件任务时使用</span>
<span class="token key atrule">mail</span><span class="token punctuation">:</span> 
  <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;smtp.qq.com&quot;</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&quot;465&quot;</span>
  <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;123@qq.com&quot;</span>
  <span class="token key atrule">pass</span><span class="token punctuation">:</span> <span class="token string">&quot;xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>添加Nginx server配置，注意file代理的上传文件夹与application-prod.yml中upload.path路径一致:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80;
    server_name  cdesign.fun;
    location ^~ /designApi/ {
        proxy_pass http://127.0.0.1:6882/;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header Ali-CDN-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ^~ /file/ {
        alias /opt/upload/file/;
    }
    location / {
        root   /opt/project/dist/;
        index  index.html;
        try_files  $uri $uri/ /index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>解压upload.zip到Nginx和jar配置的文件上传目录(可选)</li><li>启动jar</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> cola-designer-pro.jar <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>访问</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://cdesign.fun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署时带固定前缀" tabindex="-1"><a class="header-anchor" href="#部署时带固定前缀" aria-hidden="true">#</a> 部署时带固定前缀</h3><p>例如访问路径需要调整为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://cdesign.fun/cola/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>修改前端打包配置</p><p>前端打包配置需要修改3个文件：</p><p>①. vue.config.js中添加public配置</p><p><img src="`+i+'" alt="login.png"></p><p>②. src/router/index.js调整路由模式为hash并设置base路径</p><p><img src="'+l+'" alt="login.png"></p><p>③. env.js调整静态文件和api的前缀路径（根据实际使用场景而定）</p><p><img src="'+t+`" alt="login.png"></p></li><li><p>修改nginx配置(参考)</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
   listen       80;
   server_name  cdesign.fun;
   location ^~ /cola/designApi/ {
      proxy_pass http://127.0.0.1:6882/;
      proxy_redirect off;
      proxy_set_header Host $host;
      proxy_set_header Ali-CDN-Real-IP $remote_addr;
      proxy_set_header REMOTE-HOST $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   }
   location ^~ /cola/file/ {
      alias /opt/upload/file/;
   }
   location /cola {
      root   /opt/project/dist/;
      index  index.html;
      try_files  $uri $uri/ /index.html;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>打包上传至服务器&amp;访问</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://cdesign.fun/cola/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),c=[r];function p(o,u){return a(),s("div",null,c)}const m=n(d,[["render",p],["__file","env.html.vue"]]);export{m as default};
