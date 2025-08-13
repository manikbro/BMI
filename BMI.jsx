import React, { useState } from "react";
import "./Bmi.css";

function BMI() {
  const [metric, setmetric] = useState("cm");

  // Input states
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");

  // Result state
  const [result, setResult] = useState("");


  // Example: calculate BMI
  const calculateBMI = () => {
    if (!height || !weight) return "Please enter values";

    let heightInMeters;

    if (metric === "cm") {
      heightInMeters = height / 100;
    } else if (metric === "inch") {
      heightInMeters = height * 0.0254;
    } else if (metric === "feet") {
      heightInMeters = height * 0.3048;
    }

     const bmi = weight / (heightInMeters * heightInMeters);
    setResult(`Your BMI is: ${bmi.toFixed(2)}`);
  };

  return (
    <main className="divv">
      <h1 style={{color:"aliceblue"}}>BMI Calculator</h1>
   
      <br />
      <br />

      {metric === "cm" && (
        <div >
          <input
            type="number"
            placeholder="enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="height"
          />
          <label htmlFor="height"> Height(cm)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
          />
          <label htmlFor="weight"> Weight(kg)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            id="age"
          />
          <label htmlFor="age"> Age(cm)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter neck size"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            id="neck"
          />
          <label htmlFor="neck"> Neck(cm)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter waist size"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            id="waist"
          />
          <label htmlFor="waist"> Waist(cm)</label>
        </div>
      )}

      {/* -------------inch--- */}
      {metric === "inch" && (
        <div>
          <input
            type="number"
            placeholder="enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="height"
          />
          <label htmlFor="height"> Height(inch)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
          />
          <label htmlFor="weight"> Weight(kg)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            id="age"
          />
          <label htmlFor="age"> Age(inch)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter neck size"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            id="neck"
          />
          <label htmlFor="neck"> Neck(inch)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter waist size"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            id="waist"
          />
          <label htmlFor="waist"> Waist(inch)</label>
        </div>
      )}

      {metric === "feet" && (
        <div>
          <input
            type="number"
            placeholder="enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="height"
          />
          <label htmlFor="height"> Height(feet)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
          />
          <label htmlFor="weight"> Weight(kg)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            id="age"
          />
          <label htmlFor="age"> Age(feet)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter neck size"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            id="neck"
          />
          <label htmlFor="neck"> Neck(feet)</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="enter waist size"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            id="waist"
          />
          <label htmlFor="waist"> Waist(feet)</label>
        </div>
      )}
      <br/><br/>
      <div>
      <button onClick={calculateBMI}>Calculate BMI</button>

     
         <select value={metric} onChange={(e) => setmetric(e.target.value)}>
        <option value="cm"> cm</option>
        <option value="inch"> inch</option>
        <option value="feet">feet </option>
      </select>
      </div>
       {/* Printed result */}
      {result && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>{result}</div>
      )}
    </main>
  );
}

export default BMI;
