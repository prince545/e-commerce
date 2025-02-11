import Layout from "../../components/layout/Layout"
import { useContext } from 'react';
import myContext from "../../context/data/myContext";


function Order(){
    const context = useContext(myContext)
    const {name, rollno} = context
    console.log(context)

  return (
    <Layout>
      order
      <h1> Name :{name}</h1>
        <h1> Roll No :{rollno}</h1>
    </Layout>
  )
}

export default Order
