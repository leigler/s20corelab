# Exercise: Module Repitition

Using what we&rsquo;ve learned so far regarding loops, appending, and Javascript objects like `Math` and `Date`, revisit your [Pocket Composition](/assignments/pocket). 

Select a single module and using a javascript loop and `insertAdjacentHTML`, make it repeat 50 times.

Your module should somehow change over the 50 times via scale, color, skewing, rotation, or any other combination of css properties.

As a starting point, you may use this format:

```javascript


var myRootDiv = document.getElementById("container");


for (var i = 0; i < 50; i++) {
	
	var firstVariable = 'replace me with some css';

	var myModule = `

		<div class="myClass" style="${ firstVariable }">
			<div class="diagonalLine" style="${ firstVariable }"></div>
			<div class="oval" style="${ firstVariable }"></div>
		</div>

	`;

	myRootDiv.insertAdjacentHTML('beforeend', myModule)

}



```