// Botão saibamais receitas

document.querySelectorAll(".receita button").forEach((button) => {
  button.addEventListener("click", () => {
    const receita = button.closest(".receita");
    const paragrafo = receita.querySelector(".paragrafo");

    if (receita.classList.contains("ativa")) {
      paragrafo.style.height = "0";
      paragrafo.style.opacity = "0";
      paragrafo.style.padding = "0 24px";
    } else {
      paragrafo.style.height = "auto";
      paragrafo.style.opacity = "1";
      paragrafo.style.padding = "24px";
    }

    receita.classList.toggle("ativa");
  });
});

// Sistema de reset da aba de acessibilidades

document.getElementById("resetAccessibility").addEventListener("click", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
});

function copiar(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        mostrarToast("Copiado: " + texto);
    });
}

function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000); // 2 segundos
}

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

let autoplayInterval; // salva o timer

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  indicators.forEach(i => i.classList.remove("active"));

  slides[index].classList.add("active");
  indicators[index].classList.add("active");
}

// === Função para reiniciar o autoplay ===
function restartAutoplay() {
  clearInterval(autoplayInterval); // apaga o timer atual
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 7000);
}

// === Botão próximo ===
document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  restartAutoplay(); // reinicia timer ao clicar
};

// === Botão anterior ===
document.querySelector(".prev").onclick = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  restartAutoplay(); // reinicia timer
};

// === Indicadores ===
indicators.forEach((ind, i) => {
  ind.onclick = () => {
    currentIndex = i;
    showSlide(currentIndex);
    restartAutoplay(); // reinicia timer
  };
});

// === Iniciar autoplay na primeira carga ===
restartAutoplay();


