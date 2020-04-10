import React, {useEffect, useState} from 'react';
import failover from './failover';
import getdata from './getdata';
import DataBlog from './table';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    async function render(){
      const URL = await failover();
      const data = await getdata(URL);
      setData(data);
    }
    render();
  },[]);
  let row = [];
  if(data.result){
    data.result.forEach((item) => {
      row.push(<DataBlog item={item} key={item._id} />);
    })
  }
  if(data.dataFrom){
    console.log(data.dataFrom);
  }
  
  return (
    <div>
      {row}
    </div>
  );
}

export default App;
