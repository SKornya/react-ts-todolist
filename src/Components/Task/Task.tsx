import { FunctionComponent } from "react";

interface TaskProps {
  
}
 
const Task: FunctionComponent<TaskProps> = ({ checked, text }) => {
  return (
    <input type="radio" checked={checked} value={text}/>
  );
}
 
export default Task;