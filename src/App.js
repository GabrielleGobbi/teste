import './App.css';
import InfoCard from './components/infoCard/infoCard'; 
import Contador from './components/useState/Contador'
function App() {
  return (
    <div className="App">
      <p>exercicio 1</p>
            <InfoCard title="Título" description="Aqui vai a descrição"  /> 

      <p>Exercicio 2</p>
            <Contador/>
     
    </div>
  );
}

export default App;