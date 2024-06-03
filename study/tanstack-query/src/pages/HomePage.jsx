import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   // 쿼리키는 배열로 만든다. 쿼리키의 첫 요소로는 데이터의 모델명을 문자열로 만든다. 두번쩨 요소로는 데이터를 설명하는 정보를 객체로 넣는다.
  //   queryKey: ["products"],
  //   queryFn: () => api.products.getProducts(),
  // });
  const {
    data: brands,
    isLoading,
    isError,
  } = useQuery({
    // 쿼리키는 배열로 만든다. 쿼리키의 첫 요소로는 데이터의 모델명을 문자열로 만든다. 두번쩨 요소로는 데이터를 설명하는 정보를 객체로 넣는다.
    queryKey: ["brands"],
    queryFn: () => api.brands.getBrands(),
  });
  if (isLoading) {
    return <Page>loading...</Page>;
  }
  if (isError) {
    console.log(isError);
    return <Page>{isError}</Page>;
  }

  return (
    <Page>
      <ol>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.nameEn}</li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
