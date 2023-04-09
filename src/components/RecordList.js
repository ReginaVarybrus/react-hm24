import { useState } from 'react';
import useDeleteRecords from '../hooks/useDeleteRecords';
import useSaveRecords from '../hooks/useEditRecords';
import PhoneCard from './PhoneCard';
import InputComponent from './InputComponent';

const RecordList = (props) => {
  const { delRecord, data, loading, error } = useDeleteRecords();
  const { saveRecord, dataSave, loadingSave, errorSave } = useSaveRecords();
  const [value, setValue] = useState('Edit');
  const [inputCall, setInputCall] = useState(false);

  const deleteHandler = (index) => {
    delRecord(index);
  };

  const editHandler = () => {
    setValue('Save');
    setInputCall(true);
  };

  const saveHandler = (index) => {
    saveRecord(index);
  };

  return (
    <div>
      {props.recordList?.data &&
        props.recordList.data.map((record, index) => (<>
          <PhoneCard key={`phone-card-${index}`}>{record.name} {record.phone}</PhoneCard>
          {inputCall ? <InputComponent /> : null}
          <button onClick={() => deleteHandler(index)}>Delete</button>
          <button onClick={() => editHandler()}>{value}</button>
          <button onClick={() => saveHandler(index)}>Save</button>
        </>
        ))}
    </div>
  );
};

export default RecordList;