import { Typography } from "@material-ui/core";
import React from "react";
//
const MyComponent = () => {
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
};

const BranchSummary4 = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        WeCare - Franston
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        38 Napien Highway,Frankston ,VIC, 3600, Australia
      </Typography>
      <hr />
    </div>
  );
};

export { BranchSummary4, MyComponent };
