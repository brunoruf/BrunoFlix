// Tooltip Profile

const tooltipProfile = document.querySelector('.profile-picture')
tooltipProfile.addEventListener('click', openProfile)


function openProfile() {
    document.querySelector('.profile-box').classList.add("active")
    document.querySelector('.profile-picture').classList.add("active")
}

const stayProfile = document.querySelector('.profile-box')
stayProfile.addEventListener('mousemove', openProfile)

const tooltipProfileClose = document.querySelector('.profile-box')
tooltipProfileClose.addEventListener('mouseout', closeProfile)

function closeProfile() {
    document.querySelector('.profile-box').classList.remove("active")
    document.querySelector('.profile-picture').classList.remove("active")
}


// Tooltip Plus Actions

const tooltipActionsPlus = document.querySelector('.features-info-actions-plus')
tooltipActionsPlus.addEventListener('click', openPlusActions)

const staytooltipActionsPlus = document.querySelector('.features-info-actions-plus-box')
staytooltipActionsPlus.addEventListener('mousemove', openPlusActions)

function openPlusActions() {
    document.querySelector('.features-info-actions-plus-box').classList.add('active')
}

const tooltipActionsPlusBoxClose = document.querySelector('.features-info-actions-plus-box')
tooltipActionsPlusBoxClose.addEventListener('mouseout', closePlusActions)
function closePlusActions() {
    document.querySelector('.features-info-actions-plus-box').classList.remove('active')
}


// Header Hide/Show

const header = document.querySelector("header")
window.onscroll = ()=> {
    if(document.documentElement.scrollTop > 50){
        header.style.visibility = "hidden"
        header.style.opacity = "0"
        header.style.transition = ".6s"
    } else{
        header.style.visibility = "visible"
        header.style.opacity = "1"
    }
}