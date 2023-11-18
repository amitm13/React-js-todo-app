import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Item from './Components/Item';

function App() {

  const [todolist, set_todolist] = useState([])
  const [item, set_item] = useState();

  const addItem = () => {
    if(!item || item==''){
      alert('Please enter value in item box!')
      return false;
    }

    let id = getRandomInt(99999);
    let json = {
      id:id,
      title:item,
      status:0
    }
    set_todolist([...todolist, json]);
    set_item('');
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const updateItemStatus = (id, e) => {
    let tempArray = [];
    for (let index = 0; index < todolist.length; index++) {
      if(id == todolist[index].id){
        todolist[index].status = (e.target.checked) ? 1 : 0;
      }
      tempArray.push(todolist[index]);
    }
    set_todolist(tempArray);
  }

  const deleteItem = (id) => {
    let newArray = todolist.filter((item) => {
      return item.id != id;
    })

    set_todolist(newArray);
  }

  return (
    <div className="bg-gray-100 h-screen p-10">
      <div className="bg-white p-2 w-auto rounded shadow-lg font-bold text-center mt-5 text-blue-600">
        To Do React App
      </div>
      <div className='container mt-5'>
        <center>
          <input type='text' className='w-1/3 h-12 rounded-lg shadow-lg p-2' value={item} onChange={(e)=>set_item(e.target.value)} placeholder='Add Item' />
          <button onClick={addItem} className='px-6 py-2 ml-4 rounded-md text-white hover:bg-blue-800 shadow-lg bg-blue-600'>Add</button>

          {/* List Item */}
          <div className='mt-5'>
          {todolist.length>0 && todolist.map((item, index) => {
            return <Item item={item} key={item.id} deleteItem={deleteItem} updateItemStatus={updateItemStatus}/>
          })}
          </div>

        </center>
      </div>
    </div>
  );
}

export default App;
