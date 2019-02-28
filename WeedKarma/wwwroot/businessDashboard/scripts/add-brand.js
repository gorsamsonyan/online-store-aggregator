
var fileSelector1 = ".input-file";
var fileSelector2 = ".input-file2";
var inputId1 = "LogoPath";
var inputId2 = "CoverPath";


setB64ImageAsInputValue(fileSelector1, inputId1);
setB64ImageAsInputValue(fileSelector2, inputId2);

function setB64ImageAsInputValue(fileSelector, inputId) {
    document.querySelector(fileSelector).addEventListener("change", function () {
        if (this.files[0]) {
            let fr = new FileReader();
            fr.addEventListener("load", function () {
                var input = document.getElementById(inputId);
                    input.value = fr.result;
                console.dir(input);
            }, false);
            fr.readAsDataURL(this.files[0]);
        }
    });
}