import './App.css';

import AddRecordForm from './components/AddRecordForm';
import PhoneBookRecords from './components/PhoneBookRecords';

function App() {
  return (
    <div className='App'>
      Add the record
      <AddRecordForm />
      <PhoneBookRecords />
    </div>
  );
}

export default App;
