import React, {useState} from 'react'; 
import {SliderComponent} from '.components';
import './app.css'

function App() {
  const [value, setValue] = useState(50)

  const handleChange = (event) =>{
    setValue(event.target.value);
  }
  return ( 
  <AppContainer>
    <h2>{value}</h2>
    <SliderComponent/>
  </AppContainer>
  );
}

export default App;

