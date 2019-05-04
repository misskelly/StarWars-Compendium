export const cleanFilm = film => {
  const { title, opening_crawl, release_date, episode_id } = film
  const num = getNumeral(episode_id)
  const clean = { 
    title: `Episode ${num}`,
    subtitle: title,
    scroll: opening_crawl,
    year: release_date.slice(0, 4)
  }
  console.log('film:', film);
  return clean
}

export const getNumeral = num => {
  const i = num - 1;
  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
  return numerals[i];
}