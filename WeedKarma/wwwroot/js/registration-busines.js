$(document).ready(function () {
    $("#disable-input").click(function () {
        var websiteDisable = document.getElementById("website");
        websiteDisable.disabled = true;
        website.style.background = "red";
    });
});

function fileDownloaded() {
    var i = document.getElementsByClassName("insert-image")[0];
    i.classList.add("hide");
    var v = document.getElementsByClassName("dowonloded-text")[0];
    v.classList.add("show");
}