import {useState} from 'react'

const AddTasks = ({onAdd}) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add task')
        }
        onAdd({text,time,reminder})
        setText('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='text' placeholder='Add Time' value={time} onChange={(e) => setTime(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Remainder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTasks
