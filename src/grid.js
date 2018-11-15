import React from 'react';
import { GridHeader } from './grid-header';
import { GridBody } from './grid-body';
import { GridFooter } from './grid-footer';

class Grid extends React.Component {

    constructor( props ) {

        super( props );
    }

    render() {

        return (

            <div>
                <GridHeader />
                <GridBody />
                <GridFooter />
            </div>
        );
    }
}

export {

    Grid
};