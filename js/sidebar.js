class SideBarUtils {
  constructor() {
    this.content = [
      {
        items: [
          { name: "Home", count: "", active: true, notify: false },
          { name: "Profile", count: "", active: false, notify: false },
          { name: "Notifications", count: "3", active: false, notify: true }
        ]
      },
      {
        title: "Explore",
        items: [
          { name: "Books", count: "273", active: false, notify: false },
          { name: "Genres", count: "42", active: false, notify: false },
          { name: "Authors", count: "106", active: false, notify: false }
        ]
      },
      {
        title: "My Books",
        items: [
          { name: "Queued", count: "3", active: false, notify: false },
          { name: "Currently Borrowed", count: "0", active: false, notify: false },
          { name: "Favourites", count: "19", active: false, notify: false },
          { name: "History", count: "", active: false, notify: false }
        ]
      },
      {
        title: "Admin",
        items: [
          { name: "Book Requests", count: "2", active: false, notify: true },
          { name: "Members", count: "34", active: false, notify: false },
          { name: " Library Settings", count: "", active: false, notify: false }
        ]
      }
    ];
  }

  addSidebarTransition() {
    document.getElementById("sidebar").style.transition = "0.3s all ease-in-out";
  }

  generateContent() {
    var parent = document.getElementById("sidebar_container");
    this.content.forEach(generateSection);

    function generateSection(section) {
      var sectionContainer = document.createElement("section");
      if (section.title) {
        let sectionTitle = document.createElement("p");
        sectionTitle.classList.add("title");
        sectionTitle.innerText = section.title;
        sectionContainer.appendChild(sectionTitle);
      }

      if (section.items) {
        var itemsContainer = document.createElement("ul");
        section.items.forEach(populateItems);
        sectionContainer.appendChild(itemsContainer);
      }

      parent.appendChild(sectionContainer);

      function populateItems(item) {
        var itemContainer = document.createElement("li");
        var nameContainer = document.createElement("p");
        var countContainer = document.createElement("div");

        if (item.notify) {
          countContainer.classList.add("bubble");
          var content = document.createElement("p");
          content.classList.add("content");
          content.innerText = item.count;
          countContainer.appendChild(content);
        } else {
          countContainer.classList.add("count");
          countContainer.innerText = item.count;
        }

        nameContainer.innerText = item.name;

        if (item.active) {
          nameContainer.classList.add("font-green");
        }

        itemContainer.appendChild(countContainer);
        itemContainer.appendChild(nameContainer);
        itemsContainer.appendChild(itemContainer);
      }
    }
  }
}

window.onload = function () {
  var sideBarUtils = new SideBarUtils();
  sideBarUtils.generateContent();
  sideBarUtils.addSidebarTransition();
};
