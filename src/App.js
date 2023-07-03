import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jeff from './img/jeff2.png'
import ansel from './img/ansel2.png'
import team from './img/team.png'

function App() {
  return (
    <div>
      <div className='container'>
        <div className='d-flex flex-sm-column flex-lg-row'>
          <div>
            <img className='w-50' src={jeff}></img>
            <img className='w-50' src={ansel}></img>
            <img className='w-75' src={team}></img>
          </div>
          <div className="flex-grow-1">
            <h1> Sit commodo elit dolore sint proident sunt minim pariatur velit esse. Ex id ea occaecat eu incididunt eu ea eiusmod consequat. Ad aute elit cillum do dolore consequat sint. </h1>
          </div>
        </div>
      </div>
      <div className='footer'>GOL</div>
    </div>
  );
}

export default App;
