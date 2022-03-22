import React from "react";

/*
When adding a new page:
- copy what's been done with the 'profile' page
- create new file in components dir, replace all instances of profile in the file
- in components/index.js, add a new entry to the new component
- add a <li> element in navigation.js for the new page
- in src/index.js, import the component, and add a new Route element
Used strategy discussed here: https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
*/

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5 text-white">
            <h1>Welcome to Healthy Habits!</h1>
            <p>Habit adherence rate: 94%</p>
            <p>Totals activities completed in last 30 days: 47</p>
            <p>Total activities planned for last 30 days: 50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;