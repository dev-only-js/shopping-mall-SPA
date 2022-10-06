const API_END_POINT = `https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products`;

const req = async (url) => {
  const res = await fetch(`${API_END_POINT}${url}`);
  if (res.ok) {
    const json = await res.json();
    return json;
  } else {
    throw new Error("요청 실패");
  }
};

export const fetchData = async (url) =>
  await req(url).catch((e) => console.log(e));
