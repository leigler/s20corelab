\**A Javascript library is a published file (or collection of files) of pre-written Javascript. Maintained by an individual or by groups, Libraries are meant to make the creation of webpages easier.*

*We are taking a closer look at Greensock to practice reading documentation of existing Javascript Libraries:*

# Animation with Greensock

The GreenSock Animation Platform ([GSAP](https://greensock.com/)) is a Javascript animation library that emphasizes cross-browser support. It is particularly helpful for more complex sequencing and easing.

Here&rsquo;s their [Getting Started page](https://greensock.com/get-started/) and their [complete documentation](https://greensock.com/docs/).

### Loading in Greensock
Greensock (and most other libraries) can be loaded in with a script tag:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>
```

If we open that [link](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js), you&rsquo;ll notice a whole bunch of code with almost no spaces—this is a minified javascript file. We can download this file and put it in our `assets` folder (this allows us to work offline):
```html
<script src="/assets/gsap.min.js"></script>
```

### Tweening
Greensock operates with &ldquo;tweens&rdquo;—essentially a sequence of frames that are put together to create the illusion of movement (i.e. an animation).

#### End point
We can tween *to* something simply by calling our animation library and giving it a selector, changes, and a duration:

```javascript
gsap.to(".myWheel", { y: 100, duration: 1})
```

#### Starting point
We can also tween *from* something simply by calling our animation library and giving it a selector, changes, and a duration:

```javascript
gsap.from(".myWheel", { y: -100, duration: 1})
```

#### Starting and Ending point
We can also tween *from* a condition and *to* another condition by calling our animation library and giving it a selector, starting points, changes, and a duration:

```javascript
gsap.fromTo(".myWheel", { y: -50}, { y: -100, duration: 1})
```

### Manipulating Tweens
We can also save a tween for later—this allows us to pause, seek, delay, and play it.
```javascript
var myAnimation = gsap.fromTo(".myWheel", { y: -50}, { y: -100, duration: 1});


myAnimation.pause()
myAnimation.seek(0.25) // skip 0.25 seconds ahead
myAnimation.play()


```

### On Completion
Another nice element of gsap is that we can run function on start or completion of an animation:
```javascript

function justStarting(){
	console.log("our animation is starting!")
}

function completed(){
	console.log("its finished!")
}

gsap.fromTo(".myWheel", { y: -50 onStart: justStarting}, { y: -100, duration: 1, onComplete: completed})

```



### Timelines
Let&rsquo;s say that we want to make a very complex animation. We could begin by staggering a bunch of delayed tweens:

```javascript

gsap.fromTo(".myWheel", { y: -50}, { y: -100, duration: 1});
gsap.to(".myWheel", { x: -100, delay: 1,  duration: 1});
gsap.to(".myWheel", { x: 100, delay: 2,  duration: 1});


```

This runs into a cascading problem: If we want to change the `duration` of one element, we have to go back and edit all the other element&rsquo;s delays. Instead, we can use GSAP&rsquo;s Timelines:


```javascript

var myTimeline = gsap.timeline()

// we can add certain properties to the whole timeline. Like repeat amounts, or delays
var myDelayedTimeline = gsap.timeline({repeat: 2, repeatDelay: 1})

```


We can then add tweens to this Timeline:

```javascript

var myTimeline = gsap.timeline({paused: true})

myTimeline.to(".myWheel" {backgroundColor: 'red', duration: 2.5})
myTimeline.to(".myWheel", {backgroundColor: 'blue', duration: 0.75, ease: "elastic.in"}, "+=1")
	// that third parameter: "+=1" allows us to play with were in the timeline our tween gets appended. This allows us to stagger animations
myTimeline.to(".myWheel", {backgroundColor: 'green', duration: 1.75, ease: "linear"})
myTimeline.to(".myWheel", {backgroundColor: '#ff0', duration: 0.75, ease: "elastic.out"})

```

...and control the Timeline with our previous controls: 


```javascript

myTimeline.seek(2) // jump position
myTimeline.play()

```

Let&rsquo;s take a moment to explore the library using this [assignment](/assignments/with-feeling).


