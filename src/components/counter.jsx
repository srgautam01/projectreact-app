import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        minValue: 0,
        maxValue: 20
    };

    constructor(props) {
        super(props);

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.handleMinValueChange = this.handleMinValueChange.bind(this)
        this.handleMaxValueChange = this.handleMaxValueChange.bind(this)
    }

    handleMinValueChange(e) {
        // console.log("something is changing", e)
        this.setState({
            minValue: e.target.value,
        });
    }

    handleMaxValueChange(e) {
        // console.log("something is changing", e)
        this.setState({
            maxValue: e.target.value,
        });
    }

    render() {
        return (
            <div className="d-flex" style={{
                minHeight: "100vh"
            }}>
                <div className="align-self-center bg-dark mx-auto">
                    <div className="row m-2">
                        <div className="col d-flex justify-content-center">
                            <h1>
                                <span className="badge badge-primary">{this.formatCount()}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col d-flex justify-content-center">
                            <button
                                onClick={this.decrementCount}
                                className="btn btn-secondary btn-sm"><h3>-</h3>
                            </button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button
                                onClick={this.incrementCount}
                                className="btn btn-secondary btn-sm">
                                <h2>+</h2>
                            </button>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col d-flex justify-content-center">
                            <label className="form-label text-light">
                                <h4>Min value</h4>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.minValue}
                                    onChange={this.handleMinValueChange}/>

                            </label>
                        </div>
                        <div className="col d-flex justify-content-center">

                            <label className="form-label text-light">
                                <h4>Max value</h4>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.maxValue}
                                    onChange={this.handleMaxValueChange}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    incrementCount() {
        const {count} = this.state;
        if (count < this.state.maxValue) {
            this.setState({
                count: count + 1
            })
        } else {

        }

    }

    decrementCount() {
        let {count} = this.state;

        if (count > this.state.minValue) {
            count = count - 1;
        }

        this.setState({
            count: count
        })
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;