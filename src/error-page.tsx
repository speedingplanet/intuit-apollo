import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let message = 'Default error';

  if (isRouteErrorResponse(error)) {
    message = error.status + ' ' + error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div id="error-page" className="position-absolute top-50 start-50 translate-middle text-center">
      <h1 className="mb-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}
