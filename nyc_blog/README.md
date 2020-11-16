Blog Project - Semantic HTML (user choice)
# Blog Project - Semantic HTML

**Navigation Bar**

STEP 1. - Create the navigation section in your code
* A common usage of a navigation bar is to create shortcuts for a webpage. This will allow the user to go directly to the information they want to access through the navigation links.
* Create a `<nav>` element underneath the opening `<body>` tag.

STEP 2. - Create a list of navigation items in your code
* The navigation list should contain the following three items:

    * Blog
    * Media
    * About
    * Any other nav items

* Be sure to assign id's to your navigation elements so that the nav bar is functional. More on that in a bit

<br/>

**Blog Content**

STEP 3. - Create a title & header
* You need to title your blog, so people know what you’re writing about. Create a `<header>` under the closing `</nav>` tag.
* Create a heading (hint `<h1>` might be really good here) and give it a name

STEP 4.
This next bit of code will hold the *main* content of your webpage. You are giving this element an id so that you can target it with the nav bar.

* Within the `<main>` element, create a `<section>` element with an id of “blog”.

STEP 5.
* Let's give your *article* some data. :) 
* Then, create a `<p>` (or two) element within `<article>`:
    > Lorem ipsum dolor sit amet, no singulis accusata vix, ex nonumy ceteros sea. Ne doctus adipisci cum. Omnium fuisset percipitur cu eam. Eum an denique suscipit disputationi. Postulant efficiantur pro an, eu porro putent nonumes vim, ius eu suscipit intellegat.

STEP 6.
* Now that our blog has some content, the next step is adding media to enhance our blog.
* You can do this by using the `<figure>` element. Create one under the closing `</section>` tag.

STEP 7.
* A `<figure>` section wouldn't make much without some content. Maybe an image would be good

STEP 8.
* Let’s describe the image for those who don’t know what statue this is and to make it more accessible!
    * Using `<figcaption>` (hint: it goes inside the `<figure>` opening & closing tags.

<br/>

**Aside Content**

STEP 9.
* For our blog post, you need to add additional content to enhance the post, you can do this by using the `<aside>` element.
    * Under the closing `</figure>` tag create an `<aside>` element.
        * Within `<aside>`, create a `<p>` element containing a quote or some content you'd like to highlight.

STEP 10.
Say you wanted to list something (i.e. resturants, books, resources, data, etc.) You can do this by creating an numbered or bulleted list!

Create a list within the `<aside>` element. 

<br/>

**Media**

STEP 11.
* Right now our blog post consists of only one image. Adding more media can help give a better visual representation of what you are writing about. Let’s create a section for the media content.

* Create a `<section>` element with an id of “media” under the closing `</aside>` tag.
    * Within the new `<section>` element, create an `<article>` element.
        * Then, create a subheading `<h2>` element within your `<article>` element.

STEP 12.
* You are going to add a little description to explain the media. Add a `<p>` element directly underneath the closing heading tag but within your `<article>` element.

STEP 13.
* Maybe you want to add a little video to enhance our content.
* Under the closing `</article>` tag, create a `<video>` element with controls. 

STEP 14.
* In addition to your video you may have some embedded data that you want to add to your blog. Create an `<embed>` element under the closing </video> tag. 

STEP 15.
* Sometimes you may want to use music or sound for your  blog. Create an `<audio>` tag with controls directly below the `<embed>` element. (Don’t forget the closing tag.)

<br/>

**Footer**

STEP 16.
At the bottom of a page, you can add a footer to credit you for the creation of this blog!

* Create a `<footer>` element with an id of “about” under the closing `</main>` tag.
* Inside, add the following content:
    * A `<p>` tag with “Posted by:” followed by your name.
    * A `<p>` tag that provides one type of contact information for people to reach you at. For example:
        >Contact information: Blogger@NYC.com

<br/>
<br/>

**EXTRAS!!**
* Create your virtual résumé webpage using only semantic elements.
* Now that you’ve created a blog about NYC, try creating a blog using only semantic elements about a different city or country!
* Search up more semantic elements and try to add those into your current project.
* Expand on this project by doing more research on New York City and adding any more valuable information you find.