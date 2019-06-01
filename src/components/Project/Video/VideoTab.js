import React, { Component } from "react";
import VideoCard from "./VideoCard";
import MakeContextConsumer from "../../Auth/MakeContextConsumer";
import VideoView from "./VideoView";

class VideoTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [1, 2],
      modal: false
    };
    this.renderVideos = this.renderVideos.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    // this.getProjectVideos();
  }

  getProjectVideos() {
    this.props
      .authAxios({
        method: "get",
        url: `/api/v1/projects/${this.props.projectId}/videos`
      })
      .then(response => {
        console.log(response);
        this.setState({
          videoList: response.data.data
        });
        return response.data.data;
      });
  }

  renderVideos() {
    return this.state.videoList.map(video => {
      return <VideoCard video={video} key={video} toggle={this.toggle} />;
    });
  }

  render() {
    return (
      <div>
        <div className="tab-pane  " id="video" role="tab">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap wrapper-title position-relative">
                <h3>Videos</h3>
              </div>
            </div>
          </div>
          <div className="row video-gallery">{this.renderVideos()}</div>
        </div>
        <VideoView
          modal={this.state.modal}
          toggle={this.toggle}
          currentVideo={this.currentVideo}
        />
      </div>
    );
  }
}
export default MakeContextConsumer(VideoTab);
