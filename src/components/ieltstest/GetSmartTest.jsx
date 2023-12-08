// GetSmartTest.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../utils/useAxios";

const useGetSmartTest = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const api = useAxios();

  const getSmartTest = async (module_slug, book_slug, specific_test = null) => {
    if (user === null) {
      navigate(
        "/register/?alert=Please create an free account or login to start practice test.&variant=danger"
      );
    } else {
      var bodyFormData = new FormData();
      bodyFormData.append("specific_test", specific_test);

      const response = await api({
        method: "post",
        url: `/ieltstest/find_smart_test/${module_slug}/${book_slug}/`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        if (module_slug === "fulltest") {
          navigate(`/ieltstest/attempt/fulltest/${response.data.attempt}`);
        } else {
          navigate(
            `/ieltstest/attempt/${response.data.module_type}/${response.data.selected_module}/${response.data.attempt}`
          );
        }
      }
    }
  };

  return getSmartTest;
};

export default useGetSmartTest;
