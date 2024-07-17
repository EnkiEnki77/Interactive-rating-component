// Select the body element
// body = document.body
// // To create an element use document.createElement
// div = document.createElement('div')

// // add text to an element
// div.innerText = "Helloo World"

// // Add an element to the body with append
// // One thing different about append over appendChild is you can append strings
// // With appendChild you can only append DOM nodes (elements)
// // Another difference is with append you can append multiple things, with appendChild you cant
// // body.append("Hello world")

// // Add the created div to the page using append
// body.append(div)

// // To add html to the document and delete any html that was there previously
// div.innerHTML = "<h2>I'm the biggest faggot in the world</h2>"

// // Remove an element from the DOM
// h2 = document.querySelector('h2')
// h2.remove()

// // You still have access to the element so you can add it back in 
// body.append(h2)

// // You can add attributes to an element
// h2.setAttribute('id', 'boom')

// // An elements attributes show up as properties of the elements object
// h2.id = 'not-boom'

// // Or you can use the getAttribute method
// console.log(h2.getAttribute('id'))

// // You can also remove an attribute
// h2.removeAttribute('id')


// // When it comes to adding or removing classes use classlist
// h2.classlist.add('hi1')

// h2.classlist.remove('hi1')

// // Or you can use toggle that adds a class if it doesnt exist or removes it if it does. You can also pass it a boolean
// // to hardcode whether it removes or adds
// h2.classlist.toggle('hi1', true)

// // Lastly, you can directly access the styles of your elements
// h2.style.color = 'blue'

function print(input){
    console.log(input)
}

function handleClick(e){
    buttons = Array.from(formInputs.children)
  
    buttons.forEach(el => +el.value <= +e.target.value ? el.style.backgroundColor = 'white' : el.style.backgroundColor = 'hwb(217 58% 33% / 0.11)' )
    choice = e.target.value
}

function handleSubmit(e){
    e.preventDefault()
    const thankyouImg = document.createElement('img')
    thankyouImg.src = "./interactive-rating-component-main/interactive-rating-component-main/images/illustration-thank-you.svg"
    thankyouImg.alt = "An illustration"

    const div = document.createElement('div')
    div.className = "selection-container"

    const selectionMsg = document.createElement('p')
    selectionMsg.className = "selection-msg"
    selectionMsg.innerText = `You selected ${choice} out of 5`
    div.append(selectionMsg)

    const h1 = document.createElement('h1')
    h1.innerText = 'Thank you!'

    const p = document.createElement('p')
    p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

    const container = document.querySelector('.container')
    Array.from(container.children).forEach(el => el.remove())

    container.append(thankyouImg)
    container.append(div)
    container.append(h1)
    container.append(p)
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
    container.style.alignItems = 'center'
    
    p.style.textAlign = 'center'
}

let choice = undefined
const formInputs = document.querySelector('.form-inputs')
const form = document.querySelector('form')
// print(formInputs)
formInputs.addEventListener('click', handleClick)
form.addEventListener('submit', handleSubmit)