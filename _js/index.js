// Tooltip Profile

const tooltipProfile = document.querySelector('.profile-picture')
const stayProfile = document.querySelector('.profile-box')
const tooltipProfileClose = document.querySelector('.profile-box')


tooltipProfile.addEventListener('click', openProfile)
stayProfile.addEventListener('mousemove', openProfile)
tooltipProfileClose.addEventListener('mouseout', closeProfile)


function openProfile() {
    document.querySelector('.profile-box').classList.add("active")
    document.querySelector('.profile-picture').classList.add("active")
}

function closeProfile() {
    document.querySelector('.profile-box').classList.remove("active")
    document.querySelector('.profile-picture').classList.remove("active")
}


// Tooltip Plus Actions

const tooltipActionsPlus = document.querySelector('.features-info-actions-plus')
const tooltipActionsPlusStay = document.querySelector('.features-info-actions-plus-box')
const tooltipActionsPlusBoxClose = document.querySelector('.features-info-actions-plus-box')

tooltipActionsPlus.addEventListener('click', openPlusActions)
tooltipActionsPlusStay.addEventListener('mousemove', openPlusActions)
tooltipActionsPlusBoxClose.addEventListener('mouseout', closePlusActions)


function openPlusActions() {
    document.querySelector('.features-info-actions-plus-box').classList.add('active')
}

function closePlusActions() {
    document.querySelector('.features-info-actions-plus-box').classList.remove('active')
}


// Header Hide/Show

const header = document.querySelector("header")
const darkBackground = document.querySelector(".main-background")
window.onscroll = ()=> {
    
    if(document.documentElement.scrollTop > 160){
        header.style.visibility = "hidden"
        header.style.opacity = "0"
        header.style.transition = ".6s"
        darkBackground.style.opacity = "0.4"
        darkBackground.style.transition= ".6s"
        darkBackground.style.filter= "blur(1rem)"
    } else {
        header.style.visibility = "visible"
        header.style.opacity = "1"
        darkBackground.style.opacity = "1"
        darkBackground.style.filter= "blur(0)"
    }
}

