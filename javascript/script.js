// the following code is used to demonstrate the need for defer

// Fetch the html for the component
fetch("components/nav.html")
  .then((response) => response.text())
  .then((component_html) => {
    console.log(component_html);
    // Find the empty elements on the page
    let list_of_elements = document.getElementsByClassName("nav-component");
    // FIll the empty elemenets with the colntents of the fetched html
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });

fetch("components/footer.html")
  .then((response) => response.text())
  .then((component_html) => {
    console.log(component_html);
    let list_of_elements = document.getElementsByClassName("footer-component");
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });
