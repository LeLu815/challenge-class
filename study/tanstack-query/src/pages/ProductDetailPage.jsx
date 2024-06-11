import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
    // refetchOnWindowFocus: true,
    // refetchInterval: 1000,
  });
  if (isLoading) {
    return <Page>loading...</Page>;
  }
  if (isError) {
    return <Page>error...</Page>;
  }
  console.log(product);
  return (
    <Page>
      <h1>{product.name}</h1>
      <img src={product.imgSrc} alt="제품 사진" />
    </Page>
  );
}

export default ProductDetailPage;
