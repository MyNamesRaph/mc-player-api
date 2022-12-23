import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import getTranslatedRoutes from "../../data/menu_routes.ts";
import DeleteForm from  "../../islands/delete_form.tsx";
import CreateForm from "../../islands/create_form.tsx";

export default function Players() {
  return (
    <div class="flex flex-col h-full">
      <Header active="/players" menu={getTranslatedRoutes("en")}/>
      <div class="bg-stone-dark flex-1">
        <DeleteForm></DeleteForm>
        <CreateForm></CreateForm>
      </div>
      <Footer menu={getTranslatedRoutes("en")}></Footer>
    </div>
  );
}
