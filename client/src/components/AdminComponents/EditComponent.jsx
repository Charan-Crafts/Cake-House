import React from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
const EditComponent = () => {

    const {id} = useParams();

  return (
    <div>
      <h1>Edit page</h1>
    </div>
  );
}

export default EditComponent;
