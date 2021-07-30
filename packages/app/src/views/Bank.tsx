import BorderButton from "components/Button/BorderButton";
import styled from 'styled-components';
import StickyBottomMenu from "components/Button/StickyBottomMenu"
import Page from "components/layout/Page";
import React, { useState, useEffect } from "react";
import { AppState } from "state";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "hooks/useWeb3";
import { useHistory } from "react-router-dom";
import styles from "styled-components";
import { Label, Text } from "components/Text";
import { Flex, Heading } from "components";
import Body from "components/layout/Body";
import { useModal } from "components/Modal";
import BuyEggs from "components/BuyEggs";
import { getZooToken, getZooFaucet } from "util/contractHelpers";
import { useMatchBreakpoints } from 'components';
import { FaHome } from "react-icons/fa";
import Moralis from 'moralis'
import { resourceLimits } from "worker_threads";

const HeadingContainer = styles.div`
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 0px 8px;
`;

const StyledButton = styles.button`
    cursor: pointer;
    text-decoration: underline;
    text-transform: uppercase;
`;

const LabelWrapper = styles.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

const ValueWrapper = styles(Text)`
    color: white;
    width: 100%;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 16px;
    font-size: 18px;
`;
const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 16px;
  min-width: 280px;
`

const TableWrapper = styled.div`
  flex-direction: row;
  flex: 1 1 auto;
  
  -webkit-box-pack: start;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.table`
  display: flex;
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;
  overflow-x: scroll;
   &::-webkit-scrollbar-track {
   box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.primaryPop};
   border-radius: 10px;
   }
   &::-webkit-scrollbar-thumb {
   background-color: ${({ theme }) => theme.colors.primaryPop};
   }
   &::-webkit-scrollbar {

      height: 7px;
   }
`

const TableBody = styled.tbody`
width: fit-content;
  & tr {
     display: flex;
     flex-direction: row;
    justify-content: space-around;
    td {
      font-size: 16px;
      vertical-align: left;
    }
    th {
      vertical-align: left;
    }
  }
`

const TableRow = styled.tr`
  color: white;
`

const TableContainer = styled.div`
  position: relative;
`

const TableData = styled.td`
  width: 100px;
  margin: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TableHeader = styled.th`
   width: 100px;
   margin: 15px 0px;
   font-weight: 700;
   text-align: left;
   font-size: 18px;
`


Moralis.initialize("16weSJXK4RD3aYAuwiP46Cgzjm4Bng1Torxz5qiy");

Moralis.serverURL = "https://dblpeaqbqk32.usemoralis.com:2053/server";


const Bank: React.FC = () => {
   const [zooBalance, setBalance] = useState(0.0);
   const { account, chainId } = useWeb3React();
   const web3 = useWeb3();
   const history = useHistory();
   const { isXl } = useMatchBreakpoints();
   const [wait, setWait] = useState(false);
   const [Transactions, setTransactions] = useState([]);

   const zooToken = getZooToken(web3, chainId);

   const handleClick = () => {
      history.push("/account");
   };

   const faucet = getZooFaucet(web3, chainId);
   const faucetAmt = web3.utils.toWei("50");

   const getBalance = async () => {
      try {
         const decimals = await zooToken.methods.decimals().call();
         const rawBalance = await zooToken.methods.balanceOf(account).call();
         const divisor = parseFloat(Math.pow(10, decimals).toString());
         const balance = rawBalance / divisor;
         setBalance(balance);
      } catch (e) {
         console.error("ISSUE LOADING ZOO BALANCE \n", e);
      }
   };

   useEffect(() => {
      getBalance();
      getTransactions();
   }, [account, chainId]);

   useEffect(() => {
      getBalance();
   }, []);

   const handleFaucet = () => {
      try {
         setWait(true);
         faucet.methods
            .buyZoo(account, faucetAmt)
            .send({ from: account })
            .then(() => {
               setWait(false);
               getBalance();
            })
            .catch((e) => {
               console.error("ISSUE USING FAUCET \n", e);
               setWait(false);
            });
      } catch (e) {
         console.error("ISSUE USING FAUCET \n", e);
      }
   };

   const handleFunds = () => {
      console.log(chainId);
      switch (chainId) {
         case 97:
            handleFaucet();
            break;
         default:
            location.href =
               "https://pancakeswap.info/token/0x8e7788ee2b1d3e5451e182035d6b2b566c2fe997";
      }
   };

   const getTransactions = async() => {
      console.log("GETTING TRANSACTIONS")
      try {
         let tempTransactions = [];
         const MoralisObject = Moralis.Object.extend("Transactions");
         const query = new Moralis.Query(MoralisObject);
         query.limit(1000);
         query.equalTo("From", '0x40Fc963A729c542424cD800349a7E4Ecc4896624');
         const results = await query.find();
         console.log(results)
         for (let i = 0; i < results.length; i++) {
            const transaction = results[i];
            let string = String(transaction.get("createdAt"));
            const replacedString = string.replace("at ", "");
            const date = new Date(replacedString);
            const newDate = date.toLocaleDateString("en-US");
            console.log(newDate)
            const tempTx: any = {
               txHash: '' ,// transaction.get(""),
               txAction: transaction.get("Action"),
               from: transaction.get("From"),
               date: newDate,
               to: '',
            };
            tempTransactions.push(tempTx);
            
         }
         console.log(tempTransactions)
         setTransactions(tempTransactions);
      } catch (e) {
         console.error("ISSUE GETTING TRANSACTIONS \n", e);
      }
   }

   const pageHeading = (
      <HeadingContainer>
         <Heading>My Bank</Heading>
         <StyledButton
            style={{
               background: "transparent",
               border: "none",
               color: "white",
               marginLeft: "8px",
            }}
            onClick={() => handleClick()}>
            View Account
         </StyledButton>
      </HeadingContainer>
   );

   return (
      <>
         <Page>
            {pageHeading}
            <Body>
               <LabelWrapper>
                  <Label small>Wallet Balance</Label>

                  <BorderButton
                     scale="sm"
                     minWidth={!isXl ? "120px" : "140px"}
                     style={{ fontSize: `${!isXl ? "14px" : "16px"}` }}
                     onClick={handleFunds}>
                     {chainId !== 97
                        ? "Add Funds"
                        : wait
                           ? "Processing..."
                           : "Get Zoo"}
                  </BorderButton>
               </LabelWrapper>
               <Flex width="100%" alignItems="center" justifyContent="space-around">
                  <ValueWrapper>{zooBalance} ZOO </ValueWrapper>
                  {/* Commented out since there is to ZOO to USD conversion yet */}
                  {/* <ValueWrapper style={{ fontSize: "16px",  color: "rgb(221 224 26)" }}>0 USD</ValueWrapper> */}
               </Flex>
               <Label small>Total Daily Yield</Label>
               <ValueWrapper> 200 ZOO </ValueWrapper>
               <Label small>Recent Tansactions</Label>
               <Container>
                  <TableContainer>
                     <TableWrapper>
                        <StyledTable>
                           <TableBody>
                              <TableRow>
                                 <TableHeader>TxHash</TableHeader>
                                 <TableHeader>Action</TableHeader>
                                 <TableHeader>From</TableHeader>
                                 <TableHeader>To</TableHeader>
                                 <TableHeader>Date</TableHeader>
                              </TableRow>
                              {Transactions.map((transaction) => {
                                 return (
                                    <TableRow>
                                       <TableData>{transaction.txHash}</TableData>
                                       <TableData>{transaction.txAction}</TableData>
                                       <TableData>{transaction.from}</TableData>
                                       <TableData>{transaction.to}</TableData>
                                       <TableData>{transaction.date}</TableData>
                                    </TableRow>
                                 )
                              })}
                           </TableBody>
                        </StyledTable>
                     </TableWrapper>
                  </TableContainer>
               </Container>
            </Body>
         </Page>
      </>
   );
};

export default Bank;
