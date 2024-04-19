import ImageSlider from './components/ImgSlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'} />
    </div>
  );
}

export default App;
