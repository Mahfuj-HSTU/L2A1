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
