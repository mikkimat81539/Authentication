const hideImg = document.getElementById('hide')
const passwordInput = document.getElementById('password')

hide.addEventListener("click", changing)

function changing() {
    if(hideImg.src.includes('images/hide.png')) {
        hideImg.src = "images/show.png"
        passwordInput.type = "text"
    }

    else {
        hideImg.src = "images/hide.png"
        passwordInput.type = "password"
    }
}