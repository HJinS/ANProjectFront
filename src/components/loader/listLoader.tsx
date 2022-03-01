import React from "react"
import ContentLoader from "react-content-loader"

const MyListItemLoader = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="298" rx="2" ry="2" width="280" height="10" /> 
    <rect x="-2" y="2" rx="2" ry="2" width="280" height="280" /> 
    <rect x="0" y="346" rx="2" ry="2" width="280" height="10" /> 
    <rect x="0" y="322" rx="2" ry="2" width="280" height="10" />
  </ContentLoader>
)

export default MyListItemLoader