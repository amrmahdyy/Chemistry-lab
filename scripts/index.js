// navbar dropdown
const dropdownAnchors = document.querySelectorAll(".nav-item.dropdown");
// console.log(dropdownAnchors[0].children[0]);

const mediaQuery = window.matchMedia("(max-width: 992px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log("Media Query Matched!");
    console.log(
      dropdownAnchors[0].children[1].children[0].children[0].getAttribute(
        "href"
      )
    );
    dropdownAnchors.forEach((navLink) => {
      navLink.children[0].setAttribute("href", "#");
      navLink.children[0].setAttribute("data-bs-toggle", "dropdown");
    });
  } else {
    dropdownAnchors.forEach((navLink) => {
      const urlNav =
        navLink.children[1].children[0].children[0].getAttribute("href");
      navLink.children[0].setAttribute("href", urlNav);
      navLink.children[0].removeAttribute("data-bs-toggle");
    });
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
// DOMContentLoaded  end
