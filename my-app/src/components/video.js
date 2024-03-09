import img1 from './lady.jpg';
import img2 from './woman.jpg';

function Video(props) {
  return (
    <div>
      <div style={{ backgroundColor: 'red' }}>video</div>
      <div><img src={img1} alt="Lady" width="400" height="400" /></div>
      <div style={{ backgroundColor: 'red' }}>{props.title}</div>
      <div><img src={img2} alt="Woman" width="400" height="400" /></div>
    </div>
  );
}
export default Video;



