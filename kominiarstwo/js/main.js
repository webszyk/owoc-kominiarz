// Uruchamiamy cały skrypt dopiero wtedy, gdy cała struktura strony (DOM) zostanie w pełni załadowana.
document.addEventListener("DOMContentLoaded", function () {

  // --- 1. POBIERANIE ELEMENTÓW ---
  // Przechowujemy wszystkie elementy, których potrzebujemy, w stałych na samej górze.
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  // --- 2. GŁÓWNE FUNKCJE ---

  // Funkcja, która dodaje tło do nawigacji podczas przewijania.
  const handleScroll = () => {
    // Jeśli strona jest przewinięta o 50px lub więcej, dodaj klasę. W przeciwnym razie, usuń ją.
    if (window.scrollY >= 50) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  };

  // Funkcja, która zamyka mobilne menu po kliknięciu w link.
  const closeMobileMenu = () => {
    navList.classList.remove("show");
  };

  // --- 3. NASŁUCHIWANIE NA ZDARZENIA ---

  // Dodajemy nasłuchiwanie na zdarzenie przewijania strony.
  window.addEventListener("scroll", handleScroll);

  // Do każdego linku w nawigacji dodajemy nasłuchiwanie na kliknięcie, które zamknie menu.
  allNavItems.forEach((item) =>
    item.addEventListener("click", closeMobileMenu)
  );

});