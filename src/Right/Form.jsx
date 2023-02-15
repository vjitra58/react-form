import React from "react";
import "./Right.css";
import { useState } from "react";
import Pills from "./Pills.jsx";
import { useEffect } from "react";

const skills = [
  {
    val: "HTML",
    selected: false,
  },
  {
    val: "JS",
    selected: false,
  },
  {
    val: "CSS",
    selected: false,
  },
  {
    val: "Mongo",
    selected: false,
  },
  {
    val: "Node",
    selected: false,
  },
];

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const [skill, setSkill] = useState([]);

  useEffect(()=>{
    if(name != "" && email != "" && password != "" && skill.length != 0){
        // make button active
        setEnable(true);
    }else{
        // make button disable
        setEnable(false);
    }
  }, [name, email, password, skill]);

//   const select = (e) => {
//     console.log(e);
//     let sz = skills.length;
//     for (let i = 0; i < sz; i++) {
//       if (skills[i].val == e.target.value) {
//         skills[i].selected = true;
//         setSkill(skills);
//         console.log(skill);
//         break;
//       }
//     }
//   };

const select = (e) => {
    let sz = skill.length;
    let found = false;
    for (let i = 0; i < sz; i++) {
        if(skill[i] == e.target.value){
            found = true;
            break;
        }  
    }
    if(!found){
        setSkill([...skill, e.target.value]);
        // console.log(skill);
    }
}

  function unselect(e){
    console.log(e);
    const newskill = skill.filter((ele) => ele != e);
    setSkill(newskill);
  }


  return (
    <form className="right-form">
      <input
        name="name"
        type="text"
        className="right-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        className="right-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        className="right-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <select type="select" className="right-input" onClick={select}>
        <option value="select">select</option>
        {skills
          .filter((e) => e.selected == false)
          .map((ele, i) => {
            {
              return (
                <option key={i} value={ele.val}>
                  {ele.val}
                </option>
              );
            }
          })}
      </select>
      <div className="right-pills">
        {skill
          .map((ele, i) => {
            return <div onClick={()=>unselect(ele)} key={i} className="pills">{ele}</div>;
          })}
      </div>

      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          disabled={enable}
          className={enable ? "submit-enable" : "submit-disable"}
          type="submit"
        >
          CLAIM YOUR FREE TRAIL
        </button>
        <p>
          By clicking the button you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
