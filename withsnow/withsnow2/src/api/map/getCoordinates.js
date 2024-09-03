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

    // 여기서 responseData가 올바른 구조인지 확인하고 필요하면 가공
    if (responseData && responseData.latitude && responseData.longitude) {
      return {
        latitude: responseData.latitude,
        longitude: responseData.longitude,
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
