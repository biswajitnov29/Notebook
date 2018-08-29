import React, { Component } from 'react';
import './note-panel.css';
import CKEditor from 'react-ckeditor-component';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import renderHTML from 'react-render-html';
import fire from '../fire';
import FontAwesome from 'react-fontawesome';

class NotePanel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedNote: this.props.note
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            selectedNote: nextProps.note
        })
    }

    changeToEditMode = (data) => {
        this.props.onEditModeChange(data);
    }

    render() {

        return (
            <div >
                <div className="card text-white bg-dark">
                    <div className="card-header">
                        {this.state.selectedNote.name}
                    </div>
                    <div className="card-body">
                        <div className="noteDescription">
                            {renderHTML(this.state.selectedNote.description)}
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                {/* <h2>
                    <a href={this.state.selectedNote.link} target="blank">{this.state.selectedNote.name}</a>

                    <a onClick={this.changeToEditMode}>
                        <FontAwesome name="edit" className="linkIcon" />
                    </a>
                </h2> */}

            </div>
        )
    }

}

export default NotePanel;