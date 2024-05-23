---
title: 'Blog of Kernen'
layout: 'layouts/feed.html'
pagination:
    data: collections.blog
    size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

The latest articles from my personal experiences, mainly things I want to share that might be helpful, informative, or entertaining.