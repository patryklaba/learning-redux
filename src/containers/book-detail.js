import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeBook } from '../reducers/active_book_reducer';

class BookDetail extends Component {
    render() {
        
        if(this.props.book === null) {
          return <div>Select a book to see its details</div>;
        }
        return (
            <div>
              <div>Title: {this.props.book.title}</div>
              <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}





function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}



export default connect(mapStateToProps)(BookDetail);