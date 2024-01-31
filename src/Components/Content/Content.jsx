import React from 'react'
import Left from './Left'
import Right from './Right'

function Content() {
    return (
        <>
        <div style={{height: '90%', fontFamily: "Poppins"}} className='ml-15 mr-15 flex items-center justify-between'>
            <Left />
            <Right />
</div>
        </>
    )
}

export default Content
