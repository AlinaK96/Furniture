//скрол ссылок
document.getElementById('main-info').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'})
}

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++){
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}

//кнопки "заказать"
// let buttons = document.getElementsByClassName('product-button')
// for (let i = 0; i < buttons.length; i++){
//     buttons[i].onclick = function () {
//         document.getElementById("order").scrollIntoView({behavior: 'smooth'})
//     }
// }

// //валидация инпутов
// const buttonOrder = document.querySelector('#order-action')
// const burger = document.querySelector('#burger')
// const person = document.querySelector('#name')
// const phone = document.querySelector('#phone')

// buttonOrder.addEventListener('click', function () {

//     let hasError = false
//     const info = [burger, person, phone]

//     info.forEach(item => {
//         if (!item.value){
//             item.parentElement.style.background = 'red'
//             hasError = true
            
//         } else {
//             item.parentElement.style.background = ''
//         }
//     })

//     if (!hasError){
//         info.forEach(item => {
//             item.value = ''
//         })
//         alert('Спасибо за заказ!')
//     }
// })