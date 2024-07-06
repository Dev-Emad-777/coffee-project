$(document).ready(function () {
  // Load the navbar
  $("#navbar-container").load("navbar.html", function () {
    const currentHref = window.location.href;
    const filename = "./" + currentHref.substring(currentHref.lastIndexOf("/") + 1);

    // Select all anchor tags within the div with id="navbar-container"
    $("#navbar-container a").each(function () {
      const href = $(this).attr("href");

      // Check if the href attribute matches the filename
      if (href === filename) {
        // Add the "active" class to the matching link
        $(this).addClass("active");

        // Exit the loop since we only need to activate one link
        return false;
      }
    });
  });
});

$(document).ready(function () {
  $("#footer").load("footer.html");
});
