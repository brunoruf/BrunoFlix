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
const FeaturedInfo = document.querySelector(".featured-info")
window.onscroll = ()=> {
    
    if(document.documentElement.scrollTop > 300){
        header.style.visibility = "hidden"
        header.style.opacity = "0"
        header.style.transition = ".6s"
        darkBackground.style.opacity = "0.4"
        darkBackground.style.transition= ".6s"
        darkBackground.style.filter= "blur(1rem)"
        FeaturedInfo.style.opacity= "0.3"
    } else {
        header.style.visibility = "visible"
        header.style.opacity = "1"
        darkBackground.style.opacity = "1"
        darkBackground.style.filter= "blur(0)"
        FeaturedInfo.style.opacity= "1"
    }
}


// Carrossel My List

let moviesListPosition = 0
const swipeList = document.querySelector(".titles-wrap-list")
const swipeRight = document.querySelector(".titles-list-movies-swiperight")
const swipeLeft = document.querySelector(".titles-list-movies-swipeleft")
swipeRight.addEventListener("click", rollRight)
swipeLeft.addEventListener("click", rollLeft)

function rollRight() {
    if(moviesListPosition == 100) {
        return;
    }
    moviesListPosition += 25
    swipeList.style.right = `${moviesListPosition}%`
    document.querySelector('.titles-list-movies-swipeleft').classList.add('active')

}

function rollLeft() {
    if (moviesListPosition == 0)  {
        return;
    } 
    moviesListPosition -= 25
    swipeList.style.right = `${moviesListPosition}%`
    if (moviesListPosition == 0)  {
        document.querySelector('.titles-list-movies-swipeleft').classList.remove('active')
        
    } 
}
    