'use client';
import { moviesActions } from "@/slices/movieSlice";
import { AppDispatch, RootState } from "@/store/store";

import { useDispatch, useSelector } from "react-redux";

function page() {
    const dispatch  = useDispatch  <AppDispatch>()
    
    const submitContact = async (event :any) => {
        event.preventDefault();
        const name = event.target.first.value
        const newName = event.target.new.value
        dispatch(moviesActions.edit({name: name, newName:newName}))
      };
  return (
    <div>
      <form onSubmit={submitContact}>
  <label htmlFor="first">Movie name:</label>
  <input type="text" id="first" name="first" />
  <label htmlFor="first">New name:</label>
  <input type="text" id="new" name="new" />
  <button type="submit">Submit</button>
</form>
    </div>
  );
}

export default page;
