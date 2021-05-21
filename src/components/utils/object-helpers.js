export const updateObjectInArray = (items, itemId, objParamName, newObjProps) => {
  return items.map((u) => {
    if (u[objParamName] === itemId) {
      return { ...u, ...newObjProps }
    }
    return u
  })
}
