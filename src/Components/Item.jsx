import React from 'react'

export default function Item({item, updateItemStatus, deleteItem}) {
  return (
    <div className="bg-white p-2 w-1/3 mt-5 shadow-lg text-left rounded-lg px-5 py-2">
    {item.status==1 ? <input type="checkbox" onChange={(e) => updateItemStatus(item.id, e)} className='mr-4' checked/> : <input type="checkbox" onChange={(e) => updateItemStatus(item.id, e)} className='mr-4' />}
    {item.status==1 ? <span className='line-through'>{item.title}</span> : <span >{item.title}</span> }
    <button className='float-right text-white bg-red-500 px-5 py-0 rounded-md hover:bg-red-700' onClick={()=>deleteItem(item.id)}>Delete</button>
    </div>
  )
}
