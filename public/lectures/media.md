# Media Queries
*The January 31st files can be downloaded [here](/files/jan-31.zip).*

<br>Media queries are used in CSS to apply styles based on various browser or device contexts. 

<br>Most frequently, `@media` is used to define desktop and mobile styles, although you can use `@media` to specify `hover` and `print` properties.

<br>Max-width: `@media(max-width: 768px){}`  defines the maximum width at which a style is rendered:

```css

.myClass{
	background-color: red;
	width: 200px;
	height: 400px;
}

@media(max-width: 1024px){
	.myClass{
		background-color: blue;
		border-radius: 100px;
	}
}

@media(max-width: 768px){
	.myClass{
		background-color: green;
		border-radius: 50px;
		width: 100%;
	}
}


```

<br>Min-width `@media(min-width:768px){}` defines the minimum width at which a style is rendered
(setting the `min-width` to 768 would apply to all devices larger than a mobile screen).

<br>Any-hover `@media(any-hover: hover){}` applies styles when a hover capability is detected. `@media(any-hover: none){}` applies styles when no hover is detected.	

<br> The print statement `@media print {}` applies to anything that is printable while the `screen` statement applies to any context that is screen-based.


### Combinations

The `and` operator allows the combination of multiple queries. The example below would apply to desktop browsers with a very small height:

```css

@media(min-width: 768px) and (max-height: 400px){
	.myClass{
		background-color: green;
	}
}

```

<br> The or operator `,` allows us to apply the same style to multiple queries. The example below applies a green background color to anything that is at least 1000px wide *or* tall.

```css

@media(min-width: 1000px), (min-height: 1000px){
	.myClass{
		background-color: green;
	}
}

```

