import analatic from './assets/analatic.svg'
import dashboard from './assets/dashboard.svg'
import report from './assets/report.svg'
import search from './assets/search.svg'
import setting from './assets/setting.svg'
import todo from './assets/todo.svg'
import time from './assets/Time-schedule.svg'
const bars = () => {
  const navbar = document.querySelector('.navBar')
  const sidebar = document.querySelector('.sideBar')

  navbar.innerHTML = `<div class="dashboard">
            <i class="fa-solid fa-bars fa-xl"></i>
            <span>Dashboard</span>
          </div>
          <div class="right">
            <input type="text" class="searcTasks" name="search" placeholder="Search tasks" />
            <i class="fa-solid fa-bell fa-xl"></i>
          </div>`

  sidebar.innerHTML = ` <p class="logo">TASK<span style="color: black">Y.</span></p>
        <div class="sidbar-buttons">
          <div class="sidbar-button">
            <div class="handler"></div>
            <img src="${dashboard}" alt="dashboard" /><button
              class="sideBar-button"
            >
              Dashboard
            </button>
          </div>
          <div class="sidbar-button">
            <div class="handler"></div>
            <img src="${analatic}" alt="analatic" /><button
              class="sideBar-button"
            >
              Analytic
            </button>
          </div>
          <div class="sidbar-button">
            <div class="handler"></div>
            <img src="${time}" alt="Time-schedule" /><button
              class="sideBar-button"
            >
              Timesheets
            </button>
          </div>
          <div class="sidbar-button">
            <div class="handler"></div>
            <img src="${todo}" alt="todo" /><button class="sideBar-button">
              Todo
            </button>
          </div>
          <div class="sidbar-button">
            <div class="handler"></div>
            <img src="${report}" alt="report" /><button class="sideBar-button">
              Report
            </button>
          </div>
          <div class="sidbar-button">
            <div class="handler"></div>
            <img src="${setting}" alt="setting" /><button
              class="sideBar-button"
            >
              Settings
            </button>
          </div>
        </div>`
}

export default bars
