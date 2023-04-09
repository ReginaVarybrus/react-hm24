// import { useState } from 'react';
// import useEditRecords from '../hooks/useEditRecords';
// import InputComponent from './InputComponent';

const PhoneCard = (props) => {
    // const { editRecord, dataEdit, loadingEdit, errorEdit } = useEditRecords();
    // const [value, setValue] = useState('Edit');
    // const [inputCall, setInputCall] = useState(false);

    // const editHandler = (index) => {
    //     editRecord(index);
    //     setValue('Save');
    //     setInputCall(true);
    // };

    return <div>
        {props.children}
        {/* {inputCall ? <InputComponent /> : null} */}
        {/* <button onClick={() => editHandler()}>{value}</button> */}
    </div>;
};

export default PhoneCard;