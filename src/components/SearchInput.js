import React from 'react';


// we have to use class because we're going 
// to use STATE at some point

class SearchInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { entry: '' }
        // 1 way: this.onFormSumbit = this.onFormSumbit.bind(this)
    }
    onInputChange(event) {
        console.log(event.target.value)
    }

    onFormSumbit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
        // console.log(this.state.entry)
    }

    // onFormSumbit(event) {
    //     event.preventDefault()
    //     console.log(this.state.entry)
    // }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSumbit} className='ui form' action="">
                    <div className='ui massive icon input' >
                        <input type="text" placeholder='search...'
                            onChange={(event) => this.setState({ entry: event.target.value.toUpperCase() })}
                            value={this.state.entry} />
                        <i className='search icon'></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;