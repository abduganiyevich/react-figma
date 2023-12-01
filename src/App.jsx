
import './App.css';
import earth from './PIctures/earth.png';
import search from './PIctures/Search.png';
import buy from './PIctures/Buy.png'
import vegetables from './PIctures/vegetables.png'
import user from './PIctures/user.png'
import star from './PIctures/star.png'
import harvest from './PIctures/harvest.png'
import arrow from './PIctures/arrow.svg';

function App() {
  return (
    <div className="App">

     <header>
      <div className="container header__container">

        <div className="header__nav">
          <a href="#">About us</a>
          <a href="#">service</a>
          <a href="#">menu</a>
          <a href="#">contact</a>
        </div>

      <div className="header__logo">
        <img src={earth} alt="" />
      </div>

        <div className="register">
          <img className='search' src={search} alt=""/>
          <img className='search' src={buy} alt="" />
          <a href="#">Register</a>
        </div>
      </div>
     </header>

     <div className="hero">
      <div className="container hero__container">
        <h1>Organic Fruit & Vegetables</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
       <div className='order'> <span>Order Now</span> 
       <img src={arrow}  />
       </div>

        <div className="hero__img">
          <img src={vegetables} alt=""/>

          <div className="hero__frame">
          <div className="hero__block">
            <div className="hero__box">
              <div>
              <img className='hero__box--img' src={user} alt="user"/>
              </div>
              <div className='hero__box--title'>
                <h2>30K</h2>
                <p>User Order</p>
              </div>
            </div>

          </div>
          <div className="hero__block">
            <div className="hero__box">
              <div>
              <img className='hero__box--img' src={star} alt="user"/>
              </div>
              <div className='hero__box--title'>
                <h2>30K</h2>
                <p>User Order</p>
              </div>
            </div>

          </div>
          <div className="hero__block">
            <div className="hero__box">
              <div>
              <img className='hero__box--img' src={harvest} alt="user"/>
              </div>
              <div className='hero__box--title'>
                <h2>30K</h2>
                <p>User Order</p>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
