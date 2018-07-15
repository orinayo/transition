let css = document.querySelector('h3')
let colorOne = document.querySelector('.color1')
let colorTwo = document.querySelector('.color2')
let body = document.querySelector('#gradient')

const setBackground = () => {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`
  css.textContent = `${body.style.background};`
}

colorOne.addEventListener('input', setBackground)

colorTwo.addEventListener('input', setBackground)

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
