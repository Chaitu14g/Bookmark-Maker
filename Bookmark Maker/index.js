// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormEl = document.getElementById("bookmarkForm");

let siteNameInputEL = document.getElementById("siteNameInput");

let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");

let siteUrlErrMsgEL = document.getElementById("siteUrlErrMsg");

let submitBtnEl = document.getElementById("submitBtn");

let bookmarksListEl = document.getElementById("bookmarksList");

let details = {
    name: "",
    email: "",
};

/*siteNameInputEL.addEventListener("click", function(event){
    event.target.classList.add("input_border_color_change");
});*/

siteNameInputEL.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    details.name = event.target.value;
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEL.textContent = "Required*";
    } else {
        siteUrlErrMsgEL.textContent = "";
    }
    details.email = event.target.value;
});

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitBtnEl.classList.add("btn", "btn-primary");
    let a = details.name;
    let b = details.email;
    if (a === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    if (b === "") {
        siteUrlErrMsgEL.textContent = "Required*";
    } else {
        siteUrlErrMsgEL.textContent = "";
    }
    if ((a !== "") && (b !== "")) {
        bookmarksListEl.classList.remove("d-none");
        let new_listEl = document.createElement("li");
        new_listEl.classList.add("list_container", "mt-3");
        bookmarksListEl.appendChild(new_listEl);
        let heading = document.createElement("h1");
        heading.textContent = a;
        heading.classList.add("list_heading");
        new_listEl.appendChild(heading);
        let link = document.createElement("a");
        link.href = b;
        link.textContent = b;
        link.target = "_blank";
        link.classList.add("list_link");
        new_listEl.appendChild(link);
        console.log(bookmarksListEl);
    }
});