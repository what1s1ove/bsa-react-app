import { AppPath } from 'common/enums/enums';
import { Header, Footer, Switch, Route } from 'components/common/common';
import Todos from 'components/todos/todos';
import TodoPreview from 'components/todo-preview/todo-preview';
import NotFound from 'components/not-found/not-found';
import database from 'database.json';

const { todos } = database;

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path={AppPath.ROOT} exact>
          <Todos todos={todos} />
        </Route>
        <Route path={AppPath.TODOS_$ID} exact>
          <TodoPreview todos={todos} />
        </Route>
        <Route path={AppPath.ANY} exact component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default App;
