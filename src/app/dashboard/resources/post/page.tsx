import { HeaderOne } from "@/components";

const PostResourcePage = () => {
  // here we will use a form to 'post' a new resource (actually save it in localstorage)
  // resources will then add localStorage resources to the beginning of the resources array
  return (
    <div>
      <HeaderOne>Post Resource</HeaderOne>
      <p>Page to create new resource entries for businesses and charities.</p>
    </div>
  );
};

export default PostResourcePage;
