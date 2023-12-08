<!-- DROPDOWN ON HOVER -->
 
  let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
  let dropdownItems = document.querySelector(".header__submenu");

  items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.setAttribute("open", true);
    let ulElement = item.querySelector("ul");
    if (ulElement !== null) {
      ulElement.addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
    }
  });
  item.addEventListener("focus", () => {
    item.setAttribute("open", true);
  });
  item.addEventListener("blur", () => {
    item.removeAttribute("open");
  });
  item.addEventListener("mouseenter", () => {
      item.setAttribute("open", "");
    });
    item.addEventListener("mouseleave", () => {
      item.removeAttribute("open");
    });
});
if (dropdownItems !== null) {
  dropdownItems.addEventListener("mouseleave", () => {
    items.forEach(item => {
      item.removeAttribute("open");
    });
  });
}
