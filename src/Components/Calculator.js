import React from "react";
import { useState } from "react";
import "../Components.css"

export const Calculator = () => {

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    let [error, setError] = useState(false)
    let [result, setResult] = useState("")

    const validate = () => {
        setResult("")
        setError("")
        if (num1 === "" || num2 === "") {
            if (num1 === "") {
                setError("Num1 cannot be empty.")
            }

            else {
                setError("Num2 cannot be empty.")
            }
            return false
        }
        if (isNaN(num1) || isNaN(num2)) {
            if (isNaN(num1)) {
                setError("Num1 can only be either integer, floating-point, positive or negative.")
            }
            else {
                setError("Num2 can only be either integer, floating-point, positive or negative.")
            }
            return false
        }
        setError("")
        return true
    }

    const displaySolution = (operation) => {
        if (!validate()) {
            return
        }
        let solution;
        switch (operation) {
            case "add":
                solution = parseFloat(num1) + parseFloat(num2)
                break
            case "substract":
                solution = parseFloat(num1) - parseFloat(num2)
                break
            case "multiply":
                solution = parseFloat(num1) * parseFloat(num2)
                break
            case "divide":
                solution = parseFloat(num1) / parseFloat(num2)
                break
            default:
                return
        }
        setResult(solution)
    }


    return (
        <div className="calculator">
            <div className="heading">
                <h1 className="heading">React Calculator</h1>
            </div>
            <div className="inputs">
                <input className="input" type="text" placeholder="Num 1" value={num1} onChange={(e) => setNum1(e.target.value)} ></input> <br />
                <input className="input" type="text" placeholder="Num 2" value={num2} onChange={(e) => setNum2(e.target.value)}></input>
            </div>

            <div className="buttons">
                <button onClick={() => displaySolution("add")} id="btn1">+</button>
                <button onClick={() => displaySolution("substract")} id="btn2">-</button>
                <button onClick={() => displaySolution("multiply")} id="btn3">*</button>
                <button onClick={() => displaySolution("divide")} id="btn4">/</button>
            </div>

            <div className="display">
                {error !== "" ? <p style={{ color: "#E33737" }}>{error}</p> : ""}
            </div>
            <div className="display" >
                {/* {result === NaN ? <p>result nan</p>:""} */}
                {result !== "" ? (<><p style={{ color: "white" }}>Result: {result}</p><p style={{ color: "#47F558" }}>Success: Your result is shown above!</p></>) : ""}
            </div>

        </div>
    )
}
