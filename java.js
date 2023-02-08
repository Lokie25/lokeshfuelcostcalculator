<script>
function showImage(imgSrc, imgAlt) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
}
</script>