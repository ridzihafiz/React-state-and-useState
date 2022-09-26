import React, { useState } from 'react';
import './style.css';

// React Component = sebuah function / class yang mereturn JSX
// 1. Namanua harus dimulai dengan huruf capital
// 2. Hanya bisa mereturn sebuah parent element
// 3. Bisa memiliki state dan props
// 4. Bisa di panggil di component lain dengan cara <NamaComponent />

export default function App() {
  // count variable penyimpan data dari useState
  // setCount function untuk merubah nilai pada state atau count pada kasus ini
  const [count, setCount] = useState(1);
  const [text, setText] = useState('This is text default');
  const [fontSize, setFontSize] = useState(64);
  const [color, setColor] = useState('red');

  return (
    <React.Fragment>
      <div className="container">
        <h1>Jumlah : {count} </h1>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Tambah
        </button>

        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
            return;
          }}
        >
          Kurangin
        </button>

        <h3
          style={{
            fontSize: fontSize + 'px',
            color: color,
          }}
        >
          {text}
        </h3>
        <input
          type="text"
          placeholder="Masukkan Text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <div>
          <input
            type="range"
            min={1}
            max={100}
            onChange={(e) => {
              setFontSize(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

/* 
// Old Version using class
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi Rid!</h1>
      </div>
    );
  }
}

export default App;
 */
