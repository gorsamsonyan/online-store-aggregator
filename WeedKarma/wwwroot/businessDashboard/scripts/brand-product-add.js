

$('#producMetaKey').tagsinput({
    maxTags: 20,
    tagClass: 'big'
});


document.querySelector(".brand-product-image").addEventListener("change", function () {
    if (this.files[0]) {
        let fr = new FileReader();

        fr.addEventListener("load", function () {
            document.querySelector(".downloaded-product-image").style.backgroundImage = "url(" + fr.result + ")";
            document.querySelector(".downloaded-product-image").style.height = "90px";
            document.getElementById("brandProductImagePath").value = fr.result;




        }, false);

        fr.readAsDataURL(this.files[0]);

    }

});