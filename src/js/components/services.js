document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.services__card');
  const serviceImg = document.getElementById('services-img');
  const serviceDesc = document.getElementById('services__desc');

  const serviceContent = {
    branding: {
      img: '../img/services-1.png',
      desc: "We're not your average marketing agency. We're a bunch of digital<br> nomads on a mission to make your brand shine."
    },
    uxui: {
      img: '../img/services-2.png',
      desc: 'UX/UI design description goes here.'
    },
    app: {
      img: '../img/services-3.png',
      desc: 'App development description goes here.'
    },
    web: {
      img: '../img/services-2.png',
      desc: 'Web development description goes here.'
    },
    digital: {
      img: '../img/services-1.png',
      desc: 'Digital transformation description goes here.'
    },
    tech: {
      img: '../img/services-3.png',
      desc: 'Technological advancement description goes here.'
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const service = this.getAttribute('data-service');

      serviceImg.src = serviceContent[service].img;
      serviceDesc.textContent = serviceContent[service].desc;

      cards.forEach(c => c.classList.remove('sc-active'));
      this.classList.add('sc-active');
    });
  });
});
