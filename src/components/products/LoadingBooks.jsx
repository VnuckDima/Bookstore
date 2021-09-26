import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBooks() {
     return (
    <ContentLoader 
    
    speed={2}
    width={300}
    height={690}
    viewBox="0 0 300 690"
    backgroundColor="gray"
    foregroundColor="#ecebeb"
  >
    <rect x="169" y="343" rx="0" ry="0" width="0" height="1" /> 
    <rect x="73" y="5" rx="30" ry="30" width="159" height="248" /> 
    <rect x="35" y="364" rx="0" ry="0" width="241" height="42" /> 
    <rect x="92" y="449" rx="0" ry="0" width="124" height="48" /> 
    <rect x="11" y="513" rx="30" ry="30" width="270" height="50" /> 
    <rect x="77" y="581" rx="30" ry="30" width="150" height="40" /> 
    <rect x="88" y="269" rx="30" ry="30" width="125" height="65" />
  </ContentLoader>
  ) 
}

export default LoadingBooks
