import React,{useState} from 'react'
import{Modal,Form} from 'reactstrap';
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'
import img6 from './images/image6.png'
import img7 from './images/image7.png'
import img8 from './images/image8.png'

  
function Popup(props) {

   const [name,setname] =useState('')
   const [modal,setmodal] = useState(false)
   
   
     const handleCreate=(e)=>{
     e.preventDefault();
      console.log(name);
      setmodal(false)
      
      }
      const handleimg3=()=>{
      console.log(img3);
      }
      const handleimg4=()=>{
        console.log(img4);
        }
      const handleimg5=()=>{
          console.log(img5);
          }   
      const handleimg6=()=>{
          console.log(img6);
          }
      const handleimg7=()=>{
          console.log(img7);
          }    
      const handleimg8=()=>{
          console.log(img8);
          }      
            
    return (
    <div>
      
        <Modal
            className='mdl'
            isOpen={modal}
            toggle={()=> setmodal(!modal)}>
            <h6 className='cnng'>Create New Notes group</h6>
             
            <Form onSubmit={handleCreate} className='frm'>
                <label htmlFor='name' className='name' >Group Name</label>
                <input onChange={e=>setname(e.target.value)}type='text' className='txt' placeholder='Enter your group name....'value={name}></input><br/>
                <label htmlFor='color' className='color'>Choose colour</label>
                <img src={img3}  onClick={handleimg3}className='b1'></img>
                <img src={img4}  onClick={handleimg4} className='b2'></img>
                <img src={img5}  onClick={handleimg5}className='b3'></img>
                <img src={img6}  onClick={handleimg6}className='b4'></img>
                <img src={img7}  onClick={handleimg7}className='b5'></img>
                <img src={img8}  onClick={handleimg8}className='b6'></img> 
                <button className='btn2'onClick={()=>{
                  props.addList(name)
                  setname('')
                }}>Create</button> 
            </Form>
                
        </Modal>
        
        <button onClick={()=>setmodal(true)} className='btn1' >+ Create Notes group</button>
        
         
    </div>
  )

}

export default Popup