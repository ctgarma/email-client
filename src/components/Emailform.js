import React, { Component } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Message from './Message';
import { sendEmail } from '../api/api'

class EmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MessageShow: false,
            MessageTitle: '',
            MessageDesc: ''
        };
        this.handleSend = this.handleSend.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCancelMessage = this.handleCancelMessage.bind(this);
    }

    handleSend(e) {
        e.preventDefault();
        var data = {
            from: e.target.elements.from.value,
            to: e.target.elements.to.value,
            subject: e.target.elements.subject.value,
            body: e.target.elements.body.value
        }

        sendEmail(data).then((res) => {
            this.setState({ MessageShow: true, MessageTitle: 'Success', MessageDesc: 'E-mail sent' });
            this.myFormRef.reset();

        }).catch((e) => {
            this.setState({ MessageShow: true, MessageTitle: 'Error', MessageDesc: 'E-mail not sent' });
        });
    }

    handleCancel(e) {
        this.myFormRef.reset();
    }

    handleCancelMessage() {
        this.setState({ MessageShow: false });
    }

    render() {

        const tooltip = (
            <Tooltip id="tooltip">
                <strong>Supports multiple emails separated by a comma)</strong>
            </Tooltip>
        );

        return (
            <div>
                <form onSubmit={this.handleSend} ref={(el) => this.myFormRef = el}>
                    <div className="form-group">
                        <label htmlFor="from">from</label>
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <input name='from' className="form-control" id="from" required="required" type="email" multiple pattern="^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},*[\W]*)+$" />
                        </OverlayTrigger>
                    </div>
                    <div className="form-group">
                        <label htmlFor="to">to</label>
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <input name='to' className="form-control" id="to" required="required" type="email" multiple pattern="^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},*[\W]*)+$" />
                        </OverlayTrigger>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cc">cc</label>
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <input name='cc' className="form-control" id="cc" type="email" multiple pattern="^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},*[\W]*)+$" />
                        </OverlayTrigger>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bcc">bcc</label>
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <input name='bcc' className="form-control" id="bcc" type="email" multiple pattern="^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},*[\W]*)+$" />
                        </OverlayTrigger>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">subject</label>
                        <input name='subject' className="form-control" id="subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">message</label>
                        <textarea name='body' className="form-control" placeholder="" id="body" rows="11" cols="50" />
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary" value="Submit">Send</button>
                        <Button onClick={this.handleCancel}>Cancel</Button>
                    </div>
                </form>
                <Message show={this.state.MessageShow} onHide={this.handleCancelMessage} title={this.state.MessageTitle} message={this.state.MessageDesc} />
            </div>
        );
    }

}

export default EmailForm;