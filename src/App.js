import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          thingList : [
            { name:'item 1',
              value :'uno',
            },
            { name:'item 2',
              value :'dos',
            }
          ]
        }
    }


    render(){      
      return <div>
        <Header counter="TBD" />
        <main>
          <ThingList things={this.state.thingList} />
        </main>
        {/* <Footer /> */}
        </div>
    }
}

function ThingList(props){
    return <>
      {/* <p>list {props.things.length}</p> */}
        <h3> Things in the List</h3>
        <ul>
            { props.things.map( thing => <Thing item={thing} />) }
        </ul>
    </>
}

function Thing(props){
  return <>
    <li>  {props.item.name} : {props.item.value} </li>
  </>
}





function Header(props){
  return <>
    <h1>You have {props.counter} in your list </h1>
  </>
}

function Footer(){
  return <>
    <footer>
        <br></br>
        <br></br>
        <br></br>
        <p>
        Lie in the sink all day then cats take over the world, so need to chase tail. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now give me some of your food give me some of your food give me some of your food meh, i don't want it so ears back wide eyed so rub butt on table. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap love to play with owner's hair tie eat fish on floor so you're just gonna scroll by without saying meowdy?. 
        </p>

    </footer>
  </>
}

export default App;
