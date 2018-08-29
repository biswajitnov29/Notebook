import React, { Component } from 'react';
import './note-editor.css';
import CKEditor from 'react-ckeditor-component';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import renderHTML from 'react-render-html';
import fire from '../fire';
import FontAwesome from 'react-fontawesome';

class NoteEditor extends React.Component {

    description = '';
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: this.props.note
        }

        // this.updateContent = this.updateContent.bind(this);
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            selectedNote: nextProps.note
        })
    }

    // updateContent = (newContent) => {
    //     var selectNoteUpdated = this.state.selectedNote;
    //     selectNoteUpdated.description = newContent;
    //     this.setState({
    //         selectedNote: newContent
    //     })
    // }

    onChange=(evt)=> {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState(prevState => ({
            selectedNote: {
                ...prevState.selectedNote,
                description:newContent
            }
        }));
    }

    onBlur=(evt)=> {
        var newContent = evt.editor.getData();
        this.setState(prevState => ({
            selectedNote: {
                ...prevState.selectedNote,
                description:newContent
            }
        }));
    }

    afterPaste = (evt)=> {
        var newContent = evt.editor.getData();
        this.setState(prevState => ({
            selectedNote: {
                ...prevState.selectedNote,
                description:newContent
            }
        }));
    }
    onHeaderChange = (event)=> {
        this.setState(prevState => ({
            selectedNote: {
                ...prevState.selectedNote,
                name:event.target.value,
            }
        }));
      }

      onLinkChange = (event)=>{
        this.setState(prevState => ({
            selectedNote: {
                ...prevState.selectedNote,
                link: event.target.value,
            }
        }))
      }

    handleDateChange = (evt)=>{
        var nDate=evt.get();
        this.setState(prevState => ({
            selectedNote: {
                ...prevState.selectedNote,
                noteDate:nDate,
            }
        }));
    }

    saveNote=(e)=>{
        e.preventDefault();
        var updateNote={
            //noteid:this.state.selectedNote.noteid,
            name:this.state.selectedNote.name,
            description:this.state.selectedNote.description,
            link:this.state.selectedNote.link,
            noteDate:this.state.selectedNote.noteDate.toDate().toString()
        }
        console.log(`Note Id ${this.state.selectedNote.noteid}`);
        let ref =fire.database().ref('notes');
        let child=ref.child(this.state.selectedNote.noteid);
        
        child.update(updateNote,(response)=>{
            debugger;
        })
    //     .then(() => ref.once('value'))
    // .then(snapshot => snapshot.val())
    // .catch(error => ({
    //   errorCode: error.code,
    //   errorMessage: error.message
    // }));
        // fire.database().ref('notes').push( this.state.selectedNote );
    }

    render() {
        this.description = this.state.selectedNote ? this.state.selectedNote.description : '';
        return (
            <div >
                {this.state.selectedNote != null &&
                    
                    <form>
                        <div className="alert alert-dark text-right" role="alert">
                        <button type="button" className="btn btn-info" onClick={this.saveNote}>Save Note</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput" className="formlabel">Note Header</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                placeholder="Example input"
                                value={this.state.selectedNote.name} 
                                onChange={this.onHeaderChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2" className="formlabel">Reminder Date Time</label>
                            <DatePicker className="form-control"
                                selected={this.state.selectedNote.noteDate}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="LLL"
                                timeCaption="time" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput" className="formlabel">Note Link</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                placeholder="Example input"
                                value={this.state.selectedNote.link} 
                                onChange={this.onLinkChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2" className="formlabel">
                            <span>Note Description</span>
                            <FontAwesome name="edit" className="editIcon" /> 
                            </label>
                            <div className="noteDescription">
                            {renderHTML(this.description)}
                            </div>
                            
                            {/* <CKEditor activeClass="editor" content={this.description}
                                events={{
                                    "blur": this.onBlur,
                                    "afterPaste": this.afterPaste,
                                    "change": this.onChange
                                }} /> */}
                        </div>
                    </form>
                }
            </div>
        )
    }


}

export default NoteEditor;