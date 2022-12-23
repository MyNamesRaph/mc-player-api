import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import getTranslatedRoutes from "../../data/menu_routes.ts";
import ApiKeyForm from "../../islands/api_key_form.tsx";

export default function Auth() {
  

  return (
    <div class="flex flex-col h-full">
      <Header active="/auth" menu={getTranslatedRoutes("fr")}/>
      <div class="flex flex-1 bg-stone-dark justify-center items-center">
        <ApiKeyForm></ApiKeyForm>
      </div>
      <Footer menu={getTranslatedRoutes("en")}></Footer>
    </div>
  );
}
