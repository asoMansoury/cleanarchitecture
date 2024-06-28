// This is our container for registering our services.
// As a sample, we have registered two services into our container.
import { AxiosHttpClientAdapter } from './adapters/AxiosHttpClientAdapter';
import { HttpClientAdapter } from './adapters/HttpClientAdapter';
import { store } from './redux';
import { AzurePortalService } from './services/AzureProtalService';
import { CorrectionService } from './services/Correction.service';
import { TodoService } from './services/Todo.service';

class DependencyContainer {
  private _dependencies = {};

  /**
   * Add a new service to the container.
   * @param {Symbol} key - The key for the service.
   * @param {T} dependency - The service instance that is being added.
   * @example
   * container.add<TodoService>(dependencies.TodoService, todoService);
   * @returns void
   */
  add<T>(key: symbol, dependency: T) {
    Object.defineProperty(this._dependencies, key, {
      value: dependency,
    });
  }

  /**
   * Get a service from the container.
   * @param {Symbol} key - The key for the service.
   * @returns {T} The service instance.
   */
  get<T>(key: symbol): T {
    return Object.getOwnPropertyDescriptor(this._dependencies, key)?.value;
  }
}

// In this sample, we want to register two services into our container.
// Whenever you need to register your services into the container, use code similar to the examples below.

const httpAdapter = new HttpClientAdapter({ baseUrl: process.env.REACT_APP_API_URL!.toString() },store);
const todoService = new TodoService(httpAdapter);


const httpCorrectionAdapter = new AxiosHttpClientAdapter({ baseUrl: "http://localhost:5241" },store);
const correctionService = new CorrectionService(httpCorrectionAdapter);

const azurePortalService = new AzurePortalService({baseUrl:"https://graph.microsoft.com"});
const dependencies = {
  TodoService: Symbol('TodoService'),
  CorrectionService:Symbol('CorrectionService'),
  AzurePortalService:Symbol('AzurePortalService')
};

const container = new DependencyContainer();
container.add<TodoService>(dependencies.TodoService, todoService);
container.add<CorrectionService>(dependencies.CorrectionService,correctionService);
container.add<AzurePortalService>(dependencies.AzurePortalService,azurePortalService);

export { container, dependencies };