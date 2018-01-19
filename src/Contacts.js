import React, { Component } from 'react';
import './App.css';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
      <h1>Contacts</h1>
        <ul>
          <li>888-888-8888</li>
          <li>v_official_dentist@whitehouse.gov</li>
          <li>Say my name 3x fast in the mirror</li>
        </ul>
      </div>
    );
  }
}

export default Contacts;
