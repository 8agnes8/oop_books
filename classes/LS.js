class LS {
    getData(key){
        let data
        if(localStorage.getItem('books')
            === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(key));

    } return data

    }

      setData(key, data){
        localStorage.setItem(key, JSON.stringify(data))
      }
    addBook(book){
        const books = this.getData('books')
        books.push(book)
        this.setData('books', books)
    }
}