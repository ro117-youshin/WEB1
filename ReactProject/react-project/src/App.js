import './App.css';
import ResultRows from './components/ResultRows';

function App() {
  let rows = [];
  const candidates = [
    {id: "1",name: "김유신", numberofvotes: 3, rateofvotes: 0},
    {id: "2",name: "손영식", numberofvotes: 6, rateofvotes: 0},
    {id: "3",name: "배기한", numberofvotes: 2, rateofvotes: 0},
    {id: "4",name: "남기준", numberofvotes: 1, rateofvotes: 0},
    {id: "5",name: "김태언", numberofvotes: 3, rateofvotes: 0},
    {id: "6",name: "김정재", numberofvotes: 1, rateofvotes: 0},
    {id: "7",name: "서지윤", numberofvotes: 5, rateofvotes: 0}
  ]

  const totalVotes = candidates.map(hubo=>hubo.numberofvotes).reduce((a,b) => a+b);
  
  candidates.forEach((item) => {
    item.rateofvotes = Math.round(item.numberofvotes/totalVotes*100, 2);
  })

  candidates.forEach((item) =>  {
    rows.push(
      <ResultRows
        id={item.id}
        name={item.name}
        numberofvotes={item.numberofvotes}
        rateofvotes={item.rateofvotes}
        key={item.id}
        />
    )
  })

  return (
    <div className="result-box">
      <h1>후보별 득표 결과</h1>
      
      <div className="table">
        {rows}
      </div>
    </div>
  );
}

export default App;
