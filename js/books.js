class BookUtils {
  constructor() {
    this.books = [
      {
        views: "31",
        likes: "29",
        rating: "4.0",
        status: "Available",
        labels: "Motivational",
        author: "Edmond Lau - 2009",
        title: "The Effective Engineer",
        book_cover: "./assets/images/book1.png"
      },
      {
        views: "31",
        likes: "29",
        rating: "4.0",
        status: "Borrowed Out",
        labels: "Business, Entrepreneurship",
        author: "Jim Collins, Jerry I. Porras - 2001",
        title: "Built To Last",
        book_cover: "./assets/images/book2.png"
      },
      {
        views: "31",
        likes: "29",
        rating: "4.0",
        status: "Available",
        labels: "Motivational",
        author: "Eric Reis - 2005",
        title: "The Lean Startup",
        book_cover: "./assets/images/book3.png"
      },
      {
        views: "31",
        likes: "29",
        rating: "4.0",
        status: "Available",
        labels: "Motivational",
        author: "Diomidis Spinellis",
        title: "Effective Python",
        book_cover: "./assets/images/book4.png"
      },
      {
        views: "31",
        likes: "29",
        rating: "4.0",
        status: "Available",
        labels: "Motivational",
        author: "Elizabeth Gilbert - 2014",
        title: "Big Magic",
        book_cover: "./assets/images/book5.png"
      }
    ];
  }

  generateBooks(books, containerId) {
    var container = document.getElementById(containerId);
    books.forEach(generateBookItem);

    function generateBookItem(book) {
      var li = document.createElement("li");
      li.classList.add("flex");

      var thumbnailImage = document.createElement("img");
      thumbnailImage.src = book.book_cover;
      thumbnailImage.alt = "book thumbnail";
      li.appendChild(thumbnailImage);

      var detailsContainer = document.createElement("div");
      detailsContainer.classList.add("details");

      var status = document.createElement("p");
      status.classList.add("status");
      status.innerText = book.status;
      if (book.status != "Available") {
        status.style.color = "#ff0000";
      }
      detailsContainer.appendChild(status);

      var title = document.createElement("p");
      title.classList.add("title");
      title.innerText = book.title;
      detailsContainer.appendChild(title);

      var author = document.createElement("p");
      author.classList.add("author");
      author.innerText = book.author;
      detailsContainer.appendChild(author);

      var genre = document.createElement("p");
      genre.classList.add("author");
      genre.innerText = book.labels;
      detailsContainer.appendChild(genre);

      var engagement = document.createElement("div");
      engagement.classList.add("engagement");

      var ratingContainer = document.createElement("div");

      var ratingText = document.createElement("p");
      ratingText.innerText = "Rating: " + book.rating;
      ratingContainer.appendChild(ratingText);

      var ratingIcon = document.createElement("img");
      ratingIcon.src = "./assets/images/rating.png";
      ratingIcon.alt = "rating icon";
      ratingContainer.appendChild(ratingIcon);

      engagement.appendChild(ratingContainer);

      var interactionContainer = document.createElement("ul");
      interactionContainer.classList.add("interactions");
      interactionContainer.classList.add("flex");

      var peopleContainer = document.createElement("li");
      var peopleIcon = document.createElement("img");
      peopleIcon.src = "./assets/images/people.png";
      peopleIcon.alt = "people icon";
      peopleContainer.appendChild(peopleIcon);

      interactionContainer.appendChild(peopleContainer);

      var peopleCount = document.createElement("p");
      peopleCount.innerText = book.views;
      peopleContainer.appendChild(peopleCount);

      var likeContainer = document.createElement("li");
      var likeIcon = document.createElement("img");
      likeIcon.src = "./assets/images/like.png";
      likeIcon.alt = "like icon";
      likeContainer.appendChild(likeIcon);

      var likeCount = document.createElement("p");
      likeCount.innerText = book.likes;
      likeContainer.appendChild(likeCount);

      interactionContainer.appendChild(likeContainer);

      engagement.appendChild(interactionContainer);

      detailsContainer.appendChild(engagement);

      li.appendChild(detailsContainer);
      container.appendChild(li);
    }
  }

  filterBooks(books, string) {
    var filteredBooks = books.filter(function filterByTitle(book) {
      /* check equality in lower or uppercase to improve filter accuracy */
      var check = book.title.toLowerCase().includes(string.toLowerCase());
      if (!check) {
        check = book.author.toLowerCase().includes(string.toLowerCase());
      }
      if (!check) {
        check = book.labels.toLowerCase().includes(string.toLowerCase());
      }

      return check;
    });

    /* populate all books if no search result is found */
    if (filteredBooks.length <= 0) {
      return this.books;
    }

    return filteredBooks;
  }

  searchFilter(string) {
    var recentlyAddedContainer = document.getElementById("recently_added");
    var allBooksContainer = document.getElementById("all_books");

    recentlyAddedContainer.innerHTML = "";
    allBooksContainer.innerHTML = "";

    var filteredBooks = this.filterBooks(this.books, string);
    this.generateBooks(filteredBooks, "recently_added");
    this.generateBooks(filteredBooks, "all_books");
  }
}

var bookUtils = new BookUtils();
var searchInput = document.getElementById("search_input");

bookUtils.generateBooks(bookUtils.books, "recently_added");
bookUtils.generateBooks(bookUtils.books.concat(bookUtils.books), "all_books");

searchInput.addEventListener("keyup", function showSearchDropdown(e) {
  bookUtils.searchFilter(e.target.value);
});
