---
layout: default
---
<ul>
{% for post in site.posts %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

{% for post in posts %}
					<li>
						<h3>
							<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
						</h3>
						<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
					</li>
					{% endfor %}

