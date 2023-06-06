import { useQuery } from "@apollo/client";
import Loader from "../ui/02-molecules/loader";
import ImagesGrid from "../ui/03-organisms/images-grid";
import UserSubmissions from "../../graphql/user-submissions.graphql";
import SubmissionContext from "../../context/submission";
import { useContext } from "react";

export default function ImagesGridWrapper() {
  // Language context.
  const submContext = useContext(SubmissionContext);

  const { loading, error, data } = useQuery(UserSubmissions, {
    onCompleted(event) {
      if (!error) {
        submContext.setItems(event?.nodeQuery?.entities)
      }
    }
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ImagesGrid data={data ? data?.nodeQuery?.entities : []} />
      )}
    </>
  );
}
