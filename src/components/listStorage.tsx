import React from 'react';
import {getItems} from '../storage/localStorage';
import TodoItem from './todoItem';


class ListStorage extends React.Component<any> {
  private todos:any = [];
  constructor(props: any){
    super(props);
    this.todos = getItems("Todo");
    console.log(this.todos);
    	
  }
   
  state = {
    // optional second annotation for better type inference
    count: 0,
  };
  
  render() {
    return (
      <div>
      {this.todos.map((value:any, index:any) => {             
         return <TodoItem  todo={value.text} completed={value.completed}/>
        })
      } 
      </div>
    );
  }
}
export default ListStorage;
