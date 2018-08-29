import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import fire from '../fire';
import moment from 'moment';
import './note-list.css';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note
        }
    }

    onClickNode=(event)=>{
        this.props.onNodeSelect(this.state.note);
    }

    render() {
        return (
            <ListGroupItem tag="a" onClick={this.onClickNode}>{this.state.note.name}</ListGroupItem>
        )
    }
}

class NoteList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            notelist: this.props.notelist
        };
    }

    selectNode=(data)=>{
        this.props.onNodeSelect(data);
    }
    
    
    componentDidMount(){
        let notesRef = fire.database().ref('notes').orderByKey().limitToLast(100);
        
        notesRef.on("value", snapshot => {
            
            var notes=snapshot.val()
            var noteList=[];
            snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                let key = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();
                var note={
                    noteid:key,
                    name:childData.name,
                    noteDate:childData.noteDate ? (new moment(childData.noteDate)):(new moment()),
                    description:childData.description,
                    editFlag:false
                }
                noteList.push(note);
            });
            this.setState({
                notelist:noteList
            });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        },this);
    }
    

    render() {
        const props = this.props;
        // this.setState({notelist: this.props.notelist});
        
        return (
            <div className="leftSection">
            <ListGroup>
                {this.state.notelist.map((item, i) => <Note key={item.noteid} note={item} onNodeSelect={this.selectNode} />)}
            </ListGroup>
            </div>
            
        )
    }
};

export default NoteList;