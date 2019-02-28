document.querySelector(".input-file").addEventListener("change", function () {
    if (this.files[0]) {
        let fr = new FileReader();
        console.log(this.files[0].mozFullPath);
        fr.addEventListener("load", function () {
            //document.querySelector(".downloaded-product-image").style.backgroundImage = "url(" + fr.result + ")";
            //document.querySelector(".downloaded-product-image").style.height = "90px";
            document.getElementById("LogoPath").value = fr.result;
        }, false);

        fr.readAsDataURL(this.files[0]);

    }

});