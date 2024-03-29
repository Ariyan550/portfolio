

const loadData =async()=>{    
    // dom selector for pas json data inside html tag

const logo =document.querySelector('.logo')
const link =document.querySelectorAll('.navbar-link')
const heroHeading =document.querySelector('.heroHeading')
const headerBio =document.querySelector('.bio')
const cvdownload =document.querySelector('.cv')
const hireme =document.querySelector('.hire')
const heroImg =document.querySelector('.heroImage')
    try {
        const data =await fetch('../biodata.json')
        const getData =await data.json()
            const {logoName} =getData
            logo.innerHTML =`${logoName}`
            link[0].innerHTML =`${getData.navbarItem.home}`
            link[1].innerHTML =`${getData.navbarItem.about}`
            link[2].innerHTML =`${getData.navbarItem.services}`
            link[3].innerHTML =`${getData.navbarItem.portfolio}`
            link[4].innerHTML =`${getData.navbarItem.contact}`
            heroHeading.innerHTML =`${getData.hero.title}`
            headerBio.innerHTML =`${getData.hero.bio}`
            cvdownload.href= `${getData.hero.cv}`
            hireme.href= `${getData.hero.hire}`
            heroImg.src =`${getData.hero.img}`


    } catch (error) {
        alert(error)
    }
}

// custom js code 


window.addEventListener('scroll',()=>{
    const header =document.querySelector('.header')
    const scrolltop =document.querySelector('.scrollTop')

    if(pageYOffset >200){
        header.classList.add('active')
        scrolltop.classList.add('active')
    }
    else{
        header.classList.remove('active')
        scrolltop.classList.remove('active')
    }

    scrolltop.addEventListener('click',()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })


})
