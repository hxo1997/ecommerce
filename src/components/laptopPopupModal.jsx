import React, { Component } from 'react'


export default class LaptopPopupModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id={this.props.laptopid}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.laptopname}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>price</td>
                                            <td>{this.props.laptopprice}</td>
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
