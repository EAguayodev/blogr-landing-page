# Frontend Mentor - Blogr landing page solution

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [](Github)
- Live Site URL: [https://blogr-landing-page-azure.vercel.app/](Vercel)

## My process
My process involved using HTML for structure, SCSS for modular and compiled CSS styling, and JavaScript to build out the mobile menu functionality.

One challenge I faced during the project was understanding binary and specificity when using SCSS for CSS compiling. I overcame this by thoroughly reviewing the MDN documentation on specificity, which helped me troubleshoot style conflicts and write more predictable, maintainable code.

### Built with

- Semantic HTML5 markup
- SCSS
- JavaScript
- Desktop-first workflow



### What I learned
Major learnings when completing the project was the scss nesting to ensure proper specificity for the scss code compiling into css. Improper nesting 
of scss elements can cause issues when the browser needs to specify which css to rendor in the browser after compiled. Before deployment, I had to adjust the nesting for the dropdown menus on desktop to show, and allow the user (if a real world scenario) to show the dropdown menu and allow them to select the link of their choice. 

To see how you can add code snippets, see below:

```html
 <ul class="menu-link">    
    <button>Product
       <img class="arrow" src="images/icon-arrow-light.svg" alt="arrow">
       <img class="arrow-dark" src="images/icon-arrow-light copy.svg" alt="icon arrow dark">
     </button>
     <div class="dropdown-nav__menu">
       <li><a href="#">Overview</a></li>
       <li><a href="#">Pricing</a></li>
       <li><a href="#">Marketplace</a></li>
       <li><a href="#">Features</a></li>
       <li><a href="#">Integrations</a></li>
     </div>
  </ul>
```
```css
  header {
    background-image: url(../images/bg-pattern-intro-desktop.svg), linear-gradient(to right, hsl(13, 100%, 72%), hsl    (353, 100%, 62%));
    background-repeat: no-repeat;
    background-position: 25% center;
    height: 600px;
    border-bottom-left-radius: 50px;
    padding: 1.5rem;
  }
```
```js
toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle('open');
  header.classList.toggle('active');
});   
```

### Continued development

I recently completed the Blogr Landing Page challenge on Frontend Mentor, where I focused on building a responsive layout using HTML and SCSS. This project helped reinforce my understanding of component-based styling and responsive design techniques.

For continued development, I plan to integrate other CSS frameworks like Bootstrap and Tailwind CSS into future projects to expand my styling toolkit and improve development efficiency. I'll also continue refining my skills in SCSS.


### Useful resources

- [w3schools](https://www.w3schools.com/sass/default.php) - The w3schools website helped me while debugging the dropdown menus on the challenge to ensure I was writing the nesting code properly to hit the right binary patterns.

- [Sass](https://sass-lang.com/) - The Sass documentation helped with my process and refreshing of memory with nesting and targeting the right specificity while building out the challenge.



## Author

- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)


## Acknowledgments
Big thanks to Frontend Mentor for providing this challenge—it's been a great resource for hands-on learning and skill development.