import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from './grid';

const persons = [

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

const config = {

    columns: {

        height: { type: 'text' }
        name: { type: 'text' }
        sex: { type: 'text' }
    }

    order: [ 'name', 'sex', 'height' ]
};

ReactDOM.render(
    <Grid items={ persons } meta={ config } />,
    document.getElementById('container')
);
