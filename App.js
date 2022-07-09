import { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[], 
      searchfield:''   
    };
    //console.log('constructor');
  } 
componentDidMount(){

  //console.log('Component did mount');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users)=>this.setState(()=>{
    return {monsters:users}
  },
 ()=> {
    //console.log(this.state);
  }));
}

onSearchChange=(event)=>{
  const searchfield=event.target.value.toLocaleLowerCase();
  //[{name:'Leanne'},{name:'Yihua'}]
  
  this.setState(()=>{
    return {searchfield};
  }
  );
}

  render(){
    const{monsters,searchfield}=this.state;
    const{onSearchChange}=this;
    const filteredmonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchfield);
    });

    //console.log('render from cardlist ');
  return (
    <div className="App">
   <SearchBox 
   className='monsters-search-box'
   onChangeHandler={onSearchChange} 
   placeholder='search monsters' />
      <CardList monsters={filteredmonsters}/>
    </div>
  );
  
}

}
export default App;

/*
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
    };
    console.log('constructor');
  }
  componentDidMount(){
    console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>this.setstate(
      ()=>{
        return {monsters:users}
      },
      ()=>{
        console.log(this.state);
      }
    ))
  }
  render(){
    console.log('render');
    return (
      <div className='App'>
      <input className='search-box' 
             type='search'
             placeholder='search the monster'
             onChange={(event)=>{
            console.log(event.target.value);
            const searchstring=event.target.value.toLocaleLowerCase();
            const filteredmonsters=this.state.monsters.filter((monster) => {
                return monster.name.toLocaleLowerCase().includes(searchstring);
            });
            this.setState(()=>{
              return {monsters:filteredmonsters}
            })
          
        }
      }  
      />
      {
      this.state.monsters.map((monster)=>{
        return <div key={monster.id}><h1>{monster.name}</h1></div>
      })
      }
      </div>
    );
    }
}
export default App;
*/
