import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
//
function MyComponent() {
  debugger;
  const [namea, eeeee] = React.useState("hi");
  const plans = [
    {
      name: "Silver500",
      premiumInDollars: 500,
      validityInYears: 2,
    },
    {
      name: "Gold250",
      premiumInDollars: 250,
      validityInYears: 3,
    },
  ];

  plans[0].name = namea;
  plans[1].name = namea;
  return (
    <div>
      <div>
        <input value={namea} onChange={(e) => eeeee(e.target.value)} />
        {namea}
        <ul>
          <li> {namea}</li>
        </ul>
      </div>
      <div>
        <p>Here's the list of plans rendered in the UI using map():</p>
        <ul>
          {plans.map((plan) => (
            <div>
              <li>
                {plan.name} - ${plan.premiumInDollars}
              </li>
              <span>Validity in years: {plan.validityInYears}</span>
              <br />
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MyComponent;
