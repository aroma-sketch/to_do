import Card from '@material-ui/core/Card';
import React ,{useState} from 'react'
import { Button, TextField} from '@material-ui/core';
import "./Todo.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';
import "../Components/Todo.scss"

const Todo = () => {

    const [input, setInput] = useState('');
     const [items, setItems] = useState([]);

     const addItem = () =>{
         if (input ==" " ){ 

         }else{
               setItems([...items, input]);
                setInput(' ')
               }
    }

    const deleteItem = (id)=> {
        console.log(id);
        const updateditems =items.filter((elem,ind) => {
            return (ind !== id) ;
        });
        setItems(updateditems);
    }

    const [line,setLine] = useState(false);

    const cutIt=()=>{
        setLine(true);
    }

    return (
        <div className="main_div" >
            <Card >
            <figcaption>add your list here</figcaption>
            <br></br>
            
            <TextField id="standard-basic" label="Add TO_DO"
             value={input}
            onChange={(e) => setInput(e.target.value)} />
           <Button>
                <AddIcon  onClick= { addItem } />
                </Button>
           <div className="showItems">
               <div className="eachItem">
                   <ul>
                       { 
                       items.map((elem,ind) => {
                           return(
                               <div className="each" key={ind}>
                                   
                           <h3 style={{textDecoration:line ? 'line-through': 'none'}}>
                               <span onClick={cutIt}><Button><button><DoneIcon /></button></Button> </span>
                              {elem }
                           <Button>
                               <DeleteIcon onClick={() => deleteItem(ind)}/> 
                               </Button>
                                </h3>
                           </div>
                           )
                       })
                    
                        }
                     
                   </ul>
                   
               </div>
           </div>
           </Card>
        </div>
    )
}

export default Todo;
