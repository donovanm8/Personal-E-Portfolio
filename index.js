let contrastToggle = false;
let isModalOpen = false;

const scaleFactor = 1 / 20

function moveBackground (){
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px , ${y * boolInt}px)`
    }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  event.preventDefault();
  emailjs
    .sendForm(
      "service_t9la3pa",
      "template_798sudl",
      event.target,
      "C0DmF2EILNSfuOV5b"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily down please contact me directly on donovanlopez999@gmail.com"
      );
    });
}


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}
