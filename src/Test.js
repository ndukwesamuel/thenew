import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import PostList from "./PostList";

const url = "http://www.omdbapi.com/?apikey=701834b&s=real";

// const url = fetch(http://www.omdbapi.com/?apikey=[your-apikey]&s=batman)

function Test() {
  let f = [1, 23, 4, 4, 5, 66, 6, 6];
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [dat, setDat] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(dat);
    let main_search = dat;

    const get__data = async () => {
      // real
      let data = `http://www.omdbapi.com/?apikey=701834b&s=${main_search}`;
      const res = await fetch(data);
      const blogs = await res.json();
      console.log(blogs);
      console.log(blogs);
      setIsPending(false);
      setData(blogs.Search);
    };

    get__data();
    // if(F_name && L_name && email ){
    //     fetch(url + testid, {
    //         method: 'PATCH',
    //         headers:{ "Content-Type": "application/json" },
    //         body: JSON.stringify(data)

    //     }) .then( () => {
    //         history.push(`/${testid}`)
    //         console.log('uPDATE blog added');
    //     }).catch( (err) => {
    //         console.log(err);
    //     })
    // }
  };

  //   const get_All_data = async () => {
  //     const res = await fetch(url);
  //     const blogs = await res.json();
  //     console.log(blogs);
  //     setIsPending(false);
  //     setData(blogs.Search);
  //   };

  useEffect(() => {
    // get_All_data();

    return () => {};
  }, []);

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor=""> First name</label>
        <input
          type="text"
          name="dat"
          value={dat}
          id=""
          onChange={(e) => setDat(e.target.value)}
        />
      </form>
      {isPending && <h1> Loading ... </h1>}
      {data && <PostList blogs={data} />}
    </div>
  );
}

export default Test;
