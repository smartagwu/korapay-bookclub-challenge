{
  bindButtonListeners();
  bindCarouselListeners();
  bindSearchInputListeners();
}

function bindSearchInputListeners() {
  var searchInput = document.getElementById("search_input");
  var mobileSearchDropdown = document.getElementById("mobile_search_dropdown");
  var desktopSearchDropdown = document.getElementById("desktop_search_dropdown");

  searchInput.addEventListener("focus", function showSearchDropdown() {
    if (window.innerWidth <= 767) {
      mobileSearchDropdown.classList.remove("display-none");
    } else {
      desktopSearchDropdown.classList.remove("display-none");
    }
  });

  searchInput.addEventListener("blur", function hideSearchDropdown() {
    if (window.innerWidth <= 767) {
      mobileSearchDropdown.classList.add("display-none");
    } else {
      desktopSearchDropdown.classList.add("display-none");
    }
  });
}

function bindCarouselListeners() {
  var currentMenu;
  var carouselMenus = document.getElementsByClassName("menu");
  var carousels = document.getElementsByClassName("carousel-cell");

  var closeOverlayIcons = document.getElementsByClassName("close_overlay");

  for (let i = 0; i < carousels.length; i++) {
    if (window.innerWidth > 767) {
      let element = carousels[i];
      element.addEventListener("mouseover", function showOverlay() {
        element.childNodes[3].classList.remove("display-none");
        element.childNodes[3].style.opacity = "1";
      });

      element.addEventListener("mouseout", function hideOverlay() {
        element.childNodes[3].style.opacity = "0";
        element.childNodes[3].classList.remove("display-none");
      });
    }
  }

  for (let i = 0; i < carouselMenus.length; i++) {
    if (window.innerWidth <= 767) {
      let element = carouselMenus[i];
      let overlay = element.parentElement.parentElement.parentElement.childNodes[3];
      element.addEventListener("click", function showOverlay() {
        overlay.classList.remove("display-none");
        overlay.style.opacity = "1";
        currentMenu = element;
        currentMenu.style.opacity = "0";
      });
    }
  }

  for (let i = 0; i < closeOverlayIcons.length; i++) {
    if (window.innerWidth <= 767) {
      let element = closeOverlayIcons[i];
      let overlay = element.parentElement.parentElement;
      element.addEventListener("click", function hideOverlay() {
        overlay.style.opacity = "0";
        overlay.classList.add("display-none");
        currentMenu.style.opacity = "1";
      });
    }
  }
}

function bindButtonListeners() {
  var app = document.getElementById("app");
  var sideBar = document.getElementById("sidebar");
  var searchButton = document.getElementById("search_icon");
  var hamburger = document.getElementById("hamburger_icon_id");
  var backButton = document.getElementById("search_back_button_id");
  var sideBarButton = document.getElementById("sidebar_back_button_id");
  var headerContainer = document.getElementById("header_container_id");

  backButton.addEventListener("click", function hideSearchBar() {
    headerContainer.classList.remove("search-action");
  });

  searchButton.addEventListener("click", function showSearchBar() {
    headerContainer.classList.add("search-action");
  });

  sideBarButton.addEventListener("click", function hideSideBar() {
    app.style.overflowY = "auto";
    sideBar.style.transform = "translate(-300px, 0px)";
  });

  hamburger.addEventListener("click", function showSideBar() {
    app.style.overflowY = "hidden";
    sideBar.style.transform = "translate(0px, 0px)";
  });
}
