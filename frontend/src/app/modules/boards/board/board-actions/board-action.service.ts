import {Board} from "core-app/modules/boards/board/board";
import {QueryResource} from "core-app/modules/hal/resources/query-resource";
import {HalResource} from "core-app/modules/hal/resources/hal-resource";

export interface BoardActionService {

  /**
   * Get the attribute name
   */
  localizedName:string;

  /**
   * Returns the current filter value if any
   * @param query
   * @returns /api/v3/status/:id if a status filter exists
   */
  getFilterValue(query:QueryResource):string|undefined;

  /**
   * Add initial queries to a new board
   *
   * @param newBoard
   */
  addActionQueries(newBoard:Board):Promise<Board>;

  /**
   * Add a single action query
   */
  addActionQuery(board:Board, value:HalResource):Promise<Board>;

  /**
   * Get available values from the active queries
   */
  getAvailableValues(board:Board, queries:QueryResource[]):Promise<HalResource[]>;

  /**
   * Get action specific items that shall be shown in the list menu
   * @returns {any[]}
   */
  getAdditionalListMenuItems(actionAttributeValue:HalResource):Promise<any>;

  /*
   * Whether it is allowed to add new action entries (e.g. a new version)
   * @returns {boolean}
   */
  canCreateNewActionElements():Promise<boolean>;

  /**
   * Creates a new action entry (e.g. a new version) to be selectable as a list
   * @returns {any}
   */
  createNewActionElement(name:string):Promise<HalResource|void>;
}
