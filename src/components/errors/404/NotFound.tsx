import './NotFound.css';

const NotFound: React.FC = (): React.ReactElement => {
  return (
    <div className="error-container">
      <h1 className="error-h1">! 4 0 4 !</h1>
      <p className="error-text">
        Oops! We can't find the page you're looking for.
      </p>
    </div>
  );
};

export default NotFound;
