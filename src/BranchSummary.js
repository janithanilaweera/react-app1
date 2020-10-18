import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Person from  "./Person";
import test from "./Person";



const MyComponent = (props) => {
  debugger;
  const [namea, eeeee] = useState(test.firstName);

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

        plans[0].name = props.arg.field1; // this arg is parameter coming from APP.js
  plans[0].premiumInDollars = props.arg.field2

    plans[1].name = namea;
    plans[0].premiumInDollars = props.arg.field2
     Person.fName('janitha');
  return (
    <div>sddasda
        <input value={namea} />
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

function BranchSummary4() {

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
}

const tweet = (props)=> {


    return
}

export { BranchSummary4, MyComponent };
