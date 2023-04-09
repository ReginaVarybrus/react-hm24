import './App.css';

import AddRecordForm from './components/AddRecordForm';
import PhoneBookRecords from './components/PhoneBookRecords';
// import Test from './components/Test';

function App() {
  return (
    <div className='App'>
      Add the record
      {/* <Test /> */}
      <AddRecordForm />
      <PhoneBookRecords />
    </div>
  );
}

export default App;
