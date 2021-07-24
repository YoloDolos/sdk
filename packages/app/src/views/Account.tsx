import BorderButton from 'components/Button/BorderButton'
import Page from 'components/layout/Page'
import React, { useState } from 'react'
import { AppState } from "state";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import styles from 'styled-components'
import { Label, Text } from 'components/Text'
import { Heading } from 'components'
import Body from 'components/layout/Body'
import { useModal } from "components/Modal";
import BuyEggs from "components/BuyEggs";
import MyZooAccount from "views/MyZooAccount"

const HeadingContainer = styles.div`
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 0px 8px;
`

const StyledButton = styles.button`
    cursor: pointer;
    text-decoration: underline;
    text-transform: uppercase;
`

const LabelWrapper = styles.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`

const ValueWrapper = styles(Text)`
    color: white;
    width: 100%;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const RowWrapper = styles.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 16px;
`

const Account: React.FC = () => {
  const [eggsOwned, setEggsOwned] = useState(0)
const { account } = useWeb3React();

  const [onBuyEggs] = useModal(<BuyEggs />)
const allEggs = useSelector<AppState, AppState["zoo"]["eggs"]>(
  (state) => state.zoo.eggs
);
const currentEggsOwned = Object.values(allEggs).filter(egg=> egg.owner === account).length
// setEggsOwned(currentEggsOwned)

    const pageHeading = (<HeadingContainer >
                            <Heading >My Account</Heading>
                                <StyledButton style={{background: "transparent", border: "none", color: "white", marginLeft: "8px"}}>
                                    View Bank
                                </StyledButton>
                        </HeadingContainer>)
    return (
        <>
            <Page>
                {pageHeading}
                <Body>
                   
                    <LabelWrapper>
                        <Label>
                            Wallet Balance
                            </Label>
                        <BorderButton>
                                Add Funds
                            </BorderButton>
                    </LabelWrapper>
                        <RowWrapper>
                            <ValueWrapper>
                                Balance
                            </ValueWrapper>
                            
                        </RowWrapper>
                    <LabelWrapper >
                        <Label>
                          {currentEggsOwned} Eggs Owned
                        </Label>
                        <BorderButton onClick={() => onBuyEggs()} >
                            Buy Eggs
                        </BorderButton>
                         </LabelWrapper>
                    </Body>
                         <MyZooAccount />
            </Page>
        </>
    )
}

export default Account