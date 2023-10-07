const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publishDate: 2005,
        currentEdition: "Paperback"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publishDate: 1990,
        currentEdition: "Hardcover"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishDate: 1937,
        currentEdition: "Paperback"
    },
    {
        title: "A Song of Ice and Fire",
        genre: "Fantasy",
        publishDate: 1996,
        currentEdition: "Hardcover"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        publishDate: 2011,
        currentEdition: "Paperback"
    },
    {
        title: "The Guns of August",
        genre: "History",
        publishDate: 1962,
        currentEdition: "Paperback"
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        publishDate: 1965,
        currentEdition: "Hardcover"
    },
    {
        title: "Neuromancer",
        genre: "Science Fiction",
        publishDate: 1984,
        currentEdition: "Ebook"
    },
    {
        title: "Pride and Prejudice",
        genre: "Fiction",
        publishDate: 1813,
        currentEdition: "Paperback"
    },
    {
        title: "Brave New World",
        genre: "Science Fiction",
        publishDate: 1932,
        currentEdition: "Paperback"
    }
];

let UserBooks = books.filter((book) => book.genre === "Fantasy")

UserBooks = books.filter((book) => {
    return book.genre === "Fiction" && book.publishDate >= 1990;
});

console.log(UserBooks); 