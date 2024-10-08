import '../styles/App.css';
// import { TodoWrapper } from './TodoWrapper';
import Banner  from './Banner';
import { TodoWrapperLocalStorage } from './TodoWrapperLocalStorage';


function App() {
  return (
    <div className="container">
      <div className='row align-items-stretch'>
          <Banner />
          <TodoWrapperLocalStorage />
      </div>
    </div>
  );
}

export default App;
