const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment


// for groth16 verifier
let content_multipier3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped_multipier3 = content_multipier3.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_multipier3 = bumped_multipier3.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_multipier3);



// for plonk verifier
let content_multipier3_plonk = fs.readFileSync("./contracts/Multiplier3_plonk_Verifier.sol", { encoding: 'utf-8' });
let bumped_multipier3_plonk = content_multipier3_plonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_multipier3_plonk = bumped_multipier3_plonk.replace(verifierRegex, 'contract Multiplier3_plonk_Verifier');

fs.writeFileSync("./contracts/Multiplier3_plonk_Verifier.sol", bumped_multipier3_plonk);