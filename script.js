const liste = document.querySelector('ul')
const btn = document.querySelector('button')

btn.style.float = 'right'
btn.style.margin = '2rem'
btn.style.padding = '1rem'
btn.style.backgroundColor = 'cornflowerblue'
btn.style.color = 'white'
btn.style.borderRadius = '10px'
btn.style.margin = '2rem'

btn.onclick = function(){
    liste.classList.toggle('myStyle')
}

let items = document.querySelectorAll('.items')
let newBtn = document.querySelector('.newbtn')
let para = document.querySelector('p')

newBtn.onclick = function(){

    if( para.textContent == '' ){
        para.textContent = 'Text toggle in my Paragraph just created!'
        para.style.backgroundColor = 'goldenrod'
        para.style.color = 'darkgreen'
        newBtn.innerHTML = 'not cool!'
    } else {
        para.textContent = ''
        newBtn.innerHTML = 'Schöne Farben ?'
    }
}

for( let i = 0; i < items.length ; i++ ){
    console.log(items[i].textContent);
    items[i].style.border = '2px solid lightgray'
    items[i].style.listStyle = 'none'
    items[i].style.padding = '1rem 3rem'
    items[i].style.margin = '0 2rem'

    items[i].onclick = function(){
        para.textContent = `You selected ${items[i].textContent}`
        para.style.backgroundColor = 'lightgreen'
        para.style.color = 'darkgreen'
        para.style.fontSize = '1.5rem'
        para.style.padding = '1rem 3rem'
        para.style.margin = '6rem 2rem'
    }

    if( para.textContent !== ''){
        para.style.display = 'none'
    }else{
        para.style.display = 'block'
    }
}