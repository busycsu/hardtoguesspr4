import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({title, day, important})
        setTitle('')
        setDay('')
        setImportant(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='from-control'>
                <label>Metting</label>
                <input type='text' placeholder='Add Task'
                value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text'
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control from-control-check'>
                <label>Important</label>
                <input type='checkbox' checkbed={important}
                value={important} onChange={(e) => setImportant(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save' className="btn btn-block"/>
        </form>
    )
}
export default AddTask