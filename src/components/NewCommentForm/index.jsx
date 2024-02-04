import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

NewCommentForm.propTypes = {
  addComment: PropTypes.func,
};

export default function NewCommentForm({ addComment }) {
  const [commentText, setCommentText] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    addComment(email, commentText);
    setCommentText("");
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="comment">Comentário</label>
          <input
            type="text"
            name="comment"
            id="comment"
            value={commentText}
            onChange={(ev) => setCommentText(ev.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Comentário</button>
      </form>
      <hr />
    </div>
  );
}
