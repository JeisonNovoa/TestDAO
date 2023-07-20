async function main() {
  // Grab the contract factory
  const MyGovernor = await ethers.getContractFactory("MyGovernor");

  // Start deployment, returning a promise that resolves to a contract object
  const myGovernor = await MyGovernor.deploy(
    "0x4D9B6e6cdb63aF9E8fFc7a9F6b9C1a314dfD6BD4"
  ); // Instance of the contract taking token contract address as input
  console.log("Contract deployed to address:", myGovernor.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
