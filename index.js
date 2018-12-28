function chromeTwitterGalleryAppendGalleryLink() {

  var profileHeading = document.querySelector(".ProfileHeading-toggle");
  var newProfileHeadingItem = document.querySelector("#twitter-gallery-item");


  if (profileHeading && !newProfileHeadingItem) {

    var userHandle = window.location.href.split('/')[3];

    if (userHandle !== "i" && userHandle !== "mentions") {

      var newProfileHeadingLink = document.createElement('a');
      newProfileHeadingItem = document.createElement('li');

      newProfileHeadingItem.classList.add("ProfileHeading-toggleItem", "u-textUserColor");
      newProfileHeadingItem.id = "twitter-gallery-item";
      newProfileHeadingLink.classList.add("ProfileHeading-toggleLink", "js-nav");

      newProfileHeadingLink.href = `/search?f=images&vertical=default&q=from%3A${userHandle}&src=typd`;
      newProfileHeadingLink.text = "View Gallery";

      newProfileHeadingItem.appendChild(newProfileHeadingLink);
      profileHeading.appendChild(newProfileHeadingItem);
    }
  }
}


chromeTwitterGalleryAppendGalleryLink();


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.message === 'twitterUrlChanged') {
      chromeTwitterGalleryAppendGalleryLink();
    }

});
