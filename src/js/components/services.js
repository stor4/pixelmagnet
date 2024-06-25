document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.services__card');
  const serviceImg = document.getElementById('service-img');
  const serviceDesc = document.getElementById('service-desc');

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
      img: '../img/services-4.png',
      desc: 'Web development description goes here.'
    },
    digital: {
      img: '../img/services-5.png',
      desc: 'Digital transformation description goes here.'
    },
    tech: {
      img: '../img/services-6.png',
      desc: 'Technological advancement description goes here.'
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const service = this.getAttribute('data-service');

      // Обновление изображения и описания
      serviceImg.src = serviceContent[service].img;
      serviceDesc.innerHTML = serviceContent[service].desc;

      // Удаление класса активного состояния у всех карточек и добавление его к текущей карточке
      cards.forEach(c => c.classList.remove('sc-active'));
      this.classList.add('sc-active');
    });
  });
});
