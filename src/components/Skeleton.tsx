
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={100}
    height={100}
    viewBox="0 0 100 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="3" rx="10" ry="10" width="100" height="20" /> 
    <rect x="15" y="216" rx="5" ry="5" width="188" height="22" /> 
    <rect x="4" y="40" rx="0" ry="0" width="90" height="21" />
  </ContentLoader>
)

export default MyLoader