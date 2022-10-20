import React from 'react'

export default function Array({array}) {

  const N = array.length;

  return (
    <div className="arrayContainer">
      {array.map((num, i) => {
        let barHeight = (500/(N/num))
        return <div key={num} id={i} className="arrayElement" style={{height: barHeight}} ></div>;
      })}
    </div>
  )
}
