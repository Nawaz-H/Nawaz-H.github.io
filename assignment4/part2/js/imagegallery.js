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


const baseURL = "img/";

for (const image of images){
	const picture = document.createElement("img");
	picture.src   = baseURL + image.filename + ".jpg";
	picture.alt   = image.alt;
	thumbBar.appendChild(picture);

	picture.addEventListener("click", updateDisplayedImage);
	
}

function updateDisplayedImage(evt){
		displayedImage.src = evt.target.src;
		displayedImage.alt = evt.target.alt;
}

btn.addEventListener("click",() => {
	if (btn.classList.contains("dark"))
	{
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
	}
	else 
	{
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
	}

	btn.classList.toggle("dark");
});
