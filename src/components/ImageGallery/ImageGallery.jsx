import { Component } from "react";
import { getApiPixabay } from "components/api";

export class ImageGallery extends Component {
    state = {
        dataImg: [],
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        getApiPixabay(this.props.valueSearch, this.state.page).then(dataImg => this.setState({ dataImg }));
}

    render() {
        return (
            <ul>
                <li>
                    <img src="" alt="" />
                </li>
            </ul>
        );
    };
}