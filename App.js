import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const ar = {
    alfa: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  
  const [vvod, setVvod] = useState(ar);
  
  const Check = (argument) => {
    if(vvod.one === argument && vvod.five === argument && vvod.nine === argument){
      return true;
    }else if(vvod.three === argument && vvod.five === argument && vvod.seven === argument){
      return true
    }else if(vvod.one === argument && vvod.two === argument && vvod.three === argument){
      return true;
    }else if(vvod.four === argument && vvod.five === argument && vvod.six === argument){
      return true;
    }else if(vvod.seven === argument && vvod.eight === argument && vvod.nine === argument){
      return true;
    }else if(vvod.one === argument && vvod.four === argument && vvod.seven === argument){
      return true;
    }else if(vvod.two === argument && vvod.five === argument && vvod.eight === argument){
      return true;
    }else if(vvod.three === argument && vvod.six === argument && vvod.nine === argument){
      return true;
    }else{return false;}
  }

  useEffect(()=>{
    setTimeout(()=>{
    if(vvod.alfa % 2 === 0){
      if(Check("x")){
        alert("Player X is winner!!!");
        setVvod(()=>{
          return ar;
        });
      }
    }else{
      if(Check("o")){
        alert("Player O is winner!!!");
        setVvod(()=>{
          return ar;
        });
      }
    }
  },250)},[vvod]);

  const Clickhandler1 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          one: 'x',
          alfa: beta,
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          one: 'o',
          alfa: beta,
        };
      });
    }
  }

  const Clickhandler2 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          two: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          two: 'o',
          alfa: beta
        };
      });
    }
  }

  const Clickhandler3 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          three: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          three: 'o',
          alfa: beta
        };
      });
    }
  }
  
  const Clickhandler4 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          four: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          four: 'o',
          alfa: beta
        };
      });
    }
  }

  const Clickhandler5 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          five: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          five: 'o',
          alfa: beta
        };
      });
    }
  }

  const Clickhandler6 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          six: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          six: 'o',
          alfa: beta
        };
      });
    }
  }

  const Clickhandler7 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          seven: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          seven: 'o',
          alfa: beta
        };
      });
    }
  }

  const Clickhandler8 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          eight: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          eight: 'o',
          alfa: beta
        };
      });
    }
  }

  const Clickhandler9 = () => {
    let beta = vvod.alfa;
    beta++;
    if (beta % 2 === 0) {
      setVvod((prevState) => {
        return {
          ...prevState,
          nine: 'x',
          alfa: beta
        };
      });
    } else {
      setVvod((prevState) => {
        return {
          ...prevState,
          nine: 'o',
          alfa: beta
        };
      });
    }
  }
  return <div className = 'vertical'>
      <div className = 'buttons' >
    <button onClick = {Clickhandler1}>{vvod.one}</button> 
    <button onClick = {Clickhandler2}>{vvod.two}</button> 
    <button onClick = {Clickhandler3}>{vvod.three}</button> 
    <button onClick = {Clickhandler4}>{vvod.four}</button> 
    <button onClick = {Clickhandler5}>{vvod.five}</button> 
    <button onClick = {Clickhandler6}>{vvod.six}</button> 
    <button onClick = {Clickhandler7}>{vvod.seven}</button> 
    <button onClick = {Clickhandler8}>{vvod.eight}</button> 
    <button onClick = {Clickhandler9}>{vvod.nine}</button> 
      </div> 
    </div>
  // const arr=[{title: '0'},{title: '1'},{title: '2'},{title: '3'},{title: '4'},{title: '5'},{title: '6'},{title: '7'},{title: '8'},{title: '9'}];
  // return <div className='vertical'>
  //   <div className = 'buttons'>
  //   <Buttons title={arr[1].title} alfa={arr[0].title}/>
  //   <Buttons title={arr[2].title}/>
  //   <Buttons title={arr[3].title}/>
  //   <Buttons title={arr[4].title}/>
  //   <Buttons title={arr[5].title}/>
  //   <Buttons title={arr[6].title}/>
  //   <Buttons title={arr[7].title}/>
  //   <Buttons title={arr[8].title}/>
  //   <Buttons title={arr[9].title}/>
  //   </div>
  // </div>
}

export default App;