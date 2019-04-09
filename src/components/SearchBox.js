import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import URLService from '../services/URLService';

class SearchBox extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.updateQueryText = this.updateQueryText.bind(this);
    }

    componentDidMount() {
        window.addEventListener("hashchange", () => {
            this.updateQueryText();
        }, false);
        this.updateQueryText();
    }

    updateQueryText() {
        const params = URLService.getCurrentParams();
        this.setState({text: params.filter || ""});
    }

    handleTextChange(event) {
        if(event && event.target) {
            this.setState({text:event.target.value});
        }
    }

    handleButtonPress(event) {
        const newHash = URLService.addParametersToURLHash(location.hash, {
            page: 1,
            filter: this.state.text
        });
        location.hash = newHash;
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="col-9">
                                <input type="text" value={this.state.text} onChange={this.handleTextChange} className="form-control" placeholder="Query"></input>
                            </div>
                            <div className="col">
                                <button onClick={this.handleButtonPress} type="Search" className="btn btn-primary mb-2">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBox
