const findPlace = async name => {
  try {
    const response = await fetch(
      `http://43.202.227.20:8080/maps/search/name?name=${name}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('API Response:', responseData); // API 응답을 확인

    // API 응답이 배열이라면 그 자체를 반환
    return responseData;
  } catch (error) {
    console.error('Error findPlace', error);
    return null;
  }
};

export default findPlace;
