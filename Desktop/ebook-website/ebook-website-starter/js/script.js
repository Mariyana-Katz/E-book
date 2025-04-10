
//function for changing the navbar background color when user scroll down 50 px. Listen for scroll event, check window.scrolly(vertical scroll position)
function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        } else{
            navbar.classList.remove('bg-dark');
            navbar.classList.add('navbar-sticky');
                }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);