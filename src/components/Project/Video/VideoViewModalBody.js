import React from "react";

const VideoViewModalBody = props => {
  return (
    <div class="row">
      <div class="col-md-7 col-sm-12 popup-border-right">
        <h3>Life & Story of Tim Edwards V1</h3>
        <div class="video-popup-content">
          <div class="video-pane">
            <video width="100%" height="400" controls>
              <source src="videos/vd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h4>Instructions on how to make change requests</h4>
          <p>Morbi malesuada Birthday odio, .</p>
        </div>
      </div>
      <div class="col-md-5 col-sm-12 padding-left-0">
        <div class="video-popup-right">
          <h4>Comments</h4>
          <div class="popup-overflow">
            <ul class="popup-comments-wrapper">
              <li>
                <span class="content-close">
                  <i class="fos-close-button" />
                </span>
                <div class="comments-title">
                  <img src="images/avatar-01.jpg" alt="Terry Crowley" />
                  <span>Terry Crowley</span>
                </div>
                <div class="comments-top-info">
                  <span>Admin</span>
                  <span>14:25</span>
                  <span>10 Aug 18</span>
                </div>
                <p>
                  Sit amet ornare odio, sit amet ultrices Mark Taylor. Donec
                  quis maximus leo.
                </p>
                <div class="comments-footer">
                  <span>
                    <i class="fos-sm comment-reply-icon" />
                    Reply
                  </span>
                  <span>Selection 1:15</span>
                </div>
              </li>
              <li>
                <span class="content-close">
                  <i class="fos-close-button" />
                </span>
                <div class="comments-title">
                  <img src="images/avatar-02.jpg" alt="Terry Crowley" />
                  <span>Sean Marry</span>
                </div>
                <div class="comments-top-info">
                  <span>Client</span>
                  <span>14:25</span>
                  <span>10 Aug 18</span>
                </div>
                <p>
                  Sit amet ornare odio, sit amet ultrices Mark Taylor. Donec
                  quis maximus leo.
                </p>
                <div class="comments-footer">
                  <span>
                    <i class="fos-sm comment-reply-icon" />
                    Reply
                  </span>
                  <span>Selection 1:15</span>
                </div>
              </li>
              <li>
                <span class="content-close">
                  <i class="fos-close-button" />
                </span>
                <div class="comments-title">
                  <img src="images/avatar-01.jpg" alt="Terry Crowley" />
                  <span>Terry Crowley</span>
                </div>
                <div class="comments-top-info">
                  <span>Admin</span>
                  <span>14:25</span>
                  <span>10 Aug 18</span>
                </div>
                <p>
                  Sit amet ornare odio, sit amet ultrices Mark Taylor. Donec
                  quis maximus leo.
                </p>
                <div class="comments-footer">
                  <span>
                    <i class="fos-sm comment-reply-icon" />
                    Reply
                  </span>
                  <span>Selection 1:15</span>
                </div>
              </li>
              <li>
                <span class="content-close">
                  <i class="fos-close-button" />
                </span>
                <div class="comments-title">
                  <img src="images/avatar-01.jpg" alt="Terry Crowley" />
                  <span>Terry Crowley</span>
                </div>
                <div class="comments-top-info">
                  <span>Admin</span>
                  <span>14:25</span>
                  <span>10 Aug 18</span>
                </div>
                <p>
                  Sit amet ornare odio, sit amet ultrices Mark Taylor. Donec
                  quis maximus leo.
                </p>
                <div class="comments-footer">
                  <span>
                    <i class="fos-sm comment-reply-icon" />
                    Reply
                  </span>
                  <span>Selection 1:15</span>
                </div>
              </li>
              <li>
                <span class="content-close">
                  <i class="fos-close-button" />
                </span>
                <div class="comments-title">
                  <img src="images/avatar-01.jpg" alt="Terry Crowley" />
                  <span>Terry Crowley</span>
                </div>
                <div class="comments-top-info">
                  <span>Admin</span>
                  <span>14:25</span>
                  <span>10 Aug 18</span>
                </div>
                <p>
                  Sit amet ornare odio, sit amet ultrices Mark Taylor. Donec
                  quis maximus leo.
                </p>
                <div class="comments-footer">
                  <span>
                    <i class="fos-sm comment-reply-icon" />
                    Reply
                  </span>
                  <span>Selection 1:15</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="comment-fld video-comment-fld">
            <input type="text" name="comments" placeholder="Add a comments" />
            <button type="button" class="btn btn-outline-secondary">
              <i class="fa fa-location-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoViewModalBody;
