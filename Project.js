/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs=[]

/*
This function will take some values as parameters. Create a NFT
object using the parameters passed to it for its metadata, 
and store it in the variable above.
*/

function mintNFT(_name,_Matches,_Runs) {
    const NFT = {
        name: _name,
        matches: _Matches,
        runs: _Runs,
    }
    NFTs.push(NFT);
    console.log("Batsman_Name : ",_name);
}

/*
create a "loop" that will go through an "array" of NFT's
and print their metadata with console.log()
*/

function listNFTs() {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nName :", NFTs[i].name);
        console.log("Matches_Played :", NFTs[i].matches);
        console.log("Runs_Scored :", NFTs[i].runs);
    }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log("\nTotal number of Batsman : ",NFTs.length);
}

// call your functions 

mintNFT("Virat Kohli","334","12049");
mintNFT("Rohit Sharma","303","8088");
mintNFT("Sachin Tendulkar","357","10890");

listNFTs();
getTotalSupply();
