import React,{Component} from 'react';
import '../index.css'

class MyCard extends Component {
  render(){
    return (
      <div class="card"  style={{margin: '5px'}}>
        <div class="card-body">
          <h5 class="card-title">IP : 192.168.1.0</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
    </div>
    );
  }
}

export default MyCard;
