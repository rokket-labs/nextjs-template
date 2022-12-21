export type LaunchData = {
  mission_name: string
  launch_date_local: Date
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link: string
    video_link: string
  }
  rocket: {
    rocket_name: string
  }
  ships: {
    name: string
    home_port: string
    image: string
  }[]
}

export type QueryData = {
  launchesPast: LaunchData[]
}
