import React from 'react';
 
class MenuInput extends React.Component {
 
    constructor(props) {
    super(props);
    
    // inisialisasi state
    this.state = {
        title: '',
        desc: '',
        price: '',
        image: '',
    }
    
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    this.onPriceChangeEventHandler = this.onPriceChangeEventHandler.bind(this);
    this.onImageUrlChangeEventHandler = this.onImageUrlChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
 
    onNameChangeEventHandler(event) {
    this.setState(() => {
        return {
            title: event.target.value,
        }
    });
    }
    
 onDescChangeEventHandler(event) {
    this.setState(() => {
        return {
            desc: event.target.value,
        }
    });
}
    onPriceChangeEventHandler(event) {
    this.setState(() => {
        return {
            price: event.target.value,
        }
    });
    }

    onImageUrlChangeEventHandler(event) {
    this.setState(() => {
        return {
            image: event.target.value,
        }
    });
    }

    
    
    onSubmitEventHandler(event) {
    event.preventDefault();
        this.props.addMenu(this.state);

        this.setState({
        title: '',
        desc: '',
        price: '',
        image: '',
    });
    }

    render() {
        return (
            <form className='menu-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Nama" value={this.state.title} onChange={this.onNameChangeEventHandler} />
                <input type="text" placeholder="Dekripsi" value={this.state.desc} onChange={this.onDescChangeEventHandler} />
                <input type="text" placeholder="Price" value={this.state.price} onChange={this.onPriceChangeEventHandler} />
                <input type="text" placeholder="Image Url" value={this.state.image} onChange={this.onImageUrlChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}
 
export default MenuInput;