import React from "react";

const VideoCard = props => {
  const { toggle } = props;
  return (
    <div className="col-lg-3 col-md-3 col-sm-6">
      <div className="video-item">
        <span className="video-top-line" />
        <div className="video-thumb">
          <img src={require("../../../images/video-thumb.png")} />
          <span />
        </div>
        <h5>
          Life & Story of Tim Edwards V1
          <span>
            TYPE<strong> Draft</strong>
          </span>
        </h5>
        <div className="vidoe-info">
          <div className="video-info-left">
            <span>
              SIZE<strong> 6 Mb</strong>
            </span>
          </div>
          <div className="video-info-right">
            <span>
              UPLOAD DATE<strong> 28 May 2018</strong>
            </span>
          </div>
        </div>
        <div className="video-button">
          <button
            className="au-btn au-btn-icon au-btn--pink btn-lg"
            onClick={toggle}
          >
            <i className="zmdi zmdi-eye" />
            View
          </button>
        </div>
        <div className="video-comments">
          <label>
            <span>28</span> Comments
          </label>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
