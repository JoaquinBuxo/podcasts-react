export const fetchPodcasts = async () => {
  try {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.feed.entry;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};
