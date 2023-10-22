
import { io } from "socket.io-client";
import TableWiget from "../../components/OrderBookTable/TableWiget";
import { useState } from 'react';
import Star from "../../components/commom/icons/Star"
import StarHalf from "../../components/commom/icons/StarHalf"
import StarFill from "../../components/commom/icons/StarFill"
import Search from "../../components/commom/icons/Search"
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}
