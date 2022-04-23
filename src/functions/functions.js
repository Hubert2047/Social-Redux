  export const calDate = (date) => {
      let diffDate = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 60))
      if (diffDate < 60) {
          return `${diffDate}m`
      } else if (diffDate < 1440) {
          return `${Math.floor(diffDate/60)}h`
      } else if (diffDate) {
          return `${Math.floor(diffDate/1440)}d`
      } else {
          return `${Math.floor(diffDate/525600)}y`
      }
  }