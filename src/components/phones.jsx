import React, { Component } from 'react';
import PhonePopupModal from './phonePopupModal';
import swal from 'sweetalert';

export default class Phones extends Component {
    state = {
        isShowDescription: true
    }


    toggleDescription = () => {
        this.setState({
            isShowDescription: !this.state.isShowDescription
        }, () => {
            console.log(this.state.isShowDescription);
        });
    }
    handleCart = () => {
        swal({
            title: "Are you sure?",
            text: "This product will be added to your cart for payment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("You added a product to your cart!", {
                icon: "success",
              });
            } else {
              swal("Dismissed!");
            }
          });
    }
    render() {
        let { id, img, name, desc, price, screen, backCamera, frontCamera } = this.props.phoneItems;
        return (
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img className="card-img-top" src={img} style={{ maxWidth: '100%', height: 250 }} />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">
                            {name}
                        </h4>
                        <h4 className="card-title text-center font-weight-normal">
                            {price}
                        </h4>
                        <p className={`cart-text ${this.state.isShowDescription ? 'd-block' : 'd-none'}`}>{desc}</p>
                        <button data-toggle="modal" data-target={`#${id}`} className="btn btn-primary">Detail</button>
                        <button className="btn btn-danger ml-2" onClick={this.handleCart}>Cart</button>
                        <button className="btn btn-outline-secondary ml-2" onClick={this.toggleDescription}>Toggle</button>
                    </div>
                </div>
                <PhonePopupModal id={id} price={price} name={name} screen={screen} backCamera={backCamera} frontCamera={frontCamera}/>
            </div>
        );
    }
}