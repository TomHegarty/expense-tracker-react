import './App.css';

//components 
import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeExpenses';
import TransactionList from './components/transactionList';
import AddTransaction from './components/addTransaction';

//Global State Provider
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
