import React, { useEffect, useState } from 'react'
import './Notes.css'
import img1 from './images/image1.png'
import img2 from './images/Vector (11).png'
import Popup from './Popup'
import TodoList from './TodoList'
import 'bootstrap'
//getting data from local storage//
  const getDatafromLS=()=>{
  const data =localStorage.getItem('group');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function Notes() {
     const [group,setgroup]=useState(getDatafromLS())
     let addList = (name)=>{
      setgroup([...group,name]);
     }
    //storing data in local storage//
     useEffect(()=>{
      localStorage.setItem('group',JSON.stringify(group));
     },[group])
  return (
    <div>
        <div className='group'>
           
            <p className='pocket'><b>Pocket Notes</b></p>
            <div className='grps'>
            <Popup addList = {addList}/>
             {group.map((listitem,i)=>{
              return(
                <TodoList key={i} item={listitem}/>
              )
             })}
            </div>
            
            <div className='rectangle1'>
                <img src={img1} className='image1'/>
                <p className='pocket1'><b>Pocket Notes</b></p>
                <p className='content1'>Send and receive messages without keeping your phone online.<br/>
                 Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <img src={img2} className='image2'/>
                <p className='content2'>end-to-end encrypted</p>
            </div>
        </div>
    </div>
  )
}

export default Notes