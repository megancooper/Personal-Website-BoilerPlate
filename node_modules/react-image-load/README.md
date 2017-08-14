# Documentation

Load image blob file and Rotate it.

## installation

```
npm install react-image-load
```

### Example

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img from 'react-image-load';

// don't forget load styles, otherwise rotation will not work; 
import 'react-image-load/assets/style.css'


export default class App extends Component {
  render() {

    return (
        <Img
          width="100"
          height="200"
          rotate={90}
          src="http://i.telegraph.co.uk/multimedia/archive/03570/potd-grass_3570487k.jpg"
        />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));```

## Props

| Property | type | description | default |
-------------------------------------------
| width | { Number; String } | Image width in px | origin size |
------
| height | { Number; String } | Image height in px | origin size |
------
| rotate | { Number } | Image rotation; May be one of: 0, 90, 180, 270 | 0 |
-----
| src | { String } | Image url | none |
------
| className | { String } | Image className | 'blob-image' |
------
| headers | { Object } | Headers image request method | none |
------
| transform | Boolean | Adjust width/heihgt if image is rotated on 90, 270 deg | true |
------


   