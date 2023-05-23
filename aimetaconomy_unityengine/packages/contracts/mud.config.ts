import { mudConfig, resolveTableId } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    /*
     * TODO:
     * - Position: (x: int32, y: int32),
     * - Health: uint32,
     * - Player: bool,
     * - Damage: uint32
     */
    ToDo: {
      schema: {
        done : "bool",
        owner: "bytes32",
        body : "string",
      }
    },
    EconomyType: {
      schema: {
      name : "string",
      description : "string",
      }
    },
    Country : {
      schema : {
      economyType : "string",
      population : "int32",
      name : "string",
      }
    },
    Imports : {
      schema : {
      import_id : "int32",
      name : "string",
      dollarAmount : "int32",
      }
    },
    Exports : {
      schema : {
      export_id : "int32",
      name : "string",
      dollarAmount : "int32",
      }
    },
    GoldReserve : {
      schema : {
      dollarAmount : "int32",
      fxAmount : "int32",
      }
    },
    DollarAmount : {
      schema : {
      dollarAmount : "int32",
      fxAmount : "int32",
      cashType : "string",
      }
    },
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
