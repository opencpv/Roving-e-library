import axios from "axios";

const axiosGet = async (url: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_LIBRARY_API_URL}/categories`
    );
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    return { error: err };
  }
};

export default axiosGet;
