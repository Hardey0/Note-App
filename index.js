let arr = JSON.parse(localStorage.getItem('arrs')) || []
const title  =  document.getElementById('title')
const description = document.getElementById('description')
let currentEdit = null;


function add(){
    const details ={
        title: title.value,
        description: description.value
    }
    // console.log(details)
    if(title.value === ''|| description.value === '') {
    return alert("Input your Input")
    }
    arr.push(details)
    localStorage.setItem('arrs', JSON.stringify(arr))
    // console.log(arr)
    display()
     title.value = ''
    description.value = ''
    }


function display(data = arr){
    let show = document.getElementById('show')
    show.innerHTML = ''
    data.forEach((el, i) => {
        show.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${el.title}</td>
        <td>${el.description}</td>
        <td><button onclick= "edit(${i})">Edit</button> <button onclick= "del(${i})">Del</button></td>
        
        </tr>
        `
        
    });
    
    
}
function edit(index){
    title. value= arr[index].title
    description.value = arr[index].description
    currentEdit  = index
console.log(currentEdit)
document.getElementById('btn').innerText = 'update'

}


 function addUpdate(){
   if(currentEdit !== null){
    arr[currentEdit]={
        title:title.value,
        description: description.value

    }
    currentEdit = null

    document.getElementById('btn').innerText = 'Add'
   }else{
    add()
   }
   localStorage.setItem('arrs', JSON.stringify(arr));
   display();

 }

function del(index){
arr.splice(index, 1)
display()
localStorage.setItem('arrs', JSON.stringify(arr));
    
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
   if(document.body.classList.contains('dark-mode')){
document.getElementById('dark-mode-btn').innerHTML= 'Light Mode'
   }else{
    document.getElementById('dark-mode-btn').innerHTML= 'Dark Mode'
   }


}

  


const searchInp = document.getElementById('search')
searchInp.addEventListener('input', function(){
const newSearch = searchInp.value.toLowerCase()
    const newArr = arr.filter(el =>{
        const searchbtn = `${el.title} ${el.description}`.toLowerCase()
        return searchbtn.includes(newSearch)

        
    })
    display(newArr)
})