import GLocalStorage from "../Global/GLocalStorage";

const AuthHelper = {
  getUserRoleFromAuth: () => {
    var role = "";
    if (GLocalStorage.IsExists("zaaruuworkbench")) {
      const data = JSON.parse(GLocalStorage.Get("zaaruuworkbench"));
      if (data) {
        role = data[0].role;
      }
    }
    return role;
  },
};

export default AuthHelper;
