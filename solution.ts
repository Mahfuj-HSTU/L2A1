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
    return `'Name: ${this.name}, Age: ${this.age}'`
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

type ArrayType = string | number

const getUniqueValues = <T extends ArrayType>(
  value1: T[],
  value2: T[]
): T[] => {
  const combined: T[] = []
  const uniqueArray: T[] = []

  for (let i = 0; i < value1.length; i++) {
    combined.push(value1[i])
  }

  for (let i = 0; i < value2.length; i++) {
    combined.push(value2[i])
  }

  const exists = (arr: T[], item: T): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return true
      }
    }
    return false
  }

  for (let i = 0; i < combined.length; i++) {
    const item = combined[i]
    if (!exists(uniqueArray, item)) {
      uniqueArray.push(item)
    }
  }

  return uniqueArray
}

type Product = {
  name: string
  price: number
  quantity: number
  discount?: number
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0

  const totalPrice = products.reduce((total, product) => {
    const basePrice = product.price * product.quantity

    const discountAmount =
      product.discount && product.discount >= 0 && product.discount <= 100
        ? (basePrice * product.discount) / 100
        : 0

    const finalPrice = basePrice - discountAmount

    return total + finalPrice
  }, 0)
  return totalPrice
}
