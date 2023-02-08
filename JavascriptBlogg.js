




const imgE = document.querySelector('.Excel-logo');
imgE.addEventListener('click', function() {
  const posts = document.querySelectorAll('.blog-post');
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].getAttribute('data-category') !== 'Excel') {
      posts[i].style.display = 'none';
    } else {
      posts[i].style.display = 'block';
    }
  }
});

const imgPBI = document.querySelector('.powerbi-logo');
imgPBI.addEventListener('click', function() {
  const posts = document.querySelectorAll('.blog-post');
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].getAttribute('data-category') !== 'PBI') {
      posts[i].style.display = 'none';
    } else {
      posts[i].style.display = 'block';
    }
  }
});




const imgBooks = document.querySelector('.Book-logo');
imgBooks.addEventListener('click', function() {
  const posts = document.querySelectorAll('.blog-post');
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].getAttribute('data-category') !== 'Books') {
      posts[i].style.display = 'none';
    } else {
      posts[i].style.display = 'block';
    }
  }
});

const homeButton = document.querySelector('.Alle');
  homeButton.addEventListener('click', function() {
    const posts = document.querySelectorAll('.blog-post');
    for (let i = 0; i < posts.length; i++) {
      posts[i].style.display = 'block';
    }
  });


  const searchInput = document.querySelector(".search-input");
  const blogPosts = document.querySelectorAll(".blog-post");
  
  searchInput.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
  
    blogPosts.forEach(post => {
      const category = post.getAttribute("data-category").toLowerCase();
      const title = post.querySelector(".post-title").textContent.toLowerCase();
  
      if (category.includes(searchTerm) || title.includes(searchTerm)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });


/* #### Dymanic Headings ####*/
/*
const HPBI = document.querySelector('.powerbi-logo');
HPBI.addEventListener('click', function() {
  const heading = document.querySelector('.power-bi-filter');
  heading.style.display = (heading.style.display === 'block') ? 'none' : 'block';
});

const HExcel = document.querySelector('.Excel-logo');
HExcel.addEventListener('click', function() {
  const heading = document.querySelector('.Excel-filter');
  heading.style.display = (heading.style.display === 'block') ? 'none' : 'block';
});

const HAlle = document.querySelector('.cfilter-logo');
HAlle.addEventListener('click', function() {
  const heading = document.querySelector('.OverskriftBlogg');
  heading.style.display = (heading.style.display === 'block') ? 'none' : 'block';
});

const Hbooks = document.querySelector('.Book-logo');
Hbooks.addEventListener('click', function() {
  const heading = document.querySelector('.Books-filter');
  heading.style.display = (heading.style.display === 'block') ? 'none' : 'block';
});
*/



/*
function filterPosts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const blogPosts = document.querySelectorAll(".blog-post");

  for (const blogPost of blogPosts) {
    const category = blogPost.dataset.category.toLowerCase();
    if (category.includes(searchInput)) {
      blogPost.style.display = "block";
    } else {
      blogPost.style.display = "none";
    }
  }
}*/

function filterPosts() {
  // Get the search input value
  const searchInput = document.querySelector("#searchInput").value.toLowerCase();
  
  // Get all the blog posts
  const blogPosts = document.querySelectorAll(".blog-post");
  
  // Loop through each blog post
  for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];
    const dataCategory = blogPost.getAttribute("data-category").toLowerCase();
    const postTitle = blogPost.querySelector(".post-title").textContent.toLowerCase();
    const postDate = blogPost.querySelector(".Dato").textContent.toLowerCase();
    const postBox = blogPost.querySelector(".Box").textContent.toLowerCase();
    
    // Check if the search input value matches the data-category, post-title, post-date, or post-box of the blog post
    if (dataCategory.includes(searchInput) || postTitle.includes(searchInput) || postDate.includes(searchInput) || postBox.includes(searchInput)) {
      // If the search input matches, display the blog post
      blogPost.style.display = "block";
    } else {
      // If the search input does not match, hide the blog post
      blogPost.style.display = "none";
    }
  }
}



