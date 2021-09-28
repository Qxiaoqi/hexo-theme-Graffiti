# hexo-theme-Graffiti

Graffiti是早期使用hexo制作的博客主题，现在看起来有点丑陋，我的博客主题已经换掉了

### 首页
![hexo-theme-Graffiti-img](https://file-1305436646.file.myqcloud.com/gh/hexo-theme-Graffiti-1.png)

### 归档
![hexo-theme-Graffiti-img](https://file-1305436646.file.myqcloud.com/gh/hexo-theme-Graffiti-2.png)

### 标签
![hexo-theme-Graffiti-img](https://file-1305436646.file.myqcloud.com/gh/hexo-theme-Graffiti-3.png)

## 主题_config.yml配置

```yml
# html lang
language: en

# main menu navigation
menu:
  Home: /
  Archives: /archives
  Tags: /tags
  Github: https://github.com/Qxiaoqi

# Miscelaneous 暂时不知道什么原因这部分显示不了
favicon: /favicon_qi.ico

# stylesheets loaded in the <head>
stylesheets:
- /css/Graffiti.css

# scripts loaded in the end of the body
scripts:
- /js/jquery-3.2.1.js
- /js/graffiti.js

# 导航栏背景
navigationBar:
- /img/navigationBar.jpg

# 头像
portrait:
- /img/portrait.jpg
```

## 根目录下_config.yml配置
```yml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site 个人信息
title: Xiaoqi's blog
subtitle:
description:
keywords:
author: Xiaoqi
language: zh-CN
timezone:

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://yoursite.com
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: true
  tab_replace:
  
# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date

# Archives归档页面显示文章数目
archive_generator:
  per_page: 15
  
# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: Graffiti

# Deployment
## Docs: https://hexo.io/docs/deployment.html
# 发部的仓库，一个是github一个是码云
deploy:
  type: git
  repo: 
    github: git@github.com:Qxiaoqi/Qxiaoqi.github.io.git
    oschina: git@gitee.com:qxiaoqi/qxiaoqi.git
  branch: master

```
