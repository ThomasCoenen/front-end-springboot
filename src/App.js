//heroku commands:
//heroku login
//git init
//git add .
//heroku git:remote -a spring-frontend1
//git commit -m "make it better"
//git push heroku master

//git add *
//git commit -m "make it better"
//git push -f heroku master

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ThomasCoenen/front-end-springboot.git
// git push -u origin main


import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Switch>
          <Route path='/' exact component={ListEmployeeComponent}></Route>
          <Route path='/employees' exact component={ListEmployeeComponent}></Route>
          <Route path='/add-employee' exact component={CreateEmployee}></Route>
          <Route path='/update-employee/:id' exact component={UpdateEmployeeComponent}></Route>
          <Route path='/view-employee/:id' exact component={ViewEmployee}></Route>
        </Switch>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
