# Frontend Mentor - Tip calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person
- Total Tip = Bill \* Percent_Tip
- Tip amount/person = Total Tip / No. People
- Total/person = (Bill + Total Tip) / No. People

### Screenshot

![](./screenshot.jpg)

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

- Actually, I used ChatGPT and StackOverflow for this set up to work out
```html
<div class="radio-button">
  <input type="radio" name="percent" id="percen1" value="5" />
  <label for="percent1">
    <span>5%</span>
  </label>
</div>
```

-  The click event below I code this myself by learning the basic from We3School and console log along the way
```js
let radio_btns = document.getElementsByClassName("radio-button");
// If user click a tip button
for (let index = 0; index < radio_btns.length; index++) {
  radio_btns[index].addEventListener("click", function () {
    // 1. Get input value
    tip_radio = parseInt(this.children[0].value);

    // 2. Block the custom field
    input_tip_custom.disabled = true;

    //3. Checked the radio button
    this.children[0].checked = true;
  });
}
```

### Continued development

Build this project with ReactJS.

### Useful resources

- [W3School JavaScript](https://www.w3schools.com/js/default.asp) - Basic JavaScript

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
