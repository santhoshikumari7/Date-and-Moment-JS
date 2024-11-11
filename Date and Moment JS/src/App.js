
import './App.css';
import moment from "moment"

function App() {
  let monthsArr = ["January","Febrauary","March","April","May","June","July","August","September","October","November","December"];

  let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  //let independenceDay = new Date(1947,7,15,0,30,3,333);

  //let independenceDay = new Date(123456789234);

  //let independenceDay = new Date("26 jan 1952");
  
  //let independenceDay = new Date();


  //console.log(independenceDay.getFullYear());
  //console.log(monthsArr[independenceDay.getMonth()]);
  //console.log(daysArr[independenceDay()]);
  //console.log(independenceDay.getDate());
  //console.log(independenceDay.getHours());
  //console.log(independenceDay.getMinutes());
  //console.log(independenceDay.getSeconds());
  //console.log(independenceDay.getMilliseconds());
  //console.log(independenceDay.getTime());
  
  return (
    <div className="App">

      <h1>Learnig Date Classes</h1>

      <form>
        <div>
          <label>Dwakra Loan Start Date</label>
          <input type='datetime-Local' onChange={(eo)=>{
            let selectedDate = new Date(eo.target.value);
       console.log(moment(selectedDate).add(365, 'days').calendar());
              
      console.log(selectedDate.setFullYear(2898));     
      console.log(selectedDate.getFullYear());
      console.log(monthsArr[selectedDate.getMonth()]);
      //console.log(daysArr[selectedDate()]);
      console.log(selectedDate.getDate());
      console.log(selectedDate.getHours());
      console.log(selectedDate.getMinutes());
      console.log(selectedDate.getSeconds());
      console.log(selectedDate.getMilliseconds());
      console.log(selectedDate.getTime());

        let dwakraDuration = 365*24*60*60*1000;
        let dwakraEndDateinMs = selectedDate.getTime()+dwakraDuration;

        let dwakraEndDate = new Date(dwakraEndDateinMs);
        console.log(dwakraEndDate);

          }}></input>
        </div>
      </form>
      <button type='button' onClick={()=>{
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
        console.log(moment().format('dddd'));
      }}>momentjs</button>
     
    </div>
  );
}

export default App;
