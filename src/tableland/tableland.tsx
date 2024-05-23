import { Database } from "@tableland/sdk";
import {ethers} from "ethers"
export const tokensTable ="tokens_421614_730"
export const tokenIssuersTable ="tokenissuers_421614_729"
export const investorsTable = "investors_421614_728"

const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY)


const provider = new ethers.providers.JsonRpcProvider(
"https://endpoints.omniatech.io/v1/arbitrum/sepolia/public"  );

const signer = wallet.connect(provider);


const db = new Database({signer:signer})  
export const alterTable = async() =>{
    console.log(wallet)
    console.log(signer)
    console.log(db)
 await db
    .prepare(`Alter table ${investorsTable} ADD COLUMN kyc integer;`)
    .run();
    await db
    .prepare(`Alter table ${tokensTable} ADD COLUMN status integer;`)
    .run();
}


export const queryInvestor = async(id:string)=>{
    try{
    const { results } = await db.prepare(`SELECT * FROM ${investorsTable} where id='${id} ;`).all();

   return results;
}
catch(error:any)
{
    return []
}
}

export const queryInvestors = async()=>{
    try{
    const { results } = await db.prepare(`SELECT * FROM ${investorsTable} ;`).all();

   return results;
}
catch(error:any)
{
    return []
}
}


export const queryTokenIssuers = async()=>{
    try{
    const { results } = await db.prepare(`SELECT * FROM ${tokenIssuersTable} ;`).all();

   return results;
}
catch(error:any)
{
    return []
}
}



export const queryToken = async(id:string)=>{
    try{
    const { results } = await db.prepare(`SELECT * FROM ${tokensTable} where id='${id} ;`).all();

   return results;
}
catch(error:any)
{
    return []
}
}

export const queryTokens = async(issuer:string)=>{
    try{
    const { results } = await db.prepare(`SELECT * FROM ${tokensTable} where issuer='${issuer}' ;`).all();

   return results;
}
catch(error:any)
{
    return []
}
}


export const insertInvestor =async (id:string,firstname:string,lastname:string,email:string,country:string,state:string,city:string,street:string,zip:string) => {
    // Insert a row into the table
const { meta: insert } = await db
.prepare(`INSERT INTO ${investorsTable} (id, firstname,lastname,email,country,state,city,street,zip) VALUES ( ?,?,?,?,?,?,?,?,?);`)
.bind(id, firstname,lastname,email,country,state,city,street,zip)
.run();

// Wait for transaction finality
await insert.txn?.wait();
}


export const kycApproved =async (id:string) => {
    // Insert a row into the table
const { meta: insert } = await db
.prepare(`Update ${investorsTable}  set kyc=0 where id=?;`)
.bind(id)
.run();

// Wait for transaction finality
await insert.txn?.wait();
}

export const setTokenStatus =async (id:string,status:number) => {
    // Insert a row into the table
const { meta: insert } = await db
.prepare(`Update ${tokensTable}  set status=? where id=?;`)
.bind(status,id)
.run();

// Wait for transaction finality
await insert.txn?.wait();
}


export const insertTokenIssuer =async (id:string,firstname:string,lastname:string,company:string) => {
    // Insert a row into the table
const { meta: insert } = await db
.prepare(`INSERT INTO ${tokenIssuersTable} (id, firstname,lastname,company) VALUES ( ?,?,?,?);`)
.bind(id, firstname,lastname,company)
.run();

// Wait for transaction finality
await insert.txn?.wait();
}


export const insertToken =async (id:string,name:string,symbol:string,decimals:number,type:number,owner:string,issuer:string,logo:string) => {
    // Insert a row into the table
const { meta: insert } = await db
.prepare(`INSERT INTO ${tokensTable} (id, name,symbol,decimals,type,owner,issuer,logo,status) VALUES ( ?,?,?,?,?,?,?,?,0);`)
.bind(id, name,symbol,decimals,type,owner,issuer,logo)
.run();

// Wait for transaction finality
await insert.txn?.wait();
}