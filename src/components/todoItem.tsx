import React from 'react';

interface Props {
  todo: string;
  completed: boolean;
}
class TodoItem extends React.Component<any> {
  private todos:any = [];
  constructor(props: any){
    super(props);
    console.log("info");
  }

  state = {
    // optional second annotation for better type inference
  };

  render() {
    return (
     <li>
       <label style={{ textDecoration: this.props.completed ? 'line-through' : undefined }}>
         <input type="checkbox" checked={this.props.completed} />
         {this.props.todo}
       </label>
     </li> 
    );
  }
}

export default TodoItem;
