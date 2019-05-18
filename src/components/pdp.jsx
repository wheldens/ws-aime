import React, {Component} from 'react';
import cf from "../services/contentfulService";

class Pdp extends Component {

    state = {
        contentful: ''
    };

    async componentDidMount() {
        this.fetchContentful(this.props.match.params.work)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.work !== this.props.match.params.work) {
            this.fetchContentful(nextProps.match.params.work)
        }
    }

    fetchContentful = async (work) => {
        if (this.state.contentful[work]) return;

        const response = await cf.query({
            content_type: 'work',
            include: 5,
            'fields.slug': work
        });
        this.setContentful(response)
    };

    setContentful = response => {
        const {work} = this.props.match.params;
        const contentful = {[work]: response.items[0].fields, ...this.state.contentful};
        //
        this.setState({contentful});
    };


    render() {
        const work = this.state.contentful[this.props.match.params.work];
        console.log('w: ', work);

        return (
            <div>
                {work && <div className="container"><h1>{work.title   }</h1></div>}
            </div>

        );
    }
}

Pdp.propTypes = {};

export default Pdp;
