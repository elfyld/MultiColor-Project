import Task from './Task'

const Tasks = ({tasks,onDelete,onUpdate,checkTask,setIsEditing,setIndexOfEdit,setValue}) => {
   
return(
    <>
    {tasks.map((job,index)=> (
    <Task key={job.id} task_id={job.id} task={job.text} task_day={job.day} onDelete={onDelete} onUpdate={onUpdate} checkTask={checkTask} taskCompleteness={job.completeness} index={index} setIsEditing={setIsEditing} setIndexOfEdit={setIndexOfEdit} setValue={setValue}/>
      ))}
    
    </>


)


}
export default Tasks
