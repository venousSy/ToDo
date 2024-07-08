const addNewTaskButton = document.querySelector('[data-task-input]')
let keysList = []
let tasksList = []

// add the user's input to the local storage
addNewTaskButton.addEventListener('submit', (e) => {
  e.preventDefault()
  let title = document.querySelector('[data-title]').value
  let date = document.querySelector('[data-date]').value
  let description = document.querySelector('[data-description]').value
  setLocaStorage(title, date, description)
  addTask(title, date, description)
  render()
  addNewTaskButton.reset()
})

const render = () => {
  clear()

  tasksList.map((obj) => {
    const tasksDiv = document.querySelector('.tasks')
    const task = document.createElement('div')
    task.classList.add('task')
    task.innerHTML = `
           
            <input type="checkbox" name="checkTask" class="checkTask" />
            <div>
                <p class="dueDate">${obj.date}</p>
                <p class="title">${obj.title}</p>
                <p class="taskDescription">
                 ${obj.description}
                </p>
            </div>
            <i class="fa-regular fa-circle-xmark fa-xl"></i>
            `

    tasksDiv.appendChild(task)
  })
}

const setLocaStorage = (title, date, description) => {
  let objKey = new Date().valueOf()
  keysList.push(objKey)
  let TaskObj = { title, date, description }
  localStorage.setItem(objKey, JSON.stringify(TaskObj))
}

const addTask = (title, date, description) => {
  tasksList = []
  keysList.map((e) => {
    const newTaskObj = JSON.parse(localStorage.getItem(e))
    tasksList.push(newTaskObj)
  })
}
const clear = () => {
  const tasksDiv = document.querySelector('.tasks')
  tasksDiv.innerHTML = ''
}
export default render
