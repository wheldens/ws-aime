import React, {Component} from 'react';
import Lister from './lister'
import Header from './header';

import cf from '../services/contentfulService'

class Page extends Component {

    state = {
        contentful: ''
    };

    async componentDidMount() {
        this.fetchContentful(this.props.match.params.category)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.category !== this.props.match.params.category) {
            this.fetchContentful(nextProps.match.params.category)
        }
    }

    fetchContentful = async (category) => {

        if(this.state.contentful[category]) return;

        const response = await cf.query({
            content_type: 'categoryPage',
            include: 5,
            'fields.slug': category,
        });
        this.setContentful(response)
    };

    setContentful = response => {
        const {category} =  this.props.match.params;
        const contentful = { [category]: response.items[0].fields, ...this.state.contentful};

        this.setState({contentful});
    };

    render() {
        const category = this.state.contentful[this.props.match.params.category];
        return (
             <React.Fragment>
                {category && <Header heading={category.heading} desc={category.categoryDescription} img={category.categoryImg.fields.file.url}/>}
                 {category && <Lister data={category.worksLister.fields} history={this.props.history} match={this.props.match} />}

                    <button className="btn btn-primary">haha</button>
             </React.Fragment>
        );
    }
}

export default Page;
