var profileHeading = document.querySelector(".ProfileHeading-toggle");

if (profileHeading) {

    var userHandle = window.location.href.split('/')[3];
    var newProfileHeadingItem = document.createElement('li');
    var newProfileHeadingLink = document.createElement('a');

    newProfileHeadingItem.classList.add("ProfileHeading-toggleItem", "u-textUserColor");
    newProfileHeadingLink.classList.add("ProfileHeading-toggleLink", "js-nav");

    newProfileHeadingLink.href = `/search?f=images&vertical=default&q=from%3A${userHandle}&src=typd`;
    newProfileHeadingLink.text = "View Gallery";

    newProfileHeadingItem.appendChild(newProfileHeadingLink);
    profileHeading.appendChild(newProfileHeadingItem);
}
