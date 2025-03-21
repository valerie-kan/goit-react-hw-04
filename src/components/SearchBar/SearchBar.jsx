import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const searchByWord = (evt) => {
    evt.preventDefault();
    const searchWord = evt.currentTarget.elements.searchWord.value;

    if (searchWord.trim() === "") {
      toast("Enter a word to search!", {
        position: "top-right",
        duration: 1000,
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#FFCC00",
          color: "#333",
        },
      });
    } else {
      onSubmit(searchWord);
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={searchByWord}>
        <Toaster />
        <input
          className={css.input}
          type="text"
          name="searchWord"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
