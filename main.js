const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

// Abre / fecha ao clicar no botão ☰
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navMenu.classList.toggle('active');
});

// Fecha ao clicar fora do menu
document.addEventListener('click', (e) => {
  if (
    navMenu.classList.contains('active') &&
    !navMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navMenu.classList.remove('active');
  }
});

// Fecha ao clicar em qualquer link do menu
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


function enviarWhatsApp() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // VALIDAÇÃO
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
    return;
  }

  // Validação simples de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, informe um e-mail válido.");
    return;
  }

  const telefone = "5516992233117";

  const texto = `Olá, me chamo ${nome}.
Email: ${email}

Mensagem:
${mensagem}`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}




const counters = document.querySelectorAll(".counter");
const countersDecimal = document.querySelectorAll(".counter-decimal");

const animateCounters = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {

      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }

    };

    update();
  });

  countersDecimal.forEach(counter => {

    const target = parseFloat(counter.getAttribute("data-target"));
    let count = 0;

    const update = () => {

      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = count.toFixed(1);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }

    };

    update();
  });

};

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      animateCounters();
      observer.disconnect();

    }

  });

});

observer.observe(document.querySelector(".about-section"));