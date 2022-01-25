import React, { useState } from 'react'
import Output from '../Output/Output'

const Notes = () => {

const [items,setInput]=useState([])
const [title,setTitle]=useState('')
const [note,setNote]=useState('')

const add = (e) => {
    e.preventDefault()
    if(title!==''){
        if(note!==''){
            if(!items.find((item)=>item.title===title)){
                setInput([...items,{
                    id:items.length,
                    title:title,
                    note:note
                }])
            }
            else{
                alert('Provide Data to proceed')
            }
        }
        else{
            alert('Add Note')
        }
    }
    else{
        alert('Add Title')
    }
    setTitle('')
    setNote('')
}

function del(index){
    let take=[...items]
    take.splice(index,1)
    setInput(take)
}

    return(
        <div>
            <div className='card'>
                <form>
                    <input type={'text'} placeholder='Title...' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} autoComplete='off'></input><br/>
                    <input type={'text'} placeholder='Take a Note...' id='note' value={note} onChange={(e)=>setNote(e.target.value)} autoComplete='off'></input><br/>
                    <button className='add' onClick={add}>Add</button>
                </form>
            </div>
            <br/><br/>
            {items.map((item,i)=><div key={item.id}><Output item={item} index={i} removeItem={del}></Output></div>)}
        </div>
    )
}

export default Notes