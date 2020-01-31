# Exercise: Truck Typography
- [TruckLife are.na channel](https://www.are.na/ben-ross-1515211424/trucklife)

New York City is filled with trucks—containers transporting anything from food and tools to money and trash. All trucks need to include some information: 

> &ldquo;The New York City Traffic Rules require that commercial vehicles display the registrant's name and address on both sides of the vehicle.&rdquo; — ([nyc.gov](https://www1.nyc.gov/html/dot/downloads/pdf/truck-and-commercial-vehicle-faq-05-2019.pdf)). 

It does not, however, say *how* this material should be displayed. This fact, along with an abundance of creativity (and often, a sense of humor) means that almost no two trucks in NYC look alike. 

<br>For this first exercise, you will create two html pages. They must somehow link to one another:
	- Page 1: Embed your selected truck's image within the page
	- Page 2: Select at least one truck's face (either from the are.na channel or a truck you happened to have photographed) and recreate it within the browser. You may use custom illustrations and open-source typefaces to create your truck page.

## Resources
- [Learn to Code](https://learn.shayhowe.com/html-css/)
- [Learn Layout](http://learnlayout.com/)
- [w3 schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Google Fonts](https://fonts.google.com/)

## Importing Fonts

To import a font, you will want to either use a `.woff`, `.ttf`, or `.eot` file and use `@font-face`:

```css

@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

```
<br>You may then reference your font with how you&rsquo;ve named it via the `font-family` (in this case: `"Open Sans"`). Alternative methods are often provided by online font foundries like [Google Fonts](https://fonts.google.com)
