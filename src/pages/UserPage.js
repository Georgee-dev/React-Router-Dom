
import {React} from 'react';

import {useParams} from 'react-router-dom';

function UserPage() {
    const params = useParams();
    // const { id } = useParams();
    console.log(params );
  return (
      <div>
          User : <h1>{params.id}</h1>
      </div>
  );
}

export default UserPage;
