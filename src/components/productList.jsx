import React, { Component } from 'react';
import Phones from './phones';
import Laptops from './laptops';
export default class ProductList extends Component {
    title = 'BEST SMARTPHONES';
    setTitle = (title) => {
        return title;
    }
    title2 = 'BEST LAPTOPS'
    setTitle2 = (title2) => {
        return title2;
    }
    productPhones = [
        { id: 'sp_1', name: 'iphoneX', price: '30.000.000 VNĐ', screen: 'screen_1', backCamera: 'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
        { id: 'sp_2', name: 'Note 7', price: '20.000.000 VNĐ', screen: 'screen_2', backCamera: 'backCamera_2', frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
        { id: 'sp_3', name: 'Vivo', price: '10.000.000 VNĐ', screen: 'screen_3', backCamera: 'backCamera_3', frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
        { id: 'sp_4', name: 'Blacberry', price: '15.000.000 VNĐ', screen: 'screen_4', backCamera: 'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones,  tablets, and services originally designed' }
    ]

    productLaptops = [
        { id: 'sp_1', name: 'Macbook', price: '30.000.000 VNĐ', img: './img/lt_macbook.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
        { id: 'sp_2', name: 'Asus Rog', price: '20.000.000 VNĐ', img: './img/lt_rog.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
        { id: 'sp_3', name: 'HP Book', price: '10.000.000 VNĐ', img: './img/lt_hp.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
        { id: 'sp_4', name: 'Lenovo Thinkpad', price: '15.000.000 VNĐ', img: './img/lt_lenovo.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }
    ]
    renderPhones = () => {
        return this.productPhones.map((phoneItems, key) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={key}>
                    <Phones phoneItems={phoneItems} />
                </div>
            )
        })
    }
    renderLaptops = () => {
        return this.productLaptops.map((laptopItems, key) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={key}>
                    <Laptops laptopItems={laptopItems} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div id="smartphone" class="container-fluid bg-dark pt-5 pb-5">
                    <h1 className="text-center text-white font-weight-normal">{this.setTitle(this.title)}</h1>
                    <div className="row">
                        {this.renderPhones()}
                    </div>
                </div>
                <div id="laptop" class="container-fluid pt-5 pb-5">
                    <div>
                        <h1 className="text-center font-weight-normal">{this.setTitle2(this.title2)}</h1>
                        <div className="row">
                            {this.renderLaptops()}
                        </div>
                    </div >
                </div>
            </div>

        );
    }
}