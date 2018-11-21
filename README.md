# grid
Grid with sorting capacity in React

# Example
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@ohxyz/grid';
import '@ohxyz/grid/style/default.css';

let persons = [

    { height:  175,       name:    'Andrea'                    },
    { height:  167,       name:    'Anthony',  sex:     'Male' },
    { name:   'Annie',    sex:     'Female',   height:   180   },
    { name:   'Campbell', height:   175                        },
    { sex:    'Female',   name:    'Bennie',   height:   175   },
    { name:   'Cameron',  height:   173,       sex:     'Male' },
    { name:   'Benjamin', sex:     'Male',     height:   167   },
    { name:   'Anna',     sex:     'Female',   height:   169   },
    { name:   'Benson',   sex:     'Male'                      }
];

let columnRefs = [

    { prop: 'name', name: 'Name' },
    { prop: 'sex', name: 'Gender' },
    { prop: 'height', name: 'Height(cm)' },
];

ReactDOM.render(
    <Grid items={ persons } 
          cols={ columnRefs } 
    />,
    document.getElementById('container')
);
```