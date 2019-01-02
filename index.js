function chromeTwitterGalleryAppendGalleryLink() {

  if (!confirmMediaExists()) {
    return null;
  }


  var profileHeading = document.querySelector(".ProfileHeading-toggle");
  var newProfileHeadingItem = document.querySelector("#twitter-gallery-item");


  if (profileHeading && !newProfileHeadingItem) {

    var userHandle = window.location.href.split('/')[3];

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


function confirmMediaExists() {

  var headingUl = document.querySelectorAll('.ProfileHeading-toggle');

  if (headingUl[0]) {
    var anchors = Array.from(headingUl[0].children);

    var anchorTexts = anchors
      .map(anchor => anchor.innerText)
      .join(' ');


    if (anchorTexts.includes('Media')) {
      return true;
    }
  }

  return false;
}

chromeTwitterGalleryAppendGalleryLink();


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.message === 'twitterUrlChanged') {
      chromeTwitterGalleryAppendGalleryLink();
    }

});
