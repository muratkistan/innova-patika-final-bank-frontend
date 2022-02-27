
import Header from './components/Header';
import ListCustomerComponent from './components/ListCustomerComponent';
import MainPage from './components/MainPage';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import EditCustomer from './components/EditCustomer';
import ContactUs from './components/ContactUs';
import CreateCustomer from './components/CreateCustomer';
import CreditApplication from './components/CreditApplication';
import ListCreditsComponent from './components/ListCreditsComponent';
import Search from './components/Search';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    
    <div >
      <Header/>
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage}></Route>
              <Route path="/customers" component={ListCustomerComponent}></Route>
              <Route path="/add" component={CreateCustomer}></Route>
              <Route path="/edit/customer/:id" component={EditCustomer}></Route>
              <Route path="/addCredit" component={CreditApplication}></Route>
              <Route path="/contactUs" component={ContactUs}></Route>
              <Route path="/credits" component={ListCreditsComponent}></Route>
              <Route path="/sorgu" component={Search}></Route>
              
              <Redirect to="/"/>

          </Switch>
      </Router>
      
  
    </div>
  );
}

export default App;
