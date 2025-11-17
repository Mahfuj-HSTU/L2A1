export {}

type ArrayType = string | number

const getUniqueValues = <T extends ArrayType>(
  value1: T[],
  value2: T[]
): T[] => {
  const combined = [...value1, ...value2]
  const uniqueArray: T[] = []

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

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]
console.log(getUniqueValues(array1, array2))
