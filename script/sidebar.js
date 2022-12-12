function sideBarToggle() {
    sidebar.classList.toggle("close");
    if (schoolLogo.style.width == '200px') {
    schoolLogo.style.width = '60px';
    } else {
        schoolLogo.style.width = '200px'
    }
}



const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      schoolLogo = body.querySelector(".sidebar header .image img"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sideBarToggle()
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});