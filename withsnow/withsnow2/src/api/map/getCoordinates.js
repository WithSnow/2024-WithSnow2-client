const getCoordinates = async name => {
  try {
    const encodedName = encodeURIComponent(name);
    const response = await fetch(
      `http://43.202.227.20:8080/maps/route?origin=${encodedName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log('API Response: ', responseData);

    // API 응답에서 latitude와 longitude 추출
    if (responseData && responseData.origin) {
      const {latitude, longitude} = responseData.origin;
      return {
        latitude,
        longitude,
      };
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.log('Error in getCoordinates:', error.message);
    return null;
  }
};

export default getCoordinates;
