
const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

let currentPage = 0;

const pageNames = [
  "COVER",
  "OUR BEGINNING",
  "MEMORIES I",
  "MEMORIES II",
  "LITTLE REMINDER",
  "A LETTER FOR YOU",
  "FOREVER"
];

function showPage(index) {
  if (index < 0 || index >= pages.length) return;

  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  currentPage = index;

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;

  pageIndicator.textContent =
    `${pageNames[currentPage]} — ${String(currentPage + 1).padStart(2, "0")} / 07`;

  // Reset the letter whenever its page is left
  if (currentPage !== 5) {
    envelope.classList.remove("open");
    letterBtn.textContent = "OPEN YOUR LETTER";
  }
}

nextBtn.addEventListener("click", () => {
  showPage(currentPage + 1);
});

prevBtn.addEventListener("click", () => {
  showPage(currentPage - 1);
});

// Keyboard page navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showPage(currentPage + 1);
  }

  if (event.key === "ArrowLeft") {
    showPage(currentPage - 1);
  }
});

// Interactive hidden letter
const envelope = document.getElementById("envelope");
const letterBtn = document.getElementById("letterBtn");

function toggleLetter() {
  const isOpen = envelope.classList.toggle("open");

  letterBtn.textContent = isOpen
    ? "CLOSE YOUR LETTER"
    : "OPEN YOUR LETTER";
}

envelope.addEventListener("click", toggleLetter);
letterBtn.addEventListener("click", toggleLetter);

// Initial page
showPage(0);
