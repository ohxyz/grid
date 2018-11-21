import React from 'react';
import PropTypes from 'prop-types';
import { Column } from './column';

class Grid extends React.Component {

    constructor( props ) {

        super( props );

        this.sortOrder = 1;
        this.state = {

            items: this.props.items.map( item => Object.assign( {}, item ) ),
            sortClassName: ''
        };
    }

    makeClassName( text ) {

        return this.props.classNamePrefix + '__' + text;
    }

    handleHeaderCellClick( propName ) {

        if ( this.props.shouldEnableSort === false ) {

            return;
        }

        let items = this.state.items.map( item => Object.assign( {}, item ) );

        items.sort( ( item1, item2 ) => { 

            let valueOfItem1 = item1[ propName ] === undefined ? '' : item1[ propName ].toString();
            let valueOfItem2 = item2[ propName ] === undefined ? '' : item2[ propName ].toString();

            return valueOfItem1.localeCompare( valueOfItem2 ) * this.sortOrder;

        } );

        let sortClassName = '';

        switch( this.sortOrder ) {

            case 0:
                sortClassName = '';
                this.sortOrder = 1;
                break;

            case 1:
                sortClassName = 'grid--sort-asc';
                this.sortOrder = -1;
                break;

            case -1:
                sortClassName = 'grid--sort-desc';
                this.sortOrder = 0;
                break;

            default:
                break;
        }

        this.setState( { 

            items: items,
            sortClassName: sortClassName

        } );
    }

    renderCell( content ) {

        return content;
    }

    renderRow( object, index ) {

        return  <div className={ this.makeClassName( 'row' ) } key={ index } >
                {
                    this.props.cols.map( col =>

                        <span className={ this.makeClassName( 'row-cell' ) } key={ col.prop }>
                        { 
                            this.renderCell( object[ col.prop ] ) 
                        }
                        </span>
                    )
                }
                </div>
    }

    renderHeader() {

        let columnDefs = this.props.cols;

        return  <div className={ this.makeClassName( 'header' ) }>
                {
                    columnDefs.map( ( colDef, index ) => {

                        let column = new Column( colDef );

                        return  <span key={ index } 
                                      className={ this.makeClassName( 'header-cell' ) }
                                      onClick={ () => this.handleHeaderCellClick( column.prop ) }
                                >
                                    { column.name }
                                </span>
                    } )
                }
                </div>
    }

    renderBody() {

        return  <div className={ this.makeClassName( 'body' ) }>
                {
                    this.state.items.map( ( item, index ) => this.renderRow( item, index ) )
                }
                </div>
    }

    renderFooter() {

        return  <div className={ this.makeClassName( 'footer' ) }></div>
    }

    render() {

        let className = `${this.props.classNamePrefix} ${this.state.sortClassName}`.trim();

        return  <div className={ className } >
                    { this.renderHeader() }
                    { this.renderBody() }
                    { this.renderFooter() }
                </div>
    }
}

Grid.defaultProps = {

    items: [],
    cols: [],
    classNamePrefix: 'grid',
    shouldEnableSort: true
}

Grid.propTypes = {

    items: PropTypes.array,
    cols: PropTypes.array,
    classNamePrefix: PropTypes.string,
    shouldEnableSort: PropTypes.bool
}

export {

    Grid
};