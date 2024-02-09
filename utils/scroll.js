const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth' // Per uno scorrimento fluido
    })
  }
}

export {
  scrollToElement
}
