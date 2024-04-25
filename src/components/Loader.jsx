import { CircularProgress } from "@mui/material"
import { Html,useProgress } from "@react-three/drei"
CircularProgress

const Loader = () => {
  
  return (
    <Html>
       <div className="flex items-center justify-center h-[300px]">
       <CircularProgress color="secondary" />
      </div>
    </Html>
  )
}

export default Loader