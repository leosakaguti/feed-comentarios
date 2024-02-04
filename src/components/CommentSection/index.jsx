import { useState } from "react";
import NewCommentForm from "../NewCommentForm";
import Comment from "../Comment";
import "./styles.css";

export default function CommentSection() {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("feed-comentarios");

    if (!storedComments) return [];

    return JSON.parse(storedComments);
  });

  function obterDataAtualFormatada() {
    // Obtém a data atual
    let dataAtual = new Date();

    // Extrai os componentes da data
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();

    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    // Formata a data como DD/MM/YYYY
    let dataFormatada = `${dia.toString().padStart(2, "0")}/${mes
      .toString()
      .padStart(2, "0")}/${ano} ${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

    return dataFormatada;
  }

  const addComment = (email, commentText) => {
    const id = Math.floor(Math.random() * 1000000);
    const commentDate = obterDataAtualFormatada();
    const newComment = { id, email, commentText, commentDate };

    setComments((state) => {
      const newState = [...state, newComment];
      localStorage.setItem("feed-comentarios", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="comment-section">
      <h2 className="title">Seção de Comentários</h2>
      <NewCommentForm addComment={addComment} />
      <div className="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              email={comment.email}
              commentDate={comment.commentDate}
              commentText={comment.commentText}
            />
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </div>
    </div>
  );
}
