# Blog Project - Semantic HTML

**Navigation Bar**

STEP 1.
* A common usage of a navigation bar is to create shortcuts for a webpage. This will allow the user to go directly to the information they want to access through the navigation links.
* Create a `<nav>` element underneath the opening `<body>` tag.

STEP 2. 
* Within the `<nav>` element, create a `<ul>` element to create an unordered list. The unordered list should contain the following three items:

    * Blog
    * Media
    * About

Use an `<li> `element with `<a href=""></a>` nested within the `<li>` element to link the content to the nav bar. You may notice that the navbar doesn’t work right now but don’t worry, once the content is added, the navbar will be fully functional!


**Blog Content**

STEP 3.
* You need to title your blog, so people know what you’re writing about. Create a `<header>` element under the closing `</nav>` tag.
* Within the `<header>` element, create an `<h1>` element which should contain the following:

    New York City
   
STEP 4.
* Create a `<main>` element below the closing `</header>` tag.
* Within the `<main>` element, create a `<section>` element with an id of “blog”.

This `<section>` element will hold the main content of your webpage. You are giving this element an id so that you can target it with the nav bar.

STEP 5.
* Create an `<article>` element within the `<section>` element.
* Then, create a `<p>` element within `<article>` that has the following:

```
New York City is made up of five boroughs which include Queens, Manhattan, Brooklyn, the Bronx, and Staten Island. The city is the home of approximately 8 million people. In 1876, France gifted the City of New York what is known as the Statue of Liberty, which is currently located on Ellis Island commonly visited by tourists. However, it took 10 years to assemble and therefore wasn’t unveiled until 1886. Another tourist destination is Times Square. Times Square is commonly known for the big buildings, Broadway shows, and bright neon signs. This famous location was named after The New York Times after the Times moved to that location. Prior to that, it was named Longacre Square. New York City is also known for its bridges that connect the boroughs and allow ease of transportation.
```
STEP 6.
* Now that our blog has some content, the next step is adding media to enhance our blog.
* You can do this by using the `<figure>` element. Under the closing `</section>` tag create a `<figure>` element.

STEP 7.
* Create an `<img>` tag within `<figure>` and use the following link as the src:

> https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/statue-of-liberty.jpeg

STEP 8.
* Let’s describe the image for those who don’t know what statue this is!

Using `<figcaption>` add this description of the image:

`This is the Statue of Liberty, a popular tourist attraction located on Ellis Island.`

**Aside Content**



**Media**



**Footer**