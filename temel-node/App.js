import axios from "axios";

const getData = async (user_id) => {
  const { data: User } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const { data: Posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  console.log(User, Posts);
};

export default getData;
