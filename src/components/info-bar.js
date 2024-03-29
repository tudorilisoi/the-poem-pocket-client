import React from 'react';


export default class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

    }


    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="info-bar"
                onClick={() => this.setEditing(true)}>
                    <img className="profile_img_current" src="https://png.pngtree.com/svg/20160307/52c66f1f8b.png" alt="No Img" />
                </div>
            );
        }

        return (
            <div className="info-bar">
                <img onClick={() => this.setEditing(false)} className="profile_img_current clicked" src="https://png.pngtree.com/svg/20160307/52c66f1f8b.png" alt="No Img" />
                <ul className="info-bar-drop-down">
                    <li className="list-item profile">Profile</li>
                    <li className="list-item my-poem-pocket">Poem Pocket</li>
                    <li className="list-item connect">Connect</li>
                    {this.props.logOut}
                </ul>
            </div>
        );
    }
}