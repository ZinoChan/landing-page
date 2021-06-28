import "@fontsource/quicksand";
import "@fontsource/quicksand/700.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/500.css";
import "@fortawesome/fontawesome-free/css/all.css"



const navList = document.querySelector('.nav-list');
const toggler = document.querySelector('.bars');

toggler.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    toggler.classList.toggle('active');
})