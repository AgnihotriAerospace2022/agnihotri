'use client'  ;
import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
import ModelViewerComponent from './mode';
function Model() {
  return (
    <div>
       <ModelViewerComponent src={"public/model/wwww.gltf"}></ModelViewerComponent>
    </div>
  )
}

export default Model