document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
let theme = "dark";
const buttons=document.querySelectorAll(".social-button");
const title=document.querySelector(".title");
const moon=document.querySelector(".fixed-icon");
const setTheme=()=>{
  switch(theme){
    case 'dark':
      lightMode();
      theme="light";
      break;
    case 'light':
      darkMode();
      theme="dark";
      break;
  }
}

const darkMode=()=>{
  moon.classList.add('active');
  moon.classList.remove('toggle-icon')
  title.style.color="white";
  for(let i=0;i<buttons.length;i++){
    buttons[i].classList.add('dark-button')
  }
  VANTA.FOG({
    el: "#root",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x90908,
    midtoneColor: 0x554545,
    lowlightColor: 0x0,
    baseColor: 0x0,
    blurFactor: 0.68,
    speed: 5.00
  })
}

const lightMode=()=>{
  moon.classList.remove('active');
  moon.classList.add('toggle-icon');
  VANTA.FOG({
    el: "#root",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})
}