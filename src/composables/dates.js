export function useDate() {

  function formatDateFn(dates) {
    dates.map((element) => {
      const weekday = element.substring(0, 2)
      const time = element.substring(2)

      return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} - ${time} Uhr`

    })
  }
  return { formatDateFn };
}
