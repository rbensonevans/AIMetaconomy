// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { addressToEntity } from "../Utils.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

import {
    EconomyType,
    EconomyTypeData,
} from  "../codegen/Tables.sol";

contract EconomyTypeSystem is System {
    
    function addEconomyType(string memory name, string memory description) public {
        bytes32 id = getUniqueEntity();

        EconomyType.set(id, EconomyTypeData({
            name : name,
            description : description,
        }));

    }
}
