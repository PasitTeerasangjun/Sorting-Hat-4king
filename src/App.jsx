import { useState } from 'react'
import './App.css'
import myImage from './img/4kings.png';
import Random from './component/random';

function App() {
  const [name_value, setName_value] = useState("");
  const [name, setName] = useState("");
  const [num_value, setNum_value] = useState("");
  const [num, setNum] = useState("_");
  const [data, setData] = useState([]);
  const [data_1, setData_1] = useState([]);
  const [data_2, setData_2] = useState([]);
  const [data_3, setData_3] = useState([]);
  const [data_4, setData_4] = useState([]);

  const addarray = () => {
    const name_arr = { name: name_value };
    if (data.length < num) {
      setData([...data, name_arr]);
    } else if (data.length > num) {
      alert("คุณใส่รายชื่อมากกว่าที่กำหนดไว้");
    } else {
      alert("คุณยังไม่ได้กรองจำนวนรายชื่อ");
    }
  };

  function num_click(event) {
    setNum(num_value);
    event.preventDefault();
  }

  function num_Change(event) {
    setNum_value(event.target.value);
  }

  function name_click(event) {
    setName(name_value);
    event.preventDefault();
    addarray();
    setName_value("");
  }

  function name_Change(event) {
    setName_value(event.target.value);
  }

  function average() {
    var average = data.length / 4;
    var data_array = [data_1, data_2, data_3, data_4];
    for (var i = 0; i < data.length; i++) {
      const name_arr = { name: data[i].name };
      while (true) {
        var random = Math.floor(Math.random() * 4);
        if (data_array[random].length < average) {
          data_array[random] = [...data_array[random], name_arr];
          console.log(random + 1 + " " + data_array[random].length);
          break;
        } else if (data_array.every(array => array.length === average)) {
          break;
        }
      }
    }
    setData_1(data_array[0]);
    setData_2(data_array[1]);
    setData_3(data_array[2]);
    setData_4(data_array[3]);
  }
  


  return (
    <div>
      <div class="image">
        <img src={myImage}></img>
      </div>
      <h1>Welcome to the Sorting Hat 4 king</h1>
      <h2>Number of names</h2>
      <form onSubmit={num_click}>
        <input class="input_num_num" type="Number" placeholder="Enter num.." onChange={num_Change} value={num_value} />
        <button type="submit">Submit</button>
        <h2>You choose {num} people.</h2>
      </form>
      <h2>Please enter name</h2>
      <form onSubmit={name_click}>
        <input class="input_name" type="text" placeholder="Enter your name.." onChange={name_Change} value={name_value} />
        <button type="submit">Submit</button>
      </form>
      <p>or do you want a random name?</p>
      <button onClick={accordion_click}>Random</button>
      <div class="panel">
        <p>How many random names do you want?</p>
        <Random />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class='avg'>
        <button class='average' onClick={average}>average</button>
      </div>

      <div class="container">
        <table>
          <thead>
            <tr>
              <th>ประชาชื่น</th>
            </tr>
          </thead>
          <tbody>
            {data_1.map((item1) => (
              <tr>
                <td>{item1.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>อินทร</th>
            </tr>
          </thead>
          <tbody>
            {data_2.map((item2) => (
              <tr>
                <td>{item2.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>กนกอาชีวะ</th>
            </tr>
          </thead>
          <tbody>
            {data_3.map((item3) => (
              <tr>
                <td>{item3.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>บูรณพล</th>
            </tr>
          </thead>
          <tbody>
            {data_4.map((item4) => (
              <tr>
                <td>{item4.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function accordion_click() {
  var panel = document.querySelector(".panel")
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}


export default App
