import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const apiCoinLists = 'https://api.coingecko.com/api/v3/coins/list'
  useEffect(() => {
    fetch(apiCoinLists).then(response => response.json()).then(json => {
      setData(json)
    }).catch(e => {
      console.log('e', e)
    })

  }, [])
  return (
    <div>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Symbol</td>
        </tr>
        {
          data.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
