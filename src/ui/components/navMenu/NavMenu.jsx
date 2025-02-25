import { useQuery } from "react-query";
import { getUsers } from "../../../async/services/userServices";
import getEnvVariables from "../../../config/configEnvs";
import { List } from "./list/List";
const NavMenu = () => {
  const { HOST, SERVICE } = getEnvVariables();
  const endpoint = `${HOST}${SERVICE}/users`;
  const { data, isLoading, isError } = useQuery("getUsers", () =>
    getUsers(endpoint)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading users...</div>;
  }

  return <List data={data} />;
};


export default NavMenu;
