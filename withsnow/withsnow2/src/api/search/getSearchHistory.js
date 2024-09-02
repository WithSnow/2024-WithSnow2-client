const getSearchHistory = async () => {
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
    console.log('API Response:', responseData);

    // 응답 데이터가 배열인지 확인
    if (!Array.isArray(responseData)) {
      console.error('No valid data returned from the API.');
      return null;
    }

    return responseData;
  } catch (error) {
    console.error('Error getSearchHistory', error);
    return null;
  }
};

export default getSearchHistory;
