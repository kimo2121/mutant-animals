import React from "react";
import { useEffect, useState } from "react";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Countdown from "react-countdown";
import * as anchor from "@project-serum/anchor";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../../utils/candy-machine";
import styled from "styled-components";

const CounterText = styled.span``; // add your styles here
const MintButton = styled(Button)`
  padding: 5px 13px !important;
  border: 1px solid #eee !important;
  border-radius: 3px !important;
  text-transform: uppercase !important;
  font-size: 9px !important;
  height: 25px !important;
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  color: white !important;
  width: 150px;
  position: relative !important;
  -webkit-animation-delay: 1.2s !important;
  animation-delay: 1.2s !important;
  border: 1px solid white !important;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) !important;
  background-color: #f24259 !important;
  border-color: #f24259 !important;
  &:hover {
    color: #000 !important;
    background-color: transparent !important;
    border-color: white !important;
    text-shadow: nthree !important;
  }
  &:hover:before {
    left: 0% !important;
    right: auto !important;
    width: 100% !important;
  }
  &:before {
    display: block !important;
    position: absolute !important;
    top: 0px !important;
    right: 0px !important;
    height: 100% !important;
    width: 0px !important;
    z-index: -1 !important;
    content: "" !important;
    color: black !important !important;
    background: white !important;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) !important;
  }
  span:before {
    color: black !important;
  }
`; // add your styles here
interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}
const Mint = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      } else {
        setAlertState({
          open: true,
          message: "Please connect wallet correctly!",
          severity: "error",
        });
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (!wallet) return;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          wallet as anchor.Wallet,
          props.candyMachineId,
          props.connection
        );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);
  return (
    <div>
      <MintButton
        className="mint-btn"
        disabled={isSoldOut || isMinting || !isActive}
        onClick={onMint}
        variant="contained"
      >
        {isSoldOut ? (
          "SOLD OUT"
        ) : isActive ? (
          isMinting ? (
            <CircularProgress style={{ width: "15px", height: "15px" }} />
          ) : (
            "MINT"
          )
        ) : (
          <Countdown
            date={startDate}
            onMount={({ completed }) => completed && setIsActive(true)}
            onComplete={() => setIsActive(true)}
            renderer={renderCounter}
          />
        )}
      </MintButton>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Mint;
