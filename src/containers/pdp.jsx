import React, {Component} from 'react';
import cf from "../services/contentfulService";
import VideoPlayer from "../components/videoPlayer";

class Pdp extends Component {

    state = {
        contentful: '',
        mainImg: ''
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


    setMainImg = (img) => {
        const workProp = this.props.match.params.work;
        const contentful = {...this.state.contentful};
        contentful[workProp].image = img;
        this.setState({contentful})
    };

    goBack =()=> {
        this.props.history.push('/' + this.props.match.params.category);
    };


    render() {
        const work = this.state.contentful[this.props.match.params.work];
        return (
            <React.Fragment>
                {work  && <div className="container mt-4">
                    <h2>{work.titleWork}</h2>
                    <h4>{work.location} {work.date}</h4>
                    <p>{work.shortDescription}</p>

                    <div className="row">
                        <main className="col-6">
                            <img
                                width="100%"
                                src={work.image.fields.file.url}
                                alt={work.image.fields.title}/>

                            <button onClick={this.goBack} className="btn mt-4">back</button>
                        </main>
                        <aside className="col-6">

                            { work.videoId && <VideoPlayer videoId={work.videoId}/>}

                            {work.images && work.images.map(img =>
                                <img
                                    className="m-1"
                                    key={img.fields.title}
                                    onClick={() => this.setMainImg(img)}
                                    width="30%"
                                    src={img.fields.file.url}
                                    alt={img.fields.title}
                                />
                            )}

                        </aside>
                    </div>
                </div>}



            </React.Fragment>

        );
    }
}

Pdp.propTypes = {};

export default Pdp;
