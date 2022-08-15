import HeaderApp from "../components/forLayout/header-app"

const DefaultLayout = ({children})=>{

  return (
    <div>
      <HeaderApp/>

      { children }
      
    </div>
  )

}

export default DefaultLayout