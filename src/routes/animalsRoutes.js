import { createStackNavigator } from "react-navigation";

import Animals from "../pages/Animals";
import AddAnimal from "../pages/AddAnimal";

const AnimalsRoutes = createStackNavigator(
  {
    Animals,
    AddAnimal
  },
  {
    initialRouteName: "Animals",
    // initialRouteName: "AddAnimal",
    headerMode: "none"
  }
);

export default AnimalsRoutes;
