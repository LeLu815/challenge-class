import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    // 쿼리키는 배열로 만든다. 쿼리키의 첫 요소로는 데이터의 모델명을 문자열로 만든다. 두번쩨 요소로는 데이터를 설명하는 정보를 객체로 넣는다.
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });
  let productsElement;
  if (productsLoading) {
    productsElement = <Page>products loading...</Page>;
  }
  if (productsError) {
    console.log(productsError);
    productsElement = <Page>products error...</Page>;
  }
  if (products) {
    productsElement = (
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    );
  }
  console.log(products);

  const {
    data: brands,
    isLoading: brandLoading,
    isError: brandError,
  } = useQuery({
    // 쿼리키는 무조건 배열로 만든다(공식 가이드).
    // 쿼리키의 첫 요소로는 데이터의 모델명을 문자열로 만든다. 두번쩨 요소로는 데이터를 설명하는 정보를 객체로 넣는다. { page : 2 }
    queryKey: ["brands"],
    // 데이터를 가져오는 함수
    // 함수 자리에는 항상 promise가 들어가야 한다. (데이터를 돌려주겠다는 약속)
    queryFn: () => api.brands.getBrands(),
  });
  let brandsElement;
  if (brandLoading) {
    brandsElement = <Page>brands loading...</Page>;
  }
  if (brandError) {
    brandsElement = <Page>brands error...</Page>;
  }
  if (brands) {
    brandsElement = (
      <ol>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.nameEn}</li>
        ))}
      </ol>
    );
  }

  return (
    <Page>
      {productsElement}
      <hr />
      {brandsElement}
    </Page>
  );
}

export default HomePage;
