import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
    Hello world!
      </h1>
      <Card name="abc"/>
      <Card name="xyz"/>
      <Card />
      </>
  );
}

export default App;
