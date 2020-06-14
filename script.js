let name = document.querySelector('input[name=name]')
let model = document.querySelector('input[name=model]')
const preco = [1299, 1719, 2599]
const quantity = document.querySelector('input[name=quantity]')
const title = ['3Green Triumph', 'EasyPC Standard', 'Gamer Easy Light II']

const div_hidden = document.querySelector('div#slider-right-hidden')

function showDiv() {
  if (model.value == '#basic') {
    title.value = title[0]
    preco.value = preco[0]
  } else if (model.value == '#advanced') {
    title.value = title[1]
    preco.value = preco[1]
  } else if (model.value == '#gamer') {
    title.value = title[2]
    preco.value = preco[2]
  }

  let comp = 'computadores'
  
  const total = preco.value * quantity.value

  if (quantity.value <= 1) {
    comp = comp.substr(0, 10)
  }

  if (name.value == '') {
    name.value = name.placeholder
  }

  const doneText = `
  <p class="just-js"><strong class="str-marg">Parabéns</strong>, ${name.value}! Você acaba de comprar ${quantity.value} ${comp} da marca <strong>${title.value}</strong> por apenas <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong>.</p>
`

  return div_hidden.innerHTML = doneText
}