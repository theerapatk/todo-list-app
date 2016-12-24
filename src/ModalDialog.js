import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class ModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  submitModal() {
    this.setState({
      visible: false,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState();
  }

  renderInput(label, id) {
    return 'test';
  }

  render() {
    return (
      <Modal 
        visible={this.state.visible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}>
        <div>
          <h3>Add New Task</h3>
          <form>
            renderInput('Title', 'title');
            renderInput('Description', 'description');
            <input type="submit" id="date" value="OK" onClick={this.handleSubmit}/>
            <input type="submit" id="date" value="Cancel" onClick={() => this.closeModal()}/><br/>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
          </form>
        </div>
      </Modal>
    );
  }
}

module.exports = ModalDialog;
