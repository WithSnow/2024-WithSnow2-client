const getPlaceDetail = async name => {
  try {
    const response = await fetch(
      `http://43.202.227.20:8080/maps/name?name=${name}`,
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

    return responseData;
  } catch (error) {
    console.error('Error getPlaceDetail', error);
    return null;
  }
};

export default getPlaceDetail;
