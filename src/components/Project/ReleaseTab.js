import React, { Component } from "react";
import Comment from "../Shared/Comment/Comment";
import MakeContextConsumer from "../Auth/MakeContextConsumer";

class ReleaseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releaseVideo: null
    };
  }

  componentDidMount() {
    this.fetchReleaseVideo();
  }

  fetchReleaseVideo() {
    this.props
      .authAxios({
        methode: "get",
        url: `/api/v1/projects/${this.props.projectId}/release_video`
      })
      .then(response => {
        console.log(response.data.data);
        this.setState({
          releaseVideo: response.data.data
        });
      });
  }

  renderView() {
    return (
      <React.Fragment>
        <div className="release-video">
          <span />
          {this.renderVideoPlayer()}
        </div>
        <div className="release-vidoe-info">
          <ul>
            <li>Life & Story of Tim</li>
            <li>
              <span>Size</span>6 Mb
            </li>
            <li>
              <span>Upload Date</span>28 May 2018
            </li>
            <li>
              <span>Release Date</span>29 May 2018
            </li>
            <li>
              <span>Type</span>Final
            </li>
          </ul>
        </div>
        <div className="release-button">
          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
            <i className="zmdi zmdi-download" />
            Download
          </button>
        </div>
        <Comment owner="resources" ownerId={this.state.releaseVideo.id} />
      </React.Fragment>
    );
  }

  renderVideoPlayer() {
    return (
      <img src={require("../../images/video-thumb-lg.png")} alt={"Terry"} />
    );
  }

  render() {
    return (
      <div>
        <div className="tab-pane  " id="release" role="tab">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap wrapper-title position-relative">
                <h3>Release</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="box-wrapper box-with-padding bg-white release-wrapper">
                <div className="release-content">
                  <h3>Congralulations!!!</h3>
                  <p>
                    If you would like to leave comments about your experience
                    with Life&Story, please use the comment section below.
                  </p>
                </div>
                <div className="box-with-padding bg-white release-inner-wrapper">
                  {this.state.releaseVideo ? (
                    this.renderView()
                  ) : (
                    <h5>No Release Video</h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MakeContextConsumer(ReleaseTab);
