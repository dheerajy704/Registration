import React from 'react'
import teamone from "./assets/Image/teamone.jpg"

const Reviews = () => {
  return (
    <div>
         <section className="client-review">
        <div className="reviews">
            <h3>Client reviews</h3>
            <img src = {teamone} alt = ""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi! Provident blanditiis, culpa ab dicta quas aperiam necessitatibus, dolorum enim, quos minus sunt nam voluptatum voluptates nesciunt asperiores consectetur. Fuga nesciunt fugiat, ut assumenda amet rerum a maxime, architecto cumque recusandae magni labore quia laborum autem enim, rem consequatur hic.</p>
            <h2>Mark Juckerberg</h2>
            <p>CEO of Apple</p>
        </div>
    </section>
    </div>
  )
}

export default Reviews