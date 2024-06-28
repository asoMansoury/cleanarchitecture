import { dependencies } from "../../dependencies";
import { WithDependency } from "../../hoc/withDependencies";
import { StatsContainer } from "./StatsContainer";

export default WithDependency({
  todoService:dependencies.TodoService,
},StatsContainer)