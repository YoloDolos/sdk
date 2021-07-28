import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Modal as Existing, Text, Flex, Label, Button } from "components";
import BorderButton from "components/Button/BorderButton";
import { useModal, BottomModal } from "components/Modal";
import Confirmation from "./ConfirmationModal";
import Moralis from "moralis";
import { useWeb3React } from "@web3-react/core";
import { Animal } from "entities/zooentities";
import { addAnimal } from "state/actions";

Moralis.initialize("16weSJXK4RD3aYAuwiP46Cgzjm4Bng1Torxz5qiy");

Moralis.serverURL = "https://dblpeaqbqk32.usemoralis.com:2053/server";

interface Props {
   onDismiss?: () => null;
   item: Animal;
}

const BidInput = styled.input.attrs({
   type: "number",
   min: 1,
})`
   width: 90%;
   /* margin: auto; */
   font-size: 23px;
`;

const ButtonContent = styled(Flex)`
   justify-content: space-around;
   margin-top: 35px;
`;

const BidModal: React.FC<Props> = ({ onDismiss = () => null, item }) => {
   const [value, setValue] = React.useState(parseInt(item.currentBid) + 1);
   const { account } = useWeb3React();
   const dispatch = useDispatch();
   console.log(item);

   const confirmBuy = async () => {
      const toSet: Animal = { ...item };
      toSet.listed = true;
      toSet.owner = account;
      dispatch(addAnimal(toSet));
      // const queryObject = Moralis.Object.extend("Animals")
      // const query = new Moralis.Query(queryObject)
      // query.limit(1000)
      // query.equalTo("TokenId", item.AnimalId)
      // const results = await query.find()
      // const currentObject = results[0]
      // currentObject.set("Listed", false)
      // currentObject.set
      // currentObject.set("OwnerAccount", account)
      // currentObject.save()

      onDismiss();
   };
   const confirmBid = async () => {
      console.log(value);
      // const queryObject = Moralis.Object.extend("Animals")
      // const query = new Moralis.Query(queryObject)
      // query.limit(1000)
      // query.equalTo("TokenId", item.AnimalId)
      // const results = await query.find()
      // const currentObject = results[0]
      // currentObject.set("CurrentBid", value)
      // currentObject.set("BuyNow", value + 100)
      // currentObject.save()
      const toSet: Animal = { ...item };
      toSet.currentBid = value.toString();
      toSet.buyNow = (value + 100).toString();
      dispatch(addAnimal(toSet));
      onDismiss();
   };

   const [onConfirmBuy] = useModal(
      <Confirmation
         confirmation={confirmBuy}
         onDismiss={() => null}
         action="Buy"
         name={item.name}
         amount={parseFloat(item.buyNow)}
      />
   );
   const [onConfirmBid] = useModal(
      <Confirmation
         confirmation={confirmBid}
         onDismiss={() => null}
         action="Bid"
         name={item.name}
         amount={parseFloat(item.currentBid)}
         submission={value}
      />
   );

   const changed = () => (e) => {
      const newVal = e.target.value;
      if (newVal > value) {
         setValue(parseInt(newVal));
      }
   };

   return (
      <>
         <BottomModal
            header={`${item.name}`}
            onDismiss={onDismiss}
            height={`370px`}>
            <Flex
               width="100%"
               justifyContent="center"
               alignContent="center"
               flexDirection="column"
               pl="20px"
               pr="20px"
            >
               <Label fontSize="22px" color="text" fontWeight="550">
                  Current Bid
               </Label>
               <Text bold ml="16px" mt="4px" mb="16px" fontSize="22px" color="text">
                  {item.currentBid}
               </Text>
               <Label fontSize="22px" color="text" fontWeight="550">
                  Buy Now
               </Label>
               <Text bold ml="16px"  mt="4px" mb="16px" fontSize="22px" color="text">
                  {item.buyNow}
               </Text>
               <BidInput
                  type="number"
                  onChange={changed()}
                  defaultValue={value}
               />
               <ButtonContent>
                  <BorderButton
                     scale="md"
                     width="120px"
                     onClick={() => onConfirmBuy()}>
                     Buy Now
                  </BorderButton>
                  <BorderButton
                     scale="md"
                     width="120px"
                     onClick={() => onConfirmBid()}>
                     Bid
                  </BorderButton>
               </ButtonContent>
            </Flex>
         </BottomModal>
      </>
   );
};

export default BidModal;
