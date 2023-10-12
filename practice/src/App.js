import logo from './logo.svg';
import './App.css';

function Contents(abab){
  return(
    <div>
      <h2>{abab.content.index}번 게시글</h2>
      컨텐츠컨텐츠
      <p>작성자 : {abab.content.writer}</p>
    </div>
  )
}

function App() {
  const 배열 =[
    {index : 1, writer :'철수'},
    {index :2, writer : "영희"},
    {index :3, writer : "짱구"},
    {index :4, writer : "맹구"},
    {index :5, writer : "도근"},
    {index :6, writer : "철수"},
    {index :7, writer : "맹구"},
    {index :8, writer : "도근"},
    {index :9, writer : "짱구"},
    {index :10, writer : "유리"}
  ]

  console.log(배열[0].index)

  return (
    <div className="App">
      {배열.map((아무거나)=><Contents content={아무거나}></Contents>)}
    </div>
  );
}

export default App;
