let img_box = document.querySelector(".img_box");
let btn = document.querySelector("button");
// img_box.innerHTML = "<img></img>"
let img_url = document.querySelector("img");
// let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  if ((img_url.style.visibility = "hidden")) {
    img_url.style.visibility = "visible";
  }
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data[0].url);
      img_url.src = data[0].url;
    });
});
