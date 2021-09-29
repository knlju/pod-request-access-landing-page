(function () {
    'use strict'
    const btn = document.querySelector(".button")
    btn.addEventListener("click", handleClick)

    function handleClick(e) {
        const emailInputValue = document.querySelector(".input-email").value
        const divErr = document.querySelector(".input-error")
        if (emailInputValue.match(/\S+@\S+.\S+/)) {
            divErr.classList.remove('show-error')
        } else divErr.classList.add('show-error')
    }
})()
