function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function filterProducts() {
  const gender = document.getElementById("genderFilter").value;
  const brand = document.getElementById("brandFilter").value;

  document.querySelectorAll(".product-card").forEach(card => {
    const matchGender = gender === "all" || card.dataset.gender === gender;
    const matchBrand = brand === "all" || card.dataset.brand === brand;
    card.style.display = matchGender && matchBrand ? "block" : "none";
  });
}
