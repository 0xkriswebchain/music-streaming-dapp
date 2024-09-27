import { deployContract } from "./utils";

export default async function () {
  // Deploying the GeneralPaymaster contract
  const Paymaster = "GeneralPaymaster";
  const PaymasterArguments: any[] = [];
  await deployContract(Paymaster, PaymasterArguments);

  // Deploying the zkTune contract
  const contractArtifactName = "zkTune";
  const dAppArguments: any[] = [];
  await deployContract(contractArtifactName, dAppArguments);
}
