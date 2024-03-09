import './App.css';
import { default as Video, default as Video2 } from './components/video';

function App() {
  return (
    <div>
      <div>hello</div>
      <Video></Video>
      <Video title="i have used props here"></Video>
      <Video2 bgcolor="green" title="lady woman"></Video2> {/* Use Video2 component */}
    </div>
  );
}

export default App;
