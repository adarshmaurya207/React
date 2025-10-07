import {useState} from 'react'
function App() {
  const [color, setColor] = useState('olive')
  const colors=['red','green','black','yellow','blue','violet'];

  return (
    <>
     {/* <div style={ {backgroundColor: color,height:'500px'}}>
        
        <button  onClick={() => { setColor(arr[0]) }}>red</button>
        <button onClick={() => { setColor(arr[1]) }}>green</button>
        <button onClick={() => { setColor(arr[2]) }}>black</button>
        <button onClick={() => { setColor(arr[3]) }}>yellow</button>
        <button onClick={() => { setColor(arr[4]) }}>blue</button>
        <button onClick={() => { setColor(arr[5]) }}>voilet</button>
    </div> */}
    <div style={{ backgroundColor: color, height: '500px', padding: '20px' }}>
        {colors.map((colorName) => (
          <button 
            id={colorName}

            onClick={() => setColor(colorName)}
            style={{ marginRight: '15px', textTransform: 'capitalize', borderRadius:'20px', fontSize:'20px' }}
          >
            {colorName}
          </button>
        ))}

      </div>
    </>
  )
}

export default App
