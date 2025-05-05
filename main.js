document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const topwearImage = document.getElementById("topwearImage");
  const topwearText = document.getElementById("topwearText");
  const suggestionsPanel = document.getElementById("suggestions");

  // Sample dummy suggestion
  topwearImage.src = "https://i.imgur.com/3V4UHdX.png";
  topwearText.innerText = "Suggested: Blue Denim Jacket - Great for casual weather!";
  suggestionsPanel.classList.remove("hidden");
});
