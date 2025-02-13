import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import PhotoUploader from '@/components/PhotoUploader'
import { useStateContext } from '@/context/StateContext'
import { getAllUserPhotos } from '@/backend/Database'
const Dashboard = () => {

  const { user } = useStateContext()
  useEffect(() => {
    if(user){
      (async () => {
          const userPhotos = await getAllUserPhotos(user)
          setPhotoData(orderPhotos(userPhotos))
      })()
    }
  }, [user])



  return (
    <>

    </>
  )
}



export default Dashboard