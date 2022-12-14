import Title from './components/Title';
import Card from './components/Card';
import data from './data'

export default function App() {
  const cardElement = data.map(item => {
    return (
      <div className='card-wrapper'>
      <Card
      key={item.id} 
      item={item}
      />
      <hr />
      </div>
    )
  })
  return (
    <div className="App">
      <Title />
      <div className='card-container'>
      {cardElement}
      </div>
    </div>
  );
};