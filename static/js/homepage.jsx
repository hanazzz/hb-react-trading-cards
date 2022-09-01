'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome!</h1>
      <a href="/cards">Click here to go to the cards!</a>
      <img src="/static/img/balloonicorn.jpg" alt="Balloonicorn"/>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

//welcome message
//link to the cards page
//large image of balloonicorn