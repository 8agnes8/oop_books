//app objects
const ui = new UI()
const ls = new LS()

//user input form
const form = document.querySelector('#book-form')
form.addEventListener('submit' , addBook)


//addbook function
function addBook(event){
    //get form data from input
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value

    //create book object with user data
    const book = new Book(title, author, isbn)


    //add book data to UI and show it
    ui.addBook(book)
    //save book data to local storage
    ls.addBook(book)







    //clear from input
    ui.title.value = ''
    ui.author.value = ''
    ui.isbn.value = ''
    event.preventDefault()


}
//page reload
document.addEventListener('DomContentLoaded', getBooks)

//books table click event
const bookList = document.querySelector('#book-list')
bookList.addEventListener('click', delBook)



// book filter keyboard event
const filter = document.querySelector('#filter')
filter.addEventListener('keyup', filterBook)

function filterBook(event){
    let filter = event.title.value.toLowerCase()
    ui.filterData(filter)
}




//delbook
function delBook(event){
    if(event.target.textContent === 'X'){
            const book = ui.getBook(event.target)
            if(ui.delBook(event.target) === true){
                ls.delBook(book)
            }


        }

    }



function getBooks (){
    //get data from ls
    const books = ls.getData('books')

    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}
