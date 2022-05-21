import React from 'react'
import BoardComponent from './components/BoardComponent'
import "./App.css"

function App() {
  return (
    <div className='app'>
      <div className="wrap">
        <h1 className='player'>1 игрок</h1>

        <div className="field">
          <BoardComponent/>
          <div className="side-panel">
            <div className="up-panel">
              <button className="next">Далее</button>
              <button className="сlear">Очистить</button>
              <button className="back">Отменить ↩️</button>
            </div>
            <div className="low-panel">
              <span className="add-ship">Добавить корабль:</span>
              <button className="one-deck ship">с 1 палубой</button>
              <button className="two-deck ship">с 2 палубами</button>
              <button className="three-deck ship">с 3 палубами</button>
              <button className="four-deck ship">с 4 палубами</button>
            </div>
            
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default App