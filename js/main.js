const PicsArray = Array.from(document.querySelectorAll('.slider-container img'))

const picarrayLength = PicsArray.length

var currentSlide = 1
const NextButtonid = document.getElementById('next')
const PrevButtonid = document.getElementById('prev')
const SliderElement = document.getElementById('slider-number')

NextButtonid.onclick = nextButton
PrevButtonid.onclick = prevButton


const CreateULElement =document.createElement('ul')

CreateULElement.setAttribute('id' ,'pagination-ul')


for (let i = 1; i <=picarrayLength; i++){
    const CreateLiElement = document.createElement('li')
    CreateLiElement.setAttribute('data-index',i)
    CreateLiElement.appendChild(document.createTextNode(i))
    CreateULElement.appendChild(CreateLiElement)
}


document.getElementById('indicators').appendChild(CreateULElement)
var ulElement = document.getElementById('pagination-ul')
const ulElementsBullet = Array.from(document.querySelectorAll('#pagination-ul li'))
console.log(ulElementsBullet)
for (var i=0; i<ulElementsBullet.length; i++) {
    ulElementsBullet[i].onclick = function(){
        currentSlide =parseInt(this.getAttribute('data-index'))
        theChecker()
    }
}
theChecker()
function nextButton(){

    if(NextButtonid.classList.contains('disabled')){
return
    }else{
        currentSlide++;
        theChecker()
    }
 
}

function prevButton(){
    if(PrevButtonid.classList.contains('disabled')){
        return
            }else{
                currentSlide--;
                theChecker()
            }
}



 function theChecker(){
    removeAllactievs()
    SliderElement.textContent = `Slider Number ${currentSlide} of ${picarrayLength}`
    PicsArray[currentSlide-1].classList.add('active')
    ulElement.children[currentSlide-1].classList.add('active')
    if(currentSlide===1){
        PrevButtonid.classList.add('disabled')
    }else{
        PrevButtonid.classList.remove('disabled')
    }
    if(currentSlide === picarrayLength){
        NextButtonid.classList.add('disabled')
    }else{
        NextButtonid.classList.remove('disabled')
    }
    
}

function removeAllactievs(){
    PicsArray.forEach((img)=>{
        img.classList.remove('active')
    })
    ulElementsBullet.forEach((bull)=>{
        bull.classList.remove('active')
    })
}

