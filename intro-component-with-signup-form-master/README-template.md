# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Project Completed](./completed/Screenshot.png)

## My process

I worked with a Desktop-first workflow, first I put the HTML elements and added the styles with CSS, everything normal.
What really complicated me was the management of the DOM, I spent more time than I would like to admit thinking about
how to make the function work to generate error alerts, I must study the arrays. After that everything was simple.
Once I finished the functionality I made it responsive and that's it.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Pure JavaScript

### What I learned

With this project I have learned quite a few things, the most important one: forEach. I don't know if the way I used
it was the most optimal, but I'm proud.

```JS
function generateErrorAlertOn(field, message = 'Error') {
    let errorAlert = document.createElement('p');
        errorAlert.classList.add('error');
        errorAlert.textContent = message;
        fails = true;

        inputWithError.forEach((bigContainer) => {
            let inputContainer = bigContainer.children;
        
            for (let input of inputContainer) {
                if (input === field) {
                    input.after(errorAlert);
                };
            };
        });

        //Error style for input box.
        field.classList.add('error-border');
        field.style.background = 'url(./images/icon-error.svg) no-repeat right 12px';
        field.style.backgroundPosition = '430px';
}
```

### Continued development

As I already mentioned, I must and will continue to study arrays since I am clear about how powerful that tool is.

I'm basic with JavaScript so that's what I'll mainly practice.

### Useful resources

- [Email validation source](https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/)

From that page I found the way to validate the email ;D

## Author

If you want to see more of my job:

- Frontend Mentor - [@CrissD3V](https://www.frontendmentor.io/profile/CrissD3V)
- Twitter - [@CrissD3v](https://twitter.com/CrissD3v)