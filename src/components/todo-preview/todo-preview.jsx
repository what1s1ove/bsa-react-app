import './styles.css';

const TodoPreview = () => (
  <section className="todo-preview">
    <h1 className="todo-preview__title">Todo: Learn CSS</h1>
    <dl className="todo-preview__list">
      <div className="todo-preview__item">
        <dt className="todo-preview__item-title">Description:</dt>
        <dd className="todo-preview__item-desc">Be the best with CSS 🟦</dd>
      </div>
      <div className="todo-preview__item">
        <dt className="todo-preview__item-title">Priority:</dt>
        <dd className="todo-preview__item-desc">normal</dd>
      </div>
      <div className="todo-preview__item">
        <dt className="todo-preview__item-title">Status:</dt>
        <dd className="todo-preview__item-desc">open</dd>
      </div>
    </dl>
  </section>
);

export default TodoPreview;
