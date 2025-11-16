const formatValue = <T extends string | number | boolean>(value: T): T => {
  if (typeof value === 'string') {
    return value.toUpperCase() as T
  } else if (typeof value === 'number') {
    return (value * 10) as T
  } else if (typeof value === 'boolean') {
    return !value as T
  }
  return value
}

const getLength = (value: string | string[] | number[]): number => {
  if (typeof value === 'string') {
    return value.length
  } else if (Array.isArray(value)) {
    return value.length
  }
  return 0
}

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  }
}

type Items = {
  title: string
  rating: number
}

const filterByRating = (items: Items[]): Items[] => {
  return items.filter((item) => item.rating >= 4)
}

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(
    (user) => typeof user.isActive === 'boolean' && user.isActive === true
  )
}

interface Book {
  title: string
  author: string
  publishedYear: number
  isAvailable: boolean
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}`
  )
}
