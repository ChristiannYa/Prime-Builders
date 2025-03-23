import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="bg-neutral-100 flexcol-center wh-screen gap-y-2">
      404 - Not Found
      <Link
        className="bg-neutral-200 hover:bg-neutral-300 rounded-lg p-2"
        to="/"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
