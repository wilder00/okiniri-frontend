import HeaderApp from "../components/forLayout/HeaderApp"

const DefaultLayout = ({children})=>{

  return (
    <div>
      <HeaderApp/>

      { children }
      
    </div>
  )

}

export default DefaultLayout