import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';


const App = () => {
  const [tasks,setTask]=useState(
    [
        {
        id: 1,
        text: 'someting 1',
        day: '22 march',
    
    
    },
    
    {
        id: 2,
        text: 'someting 2',
        day: '28 march',
    
    
    },
    ]
   )
    


  return (
    <div className='container'> 
    <Header/>
    <Tasks tasks={tasks} />
    

    </div>

   
  );
}

export default App;