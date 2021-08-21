import { GET_POST } from "../Constant";

export const getPost= (id) => ({
	type: GET_POST,
	payload: id,
  });
