export const getSearchHistory = async name => {
  try {
    const response = await fetch(`http://43.202.227.20:8080/search-history`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData.result;
  } catch (error) {
    console.error('Error getSearchHistory', error);
    return null;
  }
};

export default getSearchHistory;
