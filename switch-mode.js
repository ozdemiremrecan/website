let theme = "dark";
const buttons=document.querySelectorAll(".social-button");
const titles=document.querySelectorAll(".title");
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
    buttons[i].classList.add('dark-button')
    buttons[i].classList.remove('light-button')
  }
  for(let j=0;j<titles.length;j++){
    titles[j].classList.add("title-new");
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
  for(let i=0;i<buttons.length;i++){
    buttons[i].classList.remove('dark-button')
    buttons[i].classList.add('light-button')
  }
  for(let j=0;j<titles.length;j++){
    titles[j].classList.remove("title-new");
  }
  VANTA.FOG({
    el: "#root",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})
}