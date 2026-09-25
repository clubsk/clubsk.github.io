---
layout: card-list
title: 学习记录
---

{% assign posts = site.tags["学习记录"] %}

<div class="tag-page-header">
    <h1># {{ page.title }}</h1>
    <p class="tag-count">共 {{ posts | size }} 篇文章</p>
</div>

<div class="card-grid">
    {% for post in posts %}
        <article class="card-item">
            <a href="{{ post.url | relative_url }}">
                <div class="card-image">
                    {% if post.cover %}
                        <img src="{{ post.cover }}" alt="{{ post.title }}" />
                    {% endif %}
                </div>
                <div class="card-content">
                    <h2 class="card-title">{{ post.title }}</h2>
                    <p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 80 }}</p>
                    <div class="card-meta">{{ post.date | date: "%Y-%m-%d" }}</div>
                </div>
            </a>
        </article>
    {% endfor %}
</div>

<div class="back-to-top">
    <a href="{{ '/' | relative_url }}">← 返回首页</a>
</div>
