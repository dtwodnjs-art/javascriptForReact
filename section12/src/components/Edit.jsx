import { useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Header from "./Header";

const Edit = ()=>{
   const params = useParams();
  return <>
    <h2>{params.id} Edit</h2>
  </>
}
export default Edit; 