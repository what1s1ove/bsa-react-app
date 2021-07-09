import { getLastPath } from 'helpers/helpers';
import { AppPath } from 'common/enums/enums';
import { Header, Footer } from 'components/common/common';
import Todos from 'components/todos/todos';
import TodoPreview from 'components/todo-preview/todo-preview';
import NotFound from 'components/not-found/not-found';
import database from 'database.json';

const { todos } = database;

const App = () => {
  const { pathname } = window.location;

  const getScreen = (path) => {
    const id = getLastPath(path);

    switch (path) {
      case AppPath.ROOT: {
        return <Todos todos={todos} />;
      }
      case `${AppPath.TODOS}/${id}`: {
        return <TodoPreview todos={todos} id={id} />;
      }
      default: {
        return <NotFound />;
      }
    }
  };
  return (
    <>
      <Header />
      <main>{getScreen(pathname)}</main>
      <Footer />
    </>
  );
};

export default App;
