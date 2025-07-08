import React from 'react'

function Card({name="nouser"}) {
  return (
    <div>
        <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos of {name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec euismod eros. Integer in nulla vel nisi sagittis dapibus. Fusce auctor, eros nec interdum tincidunt, libero mi interdum erat, a bibendum nunc eros sit amet risus. Nulla facilisi. Sed quis bibendum lacus, id condimentum turpis. Cras fermentum auctor velit, vel auctor eros fermentum eget. Ut ut tincidunt risus.</p>
    </div>
  )
}

export default Card