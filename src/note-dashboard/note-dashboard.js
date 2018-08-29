import React from 'react';
import NoteList from '../note-list/note-list';
import NoteEditor from '../note-editor/note-editor';

import NotePanel from '../note-panel/note-panel';
import './note-dashboard.css';



export default class NoteDashboard extends React.Component {

    
    selectedNote;
    constructor(props){
        super(props);

        this.state={
            notelist:[],
            selectedNote:null
        }
    }

    changeEditMode= ()=>{
        this.state.selectedNote.editFlag=!this.state.selectedNote.editFlag;
    }
    selectNode =(data)=>{
        this.setState({selectedNote : data });
    }

    rowStyle = {
        margin: '0px'
    };
    colStyle = {
        padding: '0px',
        paddingRight:'10px'
    };

    render() {

        return (

            <div className="row" style={this.rowStyle}>
                <div className="col-3 leftNavigation">
                    <NoteList notelist={this.state.notelist} onNodeSelect={this.selectNode}></NoteList>
                </div>
                <div className="col-9" style={this.colStyle}>
                {this.state.selectedNote ? (
                    <div className="rightSection">
                        {this.state.selectedNote.editFlag ? (
                            <NoteEditor note={this.state.selectedNote} onSaveData={this.changeEditMode}/>
                        ) : (
                            <NotePanel note={this.state.selectedNote} onEditModeChange={this.changeEditMode}/>
                        )}
                    </div>
                ) : (
                    <div className="rightSection"></div>
                )}
                
                    
                </div>
            </div>
        )

    }

}