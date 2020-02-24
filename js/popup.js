var popupShade = document.getElementById('popup-shade');
var popupLogin = document.getElementById('popup-login');

// 后期考虑遮罩层多层显示


function showLogin() {
    popupShade.style.display = "block";
    setTimeout(() => {
        popupLogin.style.display = "block";
    }, 300);
}

function hideLogin() {
    popupShade.style.display = "none";
    popupLogin.style.display = 'none';
}