// npx tsc-watch buildlab/lab-s/index.ts --outDir ./buildlab/lab-s/ignore-generated --onSuccess "node ./buildlab/lab-s/ignore-generated/index.js"

import * as web3 from '@solana/web3.js';
// import * as splToken from '@solana/spl-token';
(async () => {
  // Connect to cluster
  var connection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
    'confirmed',
  );

  // Generate a new wallet keypair and airdrop SOL
  var wallet = web3.Keypair.generate();
  var airdropSignature = await connection.requestAirdrop(
    wallet.publicKey,
    web3.LAMPORTS_PER_SOL,
  );

  //wait for airdrop confirmation
  await connection.confirmTransaction(airdropSignature);

  // get account info
  // account data is bytecode that needs to be deserialized
  // serialization and deserialization is program specic
  let account = await connection.getAccountInfo(wallet.publicKey);
  console.log(account);
})();
