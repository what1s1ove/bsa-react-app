import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import { useMemo } from 'hooks/hooks';

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => ({
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...params,
      },
      match,
      location,
      history,
    }), [params, match, location, history]);
}

export { useRouter };
