
import { dependencies } from "../../dependencies";
import { WithDependency } from "../../hoc/withDependencies";
import { TodoContainer } from "./TodoContainer";


export default  WithDependency({
    todoService:dependencies.TodoService,
    correctionService:dependencies.CorrectionService
  },TodoContainer);