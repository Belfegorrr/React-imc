import React from "react";
import "./App.css"


function App() {

  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');

  const [mensagem, setMensagem] = React.useState('');

  function calcularIMC (){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if( imc < 18.6) {
      setMensagem("Você está abaixo do peso ideal! Seu IMC é: " + imc.toFixed(2))
    }else if (imc >=18.6 && imc < 24.9) {
      setMensagem("Seu peso está ideal! Seu IMC é: " + imc.toFixed(2))
    }else if (imc >=24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2))
    }else if (imc > 34.9) {
      setMensagem("Cuidado, você está obeso(a)! Seu IMC é:" + imc.toFixed(2))
    }
  }



  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <div className="area-input">
        <input 
        type="text" 
        placeholder="Peso em (Kg) Ex:90"  
        value={peso} 
        onChange={(event) =>{
        setPeso(event.target.value)}}/>

        <input 
        type="text" 
        placeholder="Altura em (cm) Ex: 180" 
        value={altura} onChange={(event) => {
          setAltura(event.target.value)}} />

        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App;