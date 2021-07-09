import { DataPlaceholder } from '../../common/enums/enums';
import { Placeholder } from '../common/common';
import './style.css';

const NotFound = () => (
  <section className="page-notfound">
    <h2 className="sr-only">Page not found</h2>
    <Placeholder text={DataPlaceholder.PAGE_NOT_FOUND} />
  </section>
);

export default NotFound;
