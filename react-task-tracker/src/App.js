import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Images from './components/Images'
import AddTasks from './components/AddTasks'
import { useEffect } from 'react'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const name = 'Hisoku'
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks]= useState([])
  const [images,setImage] = useState([])

  useEffect(()=>{
    const getTasks = async ()=> {
      const taskf = await fetchTask()
      const imagef = await clickedItems()
      setImage(imagef)
      setTasks(taskf)
    }
    getTasks()
  }, [])

  // Get all images from database
  const fetchImage = async() =>{
    const res = await fetch('http://localhost:5000/allimages')
    const data = await res.json()
    return data
    
  }

  // Get all tasks from database
  const fetchTask = async() =>{ 
    const res = await fetch('http://localhost:5000/alltasks')
    const data = await res.json()
    return data
    
  }

  // Get searched images
  const searchImages = async() =>{
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ str : 'sa' })
    };
    const res = await fetch('http://localhost:5000/search', requestOptions)
    const data = await res.json()
    return data
  }
  
  // Get clicked component items
  const clickedItems = async() =>{
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ str : 'electronics' })
    };
    const res = await fetch('http://localhost:5000/category', requestOptions)
    const data = await res.json()
    return data
  }


  // Add Task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/addtask',
    {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json();
    setTasks([...tasks,data])
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
    <>
      <Header title={1} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask} />}

      <Route path='/'exact render={(props) => (
          <>
            <h2>hello {name}</h2>
            {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Nothing to show'}
            {images.length>0 ? <Images images={images} /> : 'No Images'} 
          </>)
        }
      />
      <Route path='/about' component={About} />
      <Footer/>
    </>
    </Router>
  );
}

export default App;
