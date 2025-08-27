import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-amber-100">
      <SingleInfo text="aaglesharamesh7@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91-7023492370" Image={FiPhone} />
      <SingleInfo text="Ahmedabad,Gujarat" Image={IoLocationOutline} />
    </div>
  )
}
