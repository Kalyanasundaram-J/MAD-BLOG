document.addEventListener("DOMContentLoaded",()=>{
    const mainAlertBox = document.createElement('div');
    mainAlertBox.setAttribute('id',"mainAlertDiv");
    mainAlertBox.style.top = '10%';
    mainAlertBox.style.right = '2%';
    mainAlertBox.classList.add('position-absolute');
    document.body.appendChild(mainAlertBox);
})
/**
 * This function show the alert box for 3s default.
 * @param {string} message - Message need to display in the alert box.
 * @param {string} type - type of alert box (error,warning,success,info). Default primary
 * @param {number} duration - default 3s(3000). (100 - ...)
 * @return {null} Show alert box.
 */
function alertBox(message, type = null, duration = 3000) {
    const alertDiv = document.createElement('div');
    const divId = 'div-'+generateRandomString(7);
    alertDiv.setAttribute('id',divId);
    alertDiv.textContent = message;
    alertDiv.classList.add('alert');
    if (type === "error") {
        alertDiv.classList.add("alert-danger");
    } else if (type === "warning") {
        alertDiv.classList.add("alert-warning");
    } else if (type === "success") {
        alertDiv.classList.add("alert-success");
    } else if (type === "info") {
        alertDiv.classList.add("alert-info");
    } else {
        alertDiv.classList.add("alert-primary");
    }
    
    document.getElementById('mainAlertDiv').insertBefore(alertDiv,document.getElementById('mainAlertDiv').children[0]);
    setTimeout(() => {
        document.getElementById('mainAlertDiv') .removeChild(alertDiv);
    }, duration);
}

/**
 * This function will give a random string with given length
 * 
 * @param {number} length - Specify the length of the generated string
 * @returns {string} Return the generated random string
 */
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
}