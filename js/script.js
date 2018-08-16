const css = document.querySelector('.gradient-output')
const blendButton = document.querySelector('.btn-primary')
const colorOne = document.querySelector('#color-1')
const colorTwo = document.querySelector('#color-2')
const gradient1 = document.querySelector('.gradient-1')
const gradient2 = document.querySelector('.gradient-2')
const body = document.querySelector('.gradient')
const slider = document.getElementById('myRange')
const output = document.getElementById('degMeasure')
output.textContent = slider.value

slider.oninput = function () {
  output.textContent = this.value
}
const setBackground = () => {
  gradient1.style.background = 'none'
  gradient2.style.background = 'none'
  body.style.background = `linear-gradient(${slider.value}deg, ${colorOne.value}, ${colorTwo.value})`
  css.textContent = `background: ${body.style.background};`
}

blendButton.addEventListener('click', setBackground)

// 1. Write code so that the colour inputs match the background generated on the first page load.

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
