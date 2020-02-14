# Assignment: Détournement

This project will explore conventions and outputs of a single Javascript event handler. Consider it a one-week deep-dive into a found interaction.

## Brief

Find a commonly used site and identify a single interaction that is core to the site&rsquo;s functionality and study this interaction. What exactly happens? What are the design decisions made to imply its functionality? How does the site change upon interaction? Feel free to use the `inspect element` functionality on your browser to take a closer look at the HTML, CSS, and Javascript.


Using your knowledge of HTML and CSS so far, you will spend the week recreating a single page of your selected site, focusing on recreating the primary visual elements of the interaction you&rsqu;ve isolated. 

### Using Javascript, you will then redesign the interaction to somehow subvert our expectations.

Your javascript should use (at least) one event handler to manipulate the DOM upon user interaction. To help guide this subversion, utilize the `console.log()` method to explore what data your event handler emits:
<br><br>
```javascript

var yourElement = document.getElementById("myElement");

yourElement.addEventListener('click', function(event){

	console.log(event)

})


```

<br>


## Event handlers
A few frequently used event handlers can be found below:

- `fullscreenchange`, `resize`, `scroll`
- `click`, `mousedown`, `mouseup`
- `mouseenter`, `mouseleave`, `mouseover`, `mouseout`
- `select`
- `keydown`, `keypress`, `keyup`
- `drag`, `dragend`, `dragenter`, `dragstart`, `dragleave`, `dragover`, `drop`

\*A full list of event handlers can be found [here](https://developer.mozilla.org/en-US/docs/Web/Events).



## Project Context

Détournement (from the French: hijacking, rerouting) is an artistic tool brought to popularity in the mid-twentieth century by the Situationist International that can be defined as a &ldquo;turning&rdquo; or subversion of material. At its core, détournement can be understood as a method of using a common visual trope, a frequently used format, or easily recognizable symbol to communicate the opposite.

A few examples may include:
- A vandalized [Marlboro Ad](https://en.wikipedia.org/wiki/D%C3%A9tournement#/media/File:Its_a_bore.jpg)
- The bootlegged [Jeremy Corbyn Nike T-Shirt](https://www.dezeen.com/2017/09/05/va-acquires-nike-t-shirt-designed-support-jeremy-corbyn-design-news/)
- The stock-photography [DISimages](http://disimages.com/) campaign by the DIS art collective
- Trend Report collective K-Hole and their coining of [Normcore](http://khole.net/issues/youth-mode/) as a method of clothing détournement.

