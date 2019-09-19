import gql from "graphql-tag";

import {  UserDataFragment, USERDATA_FRAGMENT } from "../../fragments"; 

interface TimeDataShard {
  userData: UserDataFragment; 
}

const TIMEDATA_SHARD = gql`
  fragment TimeDataShard on TimeData {
    ...UserDataFragment
  }
  ${USERDATA_FRAGMENT}

`;

export { TimeDataShard, TIMEDATA_SHARD };
