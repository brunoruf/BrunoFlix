const tooltipProfile = document.querySelector('.profile-picture')
tooltipProfile.addEventListener('click', openProfile)

function openProfile() {
    document.querySelector('.profile-box').classList.add("active")
    document.querySelector('.profile-picture').classList.add("active")
}

const tooltipProfileClose = document.querySelector('.profile-box')
tooltipProfileClose.addEventListener('mouseout', closeProfile)

function closeProfile() {
    document.querySelector('.profile-box').classList.remove("active")
    document.querySelector('.profile-picture').classList.remove("active")
}

const header = document.querySelector("header")
window.onscroll = ()=> {
    if(document.documentElement.scrollTop > 50){
        header.style.visibility = "hidden"
    } else{
        header.style.visibility = "visible"
    }
}