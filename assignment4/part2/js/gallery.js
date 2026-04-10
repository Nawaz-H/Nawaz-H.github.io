const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
      { filename: "pic1", alt: "Closeup of a human eye"},
      { filename: "pic2", alt: "Rock that looks like a wave"},
      { filename: "pic3", alt: "Purple and white pansies"},
      { filename: "pic4", alt: "Section of wall from a pharoah's tomb"},
      { filename: "pic5", alt: "Large moth on a leaf"}
   ];

const baseURL = "images/";

for (const image of images){
	const newImage = document.createElement("img");
	newImage.src   = baseURL + image.filename + ".jpg";
	newImage.alt   = image.alt;
	thumbBar.appendChild(newImage);

	newImage.addEventListener("click", updateDisplayedImage);
	
}

function updateDisplayedImage(){
		displayedImage.src = newImage.src;
		displayedImage.alt = newImage.alt;
}

