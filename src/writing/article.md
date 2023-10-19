# First article

In the past pretty much all monitors had a resolution of 640x640 and there didn’t need to be a responsive design. All websites were designed with a fixed size and not changed. When the first iPhone was made companies started making two versions of the their website, one for desktop and one for mobile, but this was very cumbersome, so _responsive design_ was introduced.

Screens have a thing called DPI, “dots per inch”, which measures pixel density. One thing to note is that there is not 1:1 correspondence between our CSS pixels and the screen’s pixels, the relationship is actually 1:3. In other words, the following CSS code would actually create a 150x150 square:

```css
.square {
  width: 50px;
  height: 50px;
  background-color: red;
}
```

To render pages correctly on mobile the following tag is usually added to the index.html file:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

This makes sure that that the desktop page is scaled down to the phone screen size and avoid, as it used to happen in the past, to have a 30.000-feet view over the page.

When you write code that needs to be seen on a mobile and be responsible we can either get another cheap phone where to see it or use sites like [BrowserStack](https://www.browserstack.com/), where you can upload your site and test on a wide range of different devices.

To use a desktop application, which usually has [localhost](http://localhost) url, on a phone we can use applications like [ngrok](https://ngrok.com/), which run on our development machine and create a new url that tunnels us to our website once we navigate to it from our phone. At this point we can also do remote debugging (though there are services that allow us to do directly on the phone) from our developing machine. To debug the application on an iPhone we can use DevTools in Safari, but for Windows users there are only separate tools like [Inspect](https://inspect.dev/). There are also much easier option involving only the DevTools if you have an android phone.

# Media queries

The main tool we have when it comes to responsive CSS is media queries. They have the following shape:

```css
.box {
  font-size: 2rem;
  color: red;
}

@media (max-width: 400px) {
  .box {
    color: yellow;
  }
}
```

The @media syntax is known as “at-rule” and what it does is changing the behaviour: if the width of box is equal or smaller than 400px the color goes from red to pink. It is important to notice that the style applied outside of the query (in this case font-size) is preserved and that media queries work as conditionals. meaning that if the media query was on top of .box it would not have worked.

If we use styled components, every styled component has its own media queries, in one spot, while in a normal context we would put them at the bottom of out stylesheets. Fortunately, this mechanism of styled components, which relies on the ability to have nested queries, can be used also with the SCSS preprocess.

Media queries can be written with a “mobile-first” approach or with a “desktop-first” approach. Here’s an example of desktop-first approach:

```css
.button {
  position: fixed;
}

@media (max-width: 400px) {
  .button {
    // some mobile styling
  }
}
```

In this case we first set the styling for desktop and then, for screen smaller than 400px, we define the mobile styling. An example of mobile-first approach is instead:

```css
.button {
  position: fixed;
}

@media (min-width: 401px) {
  .button {
    // some desktop styling
  }
}
```

In this case, the button is styled first for mobile and above 401px we apply some other styles for desktop. Now, which approach is better? Depends on the context: if we are implementing something that is probably be viewed by folks using a phone then a desktop-first approach is preferable, but sites like Codecademy were probably built with a desktop-first approach since most of the traffic came from there.

It is not advised to mix media queries, like this:

```css
@media (max-width: 400px) {
  // some code
}

@media (min-width: 401px) {
  // some other code
}
```

First of all because there might be a “in-between” size that does not fall in neither of the two queries, but most importantly because choosing between a mobile-first and a desktop-first approach makes the mental model easier. So we should pick one and not mix. In very specific case we could make something like this:

```css
@media (min-width: 500px) and (max-width: 1100px) {
  // some code
}
```

For example if we have some _very specific_ code that we want to hold only for, e.g., iPad.

There are different types of media queries, for example we can use them to apply some code based on whether or not the user is using a device that allows _hovering:_

```css
@media (hover: hover) and (pointer: fine) {
  // some code
}
```

Besides, the query above also takes into account whether the user can point finely or not with their device.

Media queries can also target preferences like whether the user prefers or not dark mode as default or has some settings that prevent certain animation. So we have the following queries:

```css
@media (prefers-color-scheme: dark) {
  // some code for dark mode
}

@media (prefers-reduced-motion: no-preference) {
  // animation here
}
```

# Breakpoints

Regarding breakpoints, here’s something to avoid: if we see that most phones have a screen not larger than 300px, we should not put our breakpoint at 301px! At the contrary, we should try to take the no-man’s lands between groups of devices, for example such area is around 500px between phones and tablets.

With styled components we can even create an object with all the different breakpoints and then use it in our CSS, like so

```jsx
const QUERIES = {
  tabletsAndUp: "(min-width: 550px)",
  laptopsAndUp: "(min-width: 1100px)",
  monitorsAndUp: "(min-width: 1500px)",
};

// and then, in the media query...

const Wrapper = styled.div`
  @media ${QUERIES.tabletsAndUp} {
    // some code
  }
`;
```

# CSS variables

CSS variables are essentially custom properties that we use for a specific purpose. To distinguish them from built-in properties we prefix them with `- -`. Of course they don’t do anything on their own, but we can access their value with the `var( )` notation, for example:

```jsx
.button {
	--color: red;
}

.wrapper {
	color: var(--color);
}
```

CSS variables are inheritable but not global, meaning that we cannot use on some parent HTML tag if they were defined in the children.

CSS variables also allow for default values:

```jsx
.wrapper {
	color: var(--primary, red);
}
```

If `.wrapper` or any of its ancestors assigns a color to `—primary` then it will be used, otherwise the default red will.

Variables exist also in preprocessors like SCSS and Less, but in that case they compiled when you build the site, leaving us with static values. Instead, CSS variables are _reactive_, meaning that they exist at runtime. This makes it possible to make a button bigger every time we click on it, with CSS. In the course there is also a more deep example that shows how this reactivity feature is connected to responsive CSS: essentially, we can exploit reactivity to determine the size of a button based on a query (which discriminates between fine and coarse pointers availability).

Finally, CSS variables are composable, meaning that they allow for patterns like this:

```css
<style>
 main {
	--hue-primary: 300deg;
	--intense: 50% 100%;
  --color-primary: hsl(--hue-primary, --intense)
}

const Button = styled.div`
		background-color: var(--color-primary);
`
<style>
```

# The magic of Calc

`calc()` can be used to compute values in CSS and it even allows us to mix units, for example:

```css
wrapper {
  max-width: calc(64px + 2rem) // which is equivalent to 96px
;
}
```

It can even be used with CSS variables!

Calc is especially useful when we have to deal with `rem` unit and as a conversion system, from px to rem and — more generally — it can be used to have a set of knobs we can tweak when we have to deal with linear gradients.

# Viewport units

We have two viewport units: `vw` (viewport width and `vh` (viewport height). For example, `1vw` corresponds to 1% of the viewport width. `vh` comes in handy when we want an element to be _exactly_ as tall as the viewport, not taller, not shorter. This, however, leads to an issue on mobile, because most mobile phones have some buttons at the bottom that of course take some space, and the viewport height is calculated without considering it, so if you use `100vh` for an element on mobile, it will be taller than the actual viewport. Luckily, recently (spring 2023) new units have been introduced, in particular `dvh` (Dynamic Viewport Height) will dynamically adjust as the viewport changes.

But vw has problems as well! In particular, `100vw` does not take into account the width of a scrollbar, if there is one. Is is possible to make a JS snippet that measures said width and then add this value when needed, but this creates problems on React for example, because the value is calculated with a certain delay and this can break the layout.

# Clamping values

`clamp()` is another feature of CSS that comes in handy when we talk about responsive CSS.

It is useful in different cases. On of these if when we need to set a `max-width` but at the same time have `max-width` free to use. We can do this by

```css
.wrapper {
	width: clamp(100px, 300px, 600px)
	max-width: 100%;
}
```

Here `100px` is the minimum values, `300px` is the ideal value and `600px` is the maximum value. At the same time, we can set a `max-width: 100%` . This makes it possible to have a wrapper that is flexible and of an adaptable size (whilst allowing for readability of the text inside) and not overflowing when, for example, we are suing a phone. In that case, it will take 100% of the viewport.

`Clamp()` is also useful whenever we need max and min values for properties than don’t have such values, for example `font-size`. This is useful for _fluid typography_ for example:

```css
main {
  font-size: clamp(1rem, 1, 5rem, 3rem);
}
```

`Clamp()` allows for a minimum and a maximum value, but we might only want one of the two; na din this case there are `min()` and `max()`. For example:

```css
.wrapper {
  width: min(32px, 5vw) // width evaluates to the minimum value between the two
;
}
```

# Scrollburglars

By scrollburglars we mean an inconvenient effect for which, on mobile, we get an unwanted horizontal scrollbar that allows us to scroll by a few pixels. Possible causes for this are:

- The existence of an overflowing element;
- An element like a video or an image is used without constraining its width to fit in the parent container.
- There is a really long work causing the overflow.
- Negative margins pulling an element outside of its parent.

Possible ways to fix this are, for example, look for one of this elements or, if we don’t see anything, remove element by element in the DevTools to see what is causing the overflow. Once the issue has been found, it is advisable to make it so that the issue cannot occur again. for example by setting the max-width of all the elements.

# Responsive typography

Should text get smaller or bigger when viewed on a mobile device? Surprisingly, text should more or less the same across all devices, and browsers already did all the hard to work to make sure that the font is consistent across all devices.

The above paragraph is true mostly for text, but what if we have smaller text like captions? In that case it seems fine that a user has to zoom in to see it, especially if the text is relatively unimportant. Regarding form text, sometimes input text is difficult to read because it is quite small, so it is advisable to set it to `1rem`, basically `16px`. This is needed also because on iOS devices, if the input font is smaller than `16px`, the device will automatically zoom in, which is not very good for the UX.

For header text, it is not too much to have a font-size of `2.5rem`, but on mobile the text will go on new lines, so one option is to have a media query that reduces the header font size. There is, however, a much better approach, which is _fluid typography_. Fluid typography means that our font size won’t change with a breakpoint but rather fluidly. This can be done with the `vw` unit. The problem is that the text will get too small when we have a small viewport. We can put boundaries on the size with `clamp()`, but this brings an accessibility issue, which is that the font is locked for folks with poor vision who want to crank it up. It will get bigger but not as much as it is recommended. The best thing, therefore, is to use a mix of units that fixes this problem, and a _fluid calculator_ will give us the exact code snippet to use; the fluid calculator lets us access interesting properties like _rate of change_. These fluidity can also be exploited when we work on spacing.

# Fluid design

So far, we have seen two different approaches:

- The “responsive” approach, based on media queries, in which we define breakpoints;
- The “fluid” approach, were we use consider the viewport width.

None of the two is inherently better than the other, they just have certain advantages and trade-offs depending on the context. For example, while the fluid approach looks better when things are scaling, it may not allow for certain details like changing the border radius at certain specific widths.
