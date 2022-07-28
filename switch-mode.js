let theme = "dark";
const buttons=document.querySelectorAll(".social-button");
const title=document.querySelector(".title");
const subtitle=document.querySelector(".subtitle");
const moon=document.querySelector(".fixed-icon");
const setTheme=()=>{
  switch(theme){
    case 'dark':
      darkMode();
      theme="light";
      break;
    case 'light':
      lightMode();
      theme="dark";
      break;
  }
}

const darkMode=()=>{
  moon.classList.add('active');
  moon.classList.remove('toggle-icon')
  for(let i=0;i<buttons.length;i++){
    buttons[i].classList.add('light-button')
    buttons[i].classList.remove('dark-button')
  }
  title.classList.add("title-new");
  subtitle.classList.add("title-new")
  VANTA.FOG({
    el: "body",
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
  for(let i=0;i<buttons.length;i++){
    buttons[i].classList.remove('light-button')
    buttons[i].classList.add('dark-button')
  }
  title.classList.remove("title-new");
  subtitle.classList.remove("title-new")
  VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})
}