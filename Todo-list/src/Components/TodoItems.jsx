import './CSS/TodoItems.css'
import PropTypes from 'prop-types';
import not_tick from './Assets/not_tick.png';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';


export const TodoItems = ({ no, display, text , setTodos}) => {

    const remove = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo)=> todo.no!==no);
        setTodos(data);
    }

        const toggle =(no)=>{
            let data = JSON.parse(localStorage.getItem("todos"));
            for(var i=0;i<data.length;i++)
            {
                if (data[i].no===no) {
                    if (data[i].display==="") {
                        data[i].display="line-through";
                    }
                    else{
                        data[i].display="";
                    }
                    break;
                }
            }
            setTodos(data);
        }
    
   


    return (
        <div className="todoitems">
            <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}} >
                {display === "" ? <img src={not_tick} alt="not tick" /> : <img src={tick} alt="tick" />}

                <div className="todoitems-text"> {text}</div>

            </div>
            <img onClick={()=>{remove(no)}} className='todoitems-cross-icon' src={cross} alt="cross" />
        </div>
    );
};

TodoItems.propTypes = {
    no: PropTypes.number.isRequired,
    display: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    setTodos: PropTypes.string.isRequired,
};

export default TodoItems;
