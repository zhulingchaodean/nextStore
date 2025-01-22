import { Metadata } from "next";
// import sampleData from "@/db/simple-data";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

// const delay = (ms:number)=>new Promise((resolve)=>{
//   setTimeout(resolve, ms);
// })

export const metadata:Metadata = {
  title:"home"
}

const HomePage = async() => {
  const latestProducts = await getLatestProducts();
  // await delay(1000);
  return ( 
    <ProductList data={latestProducts} title="Newest Arrivals"/>
   );
}
 
export default HomePage;
