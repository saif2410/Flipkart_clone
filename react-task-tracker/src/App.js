import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import { useEffect } from 'react'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const name = 'Hisoku'
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks]= useState([])

  useEffect(()=>{
    const getTasks = async ()=> {
      const taskf = await fetchTask()
      setTasks(taskf)
    }
    getTasks()
  }, [])

  const fetchTask = async() =>{
    const res = await fetch('http://localhost:5000/alltasks')
    const data = await res.json()
    return data
    
  }
  // Add Task
  const addTask = (task) =>{
    const id= Math.floor(Math.random()*1000+1)
    const newTask ={id, ...task}
    setTasks([ ...tasks, newTask])
    console.log(task)
  }
  
  // Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map( (task) => 
        task.id===id ? { ...task, reminder: !task.reminder }
        :task
      )
    )
  }
  
  return (
    <Router>
    <div className="container">
      <Header title={1} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask} />}

      <Route path='/'exact render={(props) => (
          <>
            <h2>hello {name}</h2>
            {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Nothing to show'} 
          </>)
        }
      />
      <Route path='/about' component={About} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
