import { Action } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { compose } from "redux";
import { createStore } from "redux";
import { Middleware } from "redux";
import { Reducer } from "redux";
import { ReducersMapObject } from "redux";
import { Store as IStore } from "redux";
import { StoreEnhancer } from "redux";
import { Unsubscribe } from "redux";
import { IAppState } from "../aggregates/index.d";
class Store {
  private compose: Function;
  private enhancer!: StoreEnhancer;
  private middlewares!: StoreEnhancer;
  private reducer!: Reducer;
  public store!: IStore<{}>;

  constructor() {
    this.compose = compose;
  }

  combineReducers(reducers: ReducersMapObject): Reducer {
    return combineReducers(reducers);
  }

  composeEnhancers(...enhancers: StoreEnhancer[]): StoreEnhancer {
    return this.compose(...enhancers);
  }

  composeMiddlewares(middlewares: Middleware[]): StoreEnhancer {
    return applyMiddleware(...middlewares);
  }

  create(
    reducer: Reducer,
    middlewares?: Middleware[],
    enhancer?: StoreEnhancer
  ): IStore {
    const enhancers = [];

    this.reducer = reducer;

    if (middlewares !== undefined) {
      this.middlewares = this.composeMiddlewares(middlewares);
      enhancers.push(this.middlewares);
    }

    if (enhancer !== undefined) {
      enhancers.push(enhancer);
    }

    this.enhancer = this.composeEnhancers(...enhancers);

    this.store = createStore(this.reducer, this.enhancer);

    return this.store;
  }

  createReducer(
    initialState: object,
    ...actionsMap: ReducersMapObject[]
  ): Reducer {
    return (state = initialState, action: Action): object => {
      const reducers = Object.assign({}, ...actionsMap);

      const reducer = reducers[action.type];

      if (reducer === undefined) {
        return state;
      }

      return reducer(state, action);
    };
  }

  dispatch<A extends Action>(action: A): A {
    return this.store.dispatch(action);
  }

  getState(): IAppState {
    return this.store.getState() as IAppState;
  }

  replaceReducer(nextReducer: Reducer<{}>): void {
    this.store.replaceReducer(nextReducer);
  }

  replaceReducers(nextReducers: ReducersMapObject): void {
    this.replaceReducer(this.combineReducers(nextReducers));
  }

  subscribe(listener: () => void): Unsubscribe {
    return this.store.subscribe(listener);
  }
}

export default new Store();
