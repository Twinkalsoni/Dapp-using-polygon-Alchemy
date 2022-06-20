async function main() {
    const GoodMorning = await ethers.getContractFactory("GoodMorning");
 
    // Start deployment, returning a promise that resolves to a contract object
    const good_morning = await GoodMorning.deploy("gm everyone!");   
    console.log("Contract deployed to address:", good_morning.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
   