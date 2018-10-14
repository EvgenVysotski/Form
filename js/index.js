$(document).ready(function() {
    $("#phone").mask("+375 (99) 99-99-999")
})
function showImage() {
    if (this.files && this.files[0]) {
        var obj = new FileReader();
        obj.onload = function (data) {
            var image = document.querySelector("#image");
            image.src = data.target.result;
            image.classList.add("picture-visability");
        }
        obj.readAsDataURL(this.files[0])
    }
}