---
layout: page
title: 标签分类
---

<!-- 这是一个用来分类展示的页面 -->

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; padding: 40px 0;">

  {% for tag in site.tags %}
    <!-- 自动获取每一个标签 -->
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    {% capture tag_size %}{{ tag | last | size }}{% endcapture %}

    <a href="/tags/{{ tag_name }}/" style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 120px;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        text-decoration: none;
        color: #333;
        transition: transform 0.2s, box-shadow 0.2s;
      ">
      <span style="font-size: 1.4em; font-weight: bold;">{{ tag_name }}</span>
      <span style="font-size: 0.9em; color: #888; margin-top: 10px;">{{ tag_size }} 篇</span>
    </a>
  {% endfor %}

</div>

<style>
  /* 鼠标悬停卡片时的特效 */
  a:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    border-color: #333;
  }
</style>
