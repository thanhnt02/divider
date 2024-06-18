import { useState } from "react";
import { divider } from "../services/calculate"

function Divider() {

  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState();

  const handleInput1 = (e) => {
    const value = e.target.value
    if (value < 0) {
      alert('Không được nhập số nhỏ hơn 0');
    } else setInput1(value)
  }

  const handleInput2 = (e) => {
    const value = e.target.value
    if (value < 0) {
      alert('Không được nhập số nhỏ hơn hoặc bằng 0 0');
    } else setInput2(value)
  }

  const handleClick = () => {
    if (input1 && input2) {
      setResult(divider(input1, input2))
    }
  }

  return (
    <>
      <div className="cal">
        <input onChange={handleInput1} type="number" placeholder="Nhập số chia" />
        <input onChange={handleInput2} type="number" placeholder="Nhập số bị chia" />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="result">
        Kết quả: {result}
      </div>
    </>
  )
}

export default Divider