document.getElementById("getGoat").addEventListener(
  "click",
  function () {
    const img = document.createElement("img");
    img.src = "https://picsum.photos/300/200";
    img.setAttribute("data-test", "img-goat");
    document.body.appendChild(img);
  },
  false
);
