// the following code is used to demonstrate the need for defer

function handle_html(location) {
  let here = window.location.href;
  if (here.indexOf("/html/") == -1) {
    return "html/" + location;
   } else {
     return location;
}

// Fetch the html for the component
fetch(handle_html("components/nav.html"))
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

fetch(handle_html("components/footer.html"))
  .then((response) => response.text())
  .then((component_html) => {
    console.log(component_html);
    let list_of_elements = document.getElementsByClassName("footer-component");
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });
