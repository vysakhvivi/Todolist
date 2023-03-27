import React,{Component} from 'react'
import TodoItem from './Todoitem'



export class TodoList extends Component {
  render(){

    const {items,clearList,handleDelete,handleEdit}=this.props
  return (

    
    <div>
        
       <ul className='list-group my-5'></ul>
       <h3 className='text-capitalize text-center'>Todo List</h3>
        {
          items.map(item=>{
            return(
              <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>
            )
          })
        }
        
        


       <button type='button' className='btn btn-danger btn-block text-capitalize mt-5' onClick={clearList}>Clear List</button>
    </div>
  )
}
}

export default TodoList