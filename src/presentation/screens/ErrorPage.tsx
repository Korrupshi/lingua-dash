import { Button } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  let navigate = useNavigate();

  return (
    <div className="flex flex-col w-screen h-screen text-center justify-center items-center gap-4">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        variant="contained"
        className="w-fit"
        onClick={() => navigate("/")}
      >
        Return Home
      </Button>
    </div>
  );
}

interface Error {
  statusText: string;
  message: string | undefined;
}
