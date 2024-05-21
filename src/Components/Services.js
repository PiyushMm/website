import React, { useState } from 'react'
import Card from './Card';


export default function Services() {

    const [list, setList] = useState([
        {
            image: "https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fHww",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }

    ]);



    return (
        <div className='d-flex justify-content-center  m-2 gap-2 ' >
            {list.map((item, index) => (
                <div key={index}>
                    <Card image={item.image} title={item.title} text={item.text} />
                </div>
            ))}
        </div>
    )
}