export const cleanFilm = film => {
  console.log(film)
  const { title, opening_crawl, release_date, episode_id } = film
  const clean = { 
    title: `Episode ${episode_id}`,
    subtitle: title,
    scroll: opening_crawl,
    year: release_date.slice(0, 4)
  }
  return clean
}