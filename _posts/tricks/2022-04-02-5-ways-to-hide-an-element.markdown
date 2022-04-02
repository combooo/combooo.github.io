---
layout: post
title:  "5 ways to hide an element"
date:   2022-04-02 01:05:36 +0300
categories: html css
---

__1. display: none__
{% highlight css %}
.elem {
  display: none;
}
{% endhighlight %}
It allows to delete elements from DOM, and element goes out of the flow. But the browser will upload images with this CSS rule anyway. If an image is used as a background — Chrome and Edge will upload it also, but Firefox and Safari — not.

__2. visibility: hidden__
{% highlight css %}
.elem {
    visibility: hidden;
}
{% endhighlight %}
The element stays inflow, but users cannot interact with it. This property is inherited, which means that a child of this element can change the property from invisible to visible.
__3. opacity: 0__
{% highlight css %}
.elem {
    opacity: 0
}
{% endhighlight %}
This CSS rule makes the element transparent. Users can interact with it.
__4. ‘hidden’ attribute__
{% highlight css %}
<img hidden src="test.png" alt="test">
{% endhighlight %}
Attribute “hidden” makes elements invisible because of default browser rules. Can be controlled by JS, like the “checked” attribute.
__5. The «clip pattern»__
{% highlight html %}
<h1 class="visually-hidden">Some title</h1> 
{% endhighlight %}
{% highlight css %}
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
{% endhighlight %}
We can hide the element visually, but at the same time — provide the content to screen readers. The «clip pattern» also works with RTL (Right-to-Left) languages for localization. Here is the article [Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility) for more information about this pattern.




