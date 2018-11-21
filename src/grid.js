import React from 'react';
import PropTypes from 'prop-types';
import { Column } from './column';

class Grid extends React.Component {

    constructor( props ) {

        super( props );

        this.sortSettings = {

            prop: '',
            order: 0
        };

        this.state = {

            items: this.props.items.map( item => Object.assign( {}, item ) ),
            sortClassName: ''
        };
    }

    makeClassNameByPrefix( text ) {

        return this.props.classNamePrefix + '__' + text;
    }

    handleHeaderCellClick( propName ) {

        if ( this.props.shouldEnableSort === false ) {

            return;
        }

        let sortClassName = '';

        if ( this.sortSettings.prop === propName ) {

            switch( this.sortSettings.order ) {

                case 0:
                    this.sortSettings.order = 1;
                    sortClassName = this.props.classNamePrefix + '--sort-asc';
                    break;

                case 1:
                    this.sortSettings.order = -1;
                    sortClassName = this.props.classNamePrefix + '--sort-desc';
                    break;

                case -1:
                    this.sortSettings.order = 0;
                    sortClassName = '';
                    break;

                default:
                    break;
            }
        }
        else {

            this.sortSettings.order = 1;
            sortClassName = this.props.classNamePrefix + '--sort-asc';
        }

        this.sortSettings.prop = propName;

        let items = this.props.items.map( item => Object.assign( {}, item ) );

        if ( this.sortSettings.order !== 0 ) {

            items.sort( ( item1, item2 ) => { 

                let v1 = item1[ propName ] === undefined ? '' : item1[ propName ].toString();
                let v2 = item2[ propName ] === undefined ? '' : item2[ propName ].toString();

                return ( v1 < v2 ? -1 : ( v1 > v2 ? 1 : 0 ) ) * this.sortSettings.order;
            } );
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

        return  <div className={ this.makeClassNameByPrefix( 'row' ) } key={ index } >
                {
                    this.props.cols.map( col =>

                        <span className={ this.makeClassNameByPrefix( 'row-cell' ) } 
                              key={ col.prop }
                        >
                        { 
                            this.renderCell( object[ col.prop ] ) 
                        }
                        </span>
                    )
                }
                </div>
    }

    renderHeader() {
        
        let classNameOfHeader = this.makeClassNameByPrefix( 'header' );
        let classNameOfCell = this.makeClassNameByPrefix( 'header-cell' );
        let classNameOfCellOnSort = `${classNameOfCell} ${this.state.sortClassName}`;

        let columnDefs = this.props.cols;

        return  <div className={ classNameOfHeader }>
                {
                    columnDefs.map( ( colDef, index ) => {

                        let column = new Column( colDef );
                        let className = this.sortSettings.prop === colDef.prop 
                                      ? classNameOfCellOnSort
                                      : classNameOfCell;

                        return  <span key={ index } 
                                      className={ className }
                                      onClick={ () => this.handleHeaderCellClick( column.prop ) }
                                >
                                    { column.name }
                                </span>
                    } )
                }
                </div>
    }

    renderBody() {

        return  <div className={ this.makeClassNameByPrefix( 'body' ) }>
                {
                    this.state.items.map( ( item, index ) => this.renderRow( item, index ) )
                }
                </div>
    }

    renderFooter() {

        return  <div className={ this.makeClassNameByPrefix( 'footer' ) }></div>
    }

    render() {

        return  <div className={ this.props.classNamePrefix } >
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