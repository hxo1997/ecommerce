import React, { Component } from 'react'

export default class PhonePopupModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id={this.props.id}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.name}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>price</td>
                                            <td>{this.props.price}</td>
                                        </tr>
                                        <tr>
                                            <td>screen</td>
                                            <td>{this.props.screen}</td>
                                        </tr>
                                        <tr>
                                            <td>front cammera</td>
                                            <td>{this.props.frontCamera}</td>
                                        </tr>
                                        <tr>
                                            <td>back cammera</td>
                                            <td>{this.props.backCamera}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
