import React, { useState } from "react";
import styled from "styled-components";

function FoodList(props) {
  const [toppingTwo, setToppingTwo] = useState("");
  const [toppingOne, setToppingOne] = useState("");
  const logName = () => {
    console.log(toppingOne);
    console.log(toppingTwo);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Items Submitted 👌 `);
  };

  const handleToppingOneInput = (evt) => {
    setToppingOne(evt.target.value);
  };
  const handleToppingTwoInput = (evt) => {
    setToppingTwo(evt.target.value);
  };

  return (
    <FoodListDiv>
      <H1>PIZZA</H1>
      <form onSubmit={handleSubmit}>
        <ToppingOneLabel>
          <label htmlFor="Topping">
            <H3>Add First Topping:</H3>
            <input
              name="Topping"
              placeholder="Topping One"
              value={toppingOne}
              onChange={handleToppingOneInput}
            />
          </label>
        </ToppingOneLabel>
        <ToppingTwoLabel>
          <label htmlFor="topping">
            <H3> Add Second Topping:</H3>
            <input
              name="topping"
              placeholder="Topping Two"
              value={toppingTwo}
              onChange={handleToppingTwoInput}
            />
          </label>
        </ToppingTwoLabel>
        <SubmitDiv>
          <Button onClick={logName}>Submit</Button>
        </SubmitDiv>
      </form>
      <ReturnDiv>
        <h3>Items You're Bringing:🍴</h3>
        <p>{toppingOne}</p>
        <p>{toppingTwo}</p>
      </ReturnDiv>
    </FoodListDiv>
  );
}

// Styled Components
const FoodListDiv = styled.div`
  background-color: #00af91;
  padding: 7px 70px;
  justify-cont
`;

const ToppingOneLabel = styled.div`
  text-align: center;
  margin: 10px auto;
  font-size: 1.3 rem;
`;

const ToppingTwoLabel = styled.div`
  text-align: center;
  margin 10px auto;
  font-size: 1.3 rem;
  
`;
const SubmitDiv = styled.div`
text-align: center;
margin 10px auto;
`;

const ReturnDiv = styled.div`
  color: #ffcc29;
  text-align: center;
`;

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3 rem;
  padding: 7px 70px;
  margin-top: 10px;
  background: #F58634;
  border-radius: 5px ;
  color: #FFF;
  &: hover {
    color: #ffcc29;
`;

const H1 = styled.h1`
  color: #ffcc29;
  text-align: center;
`;

const H3 = styled.h3`
  color: #ffcc29;
`;

export default FoodList;
