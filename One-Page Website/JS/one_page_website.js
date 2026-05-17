// Create lightbox container
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

// Style the lightbox
lightbox.style.display = "none";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "1000";

// Create enlarged image
const lightboxImg = document.createElement("img");
lightboxImg.style.maxWidth = "80%";
lightboxImg.style.maxHeight = "80%";
lightboxImg.style.border = "5px solid white";
lightboxImg.style.borderRadius = "10px";
lightbox.appendChild(lightboxImg);

// Open lightbox when image is clicked
const images = document.querySelectorAll(".gallery-img");

images.forEach(image => {
    image.style.width = "300px";
    image.style.cursor = "pointer";
    image.style.margin = "10px";

    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});

// Close lightbox when clicked
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
