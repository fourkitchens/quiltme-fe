import { useQuery } from "@apollo/client";
import Loader from "../ui/02-molecules/loader";
import ImagesGrid from "../ui/03-organisms/images-grid";
import UserSubmissions from "../../graphql/user-submissions.graphql";

export default function ImagesGridWrapper() {
  const { loading, data } = useQuery(UserSubmissions);

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
