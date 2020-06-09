import React from 'react';
import './Steps.css';

function Step() {
  return (
    <div>
        <p>
          Hello from <strong>Wahab!</strong> I'm {20 + 7}
        </p>
        <ul className="ul">
          <li> Install React </li>
          <li> Make Some changes </li>
          <li> Init a Git Repo, Commit the repo's stuff</li>
          <li> Create a workflow</li>
          <li> Generate a surge token and set it in secrets on github</li>
          <li> Write the workflow steps</li>
          <li> Make some more changes</li>
          <li> Pull before you Commit &amp; Push</li>
          <li>Voila! Head over to the url and on every push to master you are always up to date online!</li>
        </ul>
        <h3>Stay tuned for upcoming class peeps, To Be Continued...</h3>
    </div>
  );
}

export default Step;
