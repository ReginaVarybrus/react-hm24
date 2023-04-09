import { useState } from "react";
import axios from 'axios';

const useSaveRecords = () => {
  const [dataSave, setDataSave] = useState(null);
  const [loadingSave, setLoadingSave] = useState(false);
  const [errorSave, setErrorSave] = useState(undefined);

  const saveRecord = (id) => {
    setLoadingSave(true);
    axios.put(`records/${id}`).then((resp) => {
      setDataSave(resp);
      setLoadingSave(false);
    });
  }

  return { saveRecord, dataSave, loadingSave, errorSave };
};

export default useSaveRecords;

// Затем скачайте код лекции, запустите его и добавте в него PUT запрос 
// для редактирования записей. 
// Редактирование должно включатся по нажатию кнопки Edit,
//  которую вы добавите в карточку с записями. 
// По нажатию на эдит записи должны стать редактируемыми 
// (сменится на инпуты) а кнопка на Save. 
// По сейву отправляем пут запрос на бэк.
