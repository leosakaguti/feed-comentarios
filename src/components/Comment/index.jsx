import PropTypes from "prop-types";
import "./styles.css";

Comment.propTypes = {
  email: PropTypes.string,
  commentDate: PropTypes.string,
  commentText: PropTypes.string,
};

export default function Comment({ email, commentDate, commentText }) {
  return (
    <div className="comment">
      <b>{email}</b>
      <p>Em {commentDate}</p>
      <p>{commentText}</p>
    </div>
  );
}
