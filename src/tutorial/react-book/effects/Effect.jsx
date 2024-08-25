import {useState, useEffect} from 'react'

export default function Effect(){ 
  const [data, setData] = useState('');

  async function serveData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogposts = await response.json();

    return blogposts
  }

   useEffect(function getData(){
  serveData().then((data) => setData(data) );

  }, []);

  return (
    <div>
       { 
        data ? (
      <ul>
        { data.map((item )=>  (
          <li key={item.id}>{item.title}</li> 
          ))
          }
      </ul>
      ) : <p>Loading...</p>
     }
      
    </div>
  ) 
  }
