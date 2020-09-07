# Healthy Recipes - CSS: Selectors & Visual Rules

STEP 1.
* Start by making the image at the top of the page a little smaller. Let's make the height: 150px
    * *Tip: Try experimenting with the 150 number and observing the results.*

STEP 2.
* The font size of the recipe description should be larger (20 pixels should do it). Write a CSS selector for the .description class.

STEP 3.
* Next, let’s style the cooking time. The element on line 15 of index.html has an id attribute of cook-time. Add a cook-time ID selector to your CSS file. Let's make the font within that id bold.

STEP 4.
* Now, let’s change the bullet points of the ingredient list to squares instead of circles. Start by writing a selector for the li elements inside of the 'ingredients' element. 
      * *Hint: use 'list-style' to change how the bullet points appear.* 

STEP 5.
* Next let’s make the time for each preparation step appear gray. Write a selector for paragraph elements that also have a class of 'time'. 

STEP 6. 
* At the bottom of the page, there’s a link to the full recipe. Let’s make the link a different color.
    * Notice that in your html, on line 42, there is a p element with a class of citation, then an a element inside of it with a class of external-link. Write a selector using external-link class.

STEP 7.
* Finally, let’s make the font Helvetica instead of the default Times New Roman. Instead of writing multiple selectors to apply the font-family property, write a selector that applies a font-family attribute to all text at once.
    * The selector should target the h1, h2, p, and li elements. Let's put this at the beginning of your CSS code.
        * *Hint: Sounds like **all** of these elements are indside the content of the HTML, huh?*
    