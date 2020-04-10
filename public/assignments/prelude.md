# Assignment: Collection Prelude

This project will act as a prelude of your [Collections](https://devinwashburn.com/coreinteraction/collections.html) project for Core Studio.

This is a group project, and should be completed within a single [Glitch](https://glitch.com) project. Please be prepared to briefly share your findings with the class next week.

### Brief

Through a brief discussion, find a common theme between your respective collections. For this assignment, you will be creating 4 interactions (filters, hovers, buttons, scrolling, etc) to view and modify your combined mini-collection. *You should have least one interaction should change individual items and at least one interaction influence the group as a whole*.

After agreeing on a theme, each group member should select <strong>10</strong> related images from their own collection to add to your Glitch project&rsquo;s `assets` folder.

Next, create a JSON file containing all your images and any meta-information you may want to use (Use the [JSON validator](https://jsonlint.com/) to check if your syntax is right!):<br><br>

```javascript

{
	"collection" : [
		{
			"imageLink" : "https://cdn.glitch.com/f90c8571-b3ab-4680-baf5-0b44de61155d%2Fhawk2.jpg",
			"title" : "Hawk",
			"description" : "Hawk being held by two hands",
			"owner" : "Lukas",
			"classes" : "green poetic"
		},
		{
			"imageLink" : "https://cdn.glitch.com/f90c8571-b3ab-4680-baf5-0b44de61155d%2Fostrich.jpg",
			"title" : "Ostrich",
			"description" : "Ostrich saying hello",
			"owner" : "Lukas",
			"classes" : "green"
		}

	]
}

```

Using your knowledge (and the examples) of Javascript&rsquo;s asynchronous loading method (`fetch()`) and `eventListeners`, create an interactive viewing experience.


## Requirements
- Have <i>at least</i> 20 images
- Have <i>at least</i> four separate `eventListener` interactions
- Of those four interactions, have <i>at least</i> one interaction influence individual items, and <i>at least</i> one interaction influence the collection as a whole.
- Keep all your data in a JSON file and, using the `fetch()` method, load your contents into your webpage dynamically.


## References
- [Typographische Monatsblätter Archive](http://www.tm-research-archive.ch/)
- [print.arena](https://print.are.na/) by Mindy Seu
- [Columbia Books](https://www.arch.columbia.edu/books/catalog/spine?filtered%5Bbooks%5D=true&filtered%5Bdigital%5D=true&filtered%5Bnew%5D=true&filtered%5Bstudent%5D=true&filtered%5Bupcoming%5D=true&ordered_by%5Bdate%5D=desc&page=1) by Linked By Air (specifically: the filtering)
- [The Serving Library](http://www.servinglibrary.org/)
- [Sternberg Press](https://www.sternberg-press.com/) by Knoth-Renner
- [K, A website is never ready 1-7](https://k-komma.de/_archive/) by Knoth-Renner
- [enzo mari](http://enzomari.com/) by Jon Lucas
