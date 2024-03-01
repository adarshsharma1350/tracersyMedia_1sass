// // FAQ 
// document.addEventListener('DOMContentLoaded', function(){ });

document.addEventListener('DOMContentLoaded', () => { const faqContainer=document.querySelector('.faq-content');

faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody =group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // toggle icon
    icon.classList.toggle('faq-plus');
    icon.classList.toggle('faq-minus');

    // toggle visibility of body 
    groupBody.classList.toggle('open');

    // close other opened FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {

        if(otherGroup!==group){
            const otherGroupBody = otherGroup.querySelector('.faq-group-body');

            const otherIcon = otherGroup.querySelector('.faq-group-body i');

            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
    }
        
    });
    });

});

// mobile menu
document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toogle('active')
    );
})