import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '../../src/grid';

var persons = [

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

// var persons = require( './mock10000.json' );

var colDefs = [

    { prop: 'name', name: 'Name' },
    { prop: 'sex', name: 'Gender' },
    { prop: 'height', name: 'Height(cm)', type: 'text' },
];

ReactDOM.render(
    <Grid classNamePrefix="grid"
          items={ persons } 
          cols={ colDefs }
    />,
    document.getElementById('container')
);
