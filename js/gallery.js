// Daftar nama file gambar
const images = [
  "AEROPOLIS BANDARA SOETTA.jpg",
  "ASANA RESIDENCE CIBUBUR.jpg",
  "MAHATA MARGONDA DEPOK.jpg",
  "MAHATA TANJUNG BARAT.jpg",
  "MUTIARA BEKASI.jpg",
  "PARAGON SQUARE TANGERANG.jpg",
  "RAFFLES HILLS CIBUBUR.jpg",
  "Rs. Pangkal Pinang 1.jpg",
  "Rs. Pangkal Pinang 2.jpg",
  "Rs. Pangkal Pinang 3.jpg",
  "Rs. Pangkal Pinang 4.jpg",
  "SENTRA TIMUR SAPPHIRE TOWER.jpg",
  "SERPONG JAYA.png",
  "SPRING HILL.jpg",
  "THE GREEN COURT CENGKARENG.jpg",
  "THE GREEN PRAMUKA RAWASARI.jpg",
];

// Folder tempat gambar disimpan
const folderPath = "assets/Project/";

// Elemen target untuk menampilkan gambar
const gallery = document.getElementById("gallery");

// Loop untuk menambahkan gambar ke dalam HTML
images.forEach((image) => {
  const div = document.createElement("div");
  div.className = "col mb-4 portfolio-item kusen_upvc";

  div.innerHTML = `
        <a href="${folderPath + image}" class="image-link" title="${image}">
            <img src="${folderPath + image}" class="img-fluid" alt="portfolio">
        </a>
    `;

  gallery.appendChild(div);
});
