
import gql from "graphql-tag";

interface UserDataFragment {
  id: string; 

  heartRate: number; 
  bodyTemperature: number; 
  externalTemperature: number; 
  externalPressure: number; 
}

const USERDATA_FRAGMENT = gql`
  fragment UserDataFragment on USERDATA {
    id

    heartRate
    bodyTemperature
    externalTemperature
    externalPressure
  }
`;

export { UserDataFragment, USERDATA_FRAGMENT };

