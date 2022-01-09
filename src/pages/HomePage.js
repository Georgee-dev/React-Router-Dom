
import {React} from 'react';
import {Link} from 'react-router-dom'

function HomePages() {

 const userId = 'George';
//  const userId = 10;
  return (
      <div>
          <h1>Hello, Here HomePage</h1>
          <Link to={`/users/${userId}`}>User</Link>
      </div>

  );
}

export default HomePages;
