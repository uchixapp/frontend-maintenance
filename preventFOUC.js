(() => {
  const html = document.documentElement
  const theme = window.localStorage.getItem('theme')

  try{
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      window.localStorage.setItem('theme', 'dark')
      html.classList.add('dark')
    }
    else{
      window.localStorage.setItem('theme', 'light')
      html.classList.remove('dark')
    }
  }
  catch(_) {}
})()
