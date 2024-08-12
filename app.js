const button = document.querySelector('.add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-tasks')

let myTask = []

function newTask(){
    myTask.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    showTask()
}

function showTask(){

    let newLi = ''

    myTask.forEach( (item, posicao) => {

        newLi = newLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="img/check.png" alt="Check" onclick="completeTask(${posicao})" />
            <p>${item.tarefa}</p>
            <img src="img/Trash.png" alt="Trash" onclick="deleteItem(${posicao})" />
        </li>
        
        `

    })


    fullList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(myTask))

}



function completeTask(posicao){
    myTask[posicao].concluida = !myTask[posicao].concluida

    showTask()
}




function deleteItem(posicao){
    myTask.splice(posicao, 1)

    showTask()
}


function reloadTask(){
    const taskLocalStorage = localStorage.getItem('lista')

    if (taskLocalStorage){

        myTask = JSON.parse(taskLocalStorage)
    }

    showTask()
}

reloadTask()
button.addEventListener('click', newTask)